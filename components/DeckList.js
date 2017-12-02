import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, lightGray, lighterGray, white, lightBlue200, blueGray900, lightBlue800 } from '../utils/colors'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux'

const styles = StyleSheet.create({
  notFound: {
    fontSize: 20,
    color: blueGray900,
    fontWeight: '600',
    marginTop: 10
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: lighterGray
  },
  card: {
    alignItems: 'center',
    backgroundColor: white,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, .24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  addCard: {
    backgroundColor: lightBlue800,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, .24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
})

const NoDecks = (nav) => {
  return (
    <View>
      <View style={styles.card}>
        <FontAwesome name='warning' size={24} color={lightBlue200} />
        <Text style={styles.notFound}>0 decks found</Text>
      </View>
      <TextButton style={styles.addCard} onPress={() => {
        nav.navigation.dispatch(NavigationActions.navigate({
          routeName: 'AddDeck'
        }))
      }}>
        <Text>ADD DECK</Text>
      </TextButton>
    </View>
  )
}

const DeckCard = ({deck = {}}) => {
  let { title = '', total = 0 } = deck
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 24, color: gray }}>{title}</Text>
      <Text style={{ fontSize: 16, color: lightGray }}>{total} cards</Text>
    </View>
  )
}

const Wrapper = ({children}) => <View style={styles.container}>{children}</View>

class DeckList extends Component {
  render() {
    let { decks, navigation } = this.props
    return (
      <Wrapper>
        {!decks || decks.length === 0
          ? <NoDecks navigation={navigation} />
          : decks.map((deck, index) => <DeckCard key={index} deck={deck} />)
        }
      </Wrapper>
    )
  }
}

export default connect(
  (state) => ({
    decks: state.deck.decks
  })
)(DeckList)
