import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { deckStyles } from './styles'
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
  },
  deckTitle: {
    fontSize: 24,
    color: gray
  },
  cardCount: {
    fontSize: 16,
    color: lightGray
  }
})

const NoDecks = (nav) => {
  return (
    <View>
      <View style={deckStyles.card}>
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

const DeckCard = ({deck = {}, onPress}) => {
  let { title = '', cards = [] } = deck
  return (
    <TouchableOpacity style={deckStyles.card} onPress={onPress}>
      <Text style={styles.deckTitle}>{title}</Text>
      <Text style={styles.cardCount}>{cards.length} cards</Text>
    </TouchableOpacity>
  )
}

const Wrapper = ({children}) => <ScrollView contentContainerStyle={deckStyles.container}>{children}</ScrollView>

class DeckList extends Component {
  viewDeck = deck => {
    let { navigation } = this.props
    console.log(navigation)
    navigation.navigate(NavigationActions.navigate(
      'DeckView',
      { deck: deck }
    ))
  }
  render() {
    let { decks, navigation } = this.props
    return (
      <Wrapper>
        {!decks || decks.length === 0
          ? <NoDecks navigation={navigation} />
          : decks.map((deck, index) => (
            <DeckCard
              key={deck.id}
              deck={deck}
              onPress={() => this.viewDeck(deck)}
            />
          ))
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
