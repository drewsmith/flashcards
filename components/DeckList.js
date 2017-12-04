import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { deckStyles, ContainerView, BlueButton } from './common'
import { blueGray900, lightBlue200 } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

const styles = StyleSheet.create({
  notFound: {
    fontSize: 20,
    color: blueGray900,
    fontWeight: '600',
    marginTop: 10
  }
})

const NoDecks = () => {
  return (
    <View>
      <View style={deckStyles.card}>
        <FontAwesome name='warning' size={24} color={lightBlue200} />
        <Text style={styles.notFound}>0 decks found</Text>
      </View>
    </View>
  )
}

const DeckCard = ({deck = {}, onPress}) => {
  let { title = '', cards = [] } = deck
  return (
    <TouchableOpacity style={deckStyles.card} onPress={onPress}>
      <Text style={deckStyles.deckTitle}>{title}</Text>
      <Text style={deckStyles.cardCount}>{cards.length} cards</Text>
    </TouchableOpacity>
  )
}

class DeckList extends Component {
  componentDidMount() {
    let { fetchDecks } = this.props
    fetchDecks()
  }
  render() {
    let { decks, navigation, viewAddDeck, viewDeck } = this.props
    return (
      <ContainerView>
        {!decks || decks.length === 0
          ? <NoDecks />
          : Object.keys(decks).map(key => {
            let deck = decks[key]
            return (
              <DeckCard
                key={deck.id}
                deck={deck}
                onPress={() => viewDeck(deck)}
              />
            )
          })
        }
        <BlueButton
          text='ADD DECK'
          onPress={viewAddDeck}
        />
      </ContainerView>
    )
  }
}

export default connect(
  (state, { navigation }) => ({
    decks: state.deck.decks,
    viewAddDeck: () => navigation.navigate('AddDeck'),
    viewDeck: (deck) => {
      navigation.navigate('DeckView', { deckId: deck.id, title: deck.title })
    }
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(DeckList)
