import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { deckStyles, ContainerView, BlueButton } from './common'
import { blueGray900, lightBlue200 } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

import { connect } from 'react-redux'

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
  viewDeck = deck => {
    let { navigation } = this.props
    this.props.navigation.navigate(
      'DeckView',
      { deck: deck }
    )
  }
  viewAddDeck = () => {
    let { navigation } = this.props
    navigation.navigate('AddDeck')
  }
  render() {
    let { decks, navigation } = this.props
    return (
      <ContainerView>
        {!decks || decks.length === 0
          ? <NoDecks />
          : decks.map((deck, index) => (
            <DeckCard
              key={deck.id}
              deck={deck}
              onPress={() => this.viewDeck(deck)}
            />
          ))
        }
        <BlueButton
          text='ADD DECK'
          onPress={this.viewAddDeck}
        />
      </ContainerView>
    )
  }
}

export default connect(
  (state) => ({
    decks: state.deck.decks
  })
)(DeckList)
