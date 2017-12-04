import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native'

import { ContainerView, deckStyles } from './common'
import { SimpleLineIcons } from '@expo/vector-icons'
import { white, lightBlue800, lightBlue200, lightGray } from '../utils/colors'

import CardView from './CardView'

import { connect } from 'react-redux'

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3
  },
  buttonText: {
    color: white,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14
  },
  left: {
    backgroundColor: lightBlue800,
    marginRight: 5
  },
  right: {
    backgroundColor: lightBlue800,
    marginLeft: 5
  },
  icon: {
    marginRight: 5
  }
})

const DeckView = ({deckId, deck = {}, viewAddCard}) => (
  <ContainerView>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={viewAddCard}
        style={[
          styles.button,
          styles.left,
          deckStyles.shadow
        ]}>
        <SimpleLineIcons
          name="plus"
          size={14}
          color={lightBlue200}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>ADD CARD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={[
          styles.button,
          styles.right,
          deckStyles.shadow
        ]}>
        <SimpleLineIcons
          name="question"
          size={14}
          color={lightBlue200}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>QUIZ</Text>
      </TouchableOpacity>
    </View>
    <View style={{ marginTop: 10 }}>
      {deck.cards && deck.cards.length >  0
        ? (
          deck.cards.map(card => (
            <CardView card={card} />
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
