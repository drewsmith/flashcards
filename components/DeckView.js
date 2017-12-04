import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { ContainerView, deckStyles } from './common'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, lightBlue800, lightGray } from '../utils/colors'

import { connect } from 'react-redux'

const DeckView = ({deckId, deck = {}, viewAddCard}) => (
  <ContainerView>
    <View style={{flexDirection: 'row'}}>
      <Text style={[deckStyles.deckTitle, {
        flex: 1,
        justifyContent: 'flex-start'
      }]}>{deck.title}</Text>
      <TouchableOpacity
        onPress={viewAddCard}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <MaterialCommunityIcons
          name="plus"
          size={18}
          color={lightBlue800}
        />
        <Text style={{
          color: lightBlue800,
          justifyContent: 'center',
          alignItems: 'center'
        }}>Card</Text>
      </TouchableOpacity>
    </View>
    <View style={{ marginTop: 10 }}>
      {deck.cards && deck.cards.length >  0
        ? (
          deck.cards.map(card => (
            <View style={deckStyles.card}>
              <Text style={deckStyles.cardTitle}>{card.question}</Text>
            </View>
          ))
        ) : (
          <View style={deckStyles.card}>
            <Text style={[
              deckStyles.cardTitle,
              { color: lightGray }
            ]}>NO CARDS</Text>
          </View>
        )
      }
    </View>
  </ContainerView>
)

export default connect(
  (state, { navigation }) => {
    let { deckId } = navigation.state.params
    return {
      deckId,
      deck: state.deck.decks[deckId],
      viewAddCard: () => navigation.navigate('AddCard', { deckId })
    }
  }
)(DeckView)
