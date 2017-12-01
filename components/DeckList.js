import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { gray, lightGray, lighterGray, white, lightBlue200, blueGray900, lightBlue800 } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton'

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

const NoDecks = () => (
  <View>
    <View style={styles.card}>
      <FontAwesome name='warning' size={24} color={lightBlue200} />
      <Text style={styles.notFound}>0 decks found</Text>
    </View>
    <TextButton style={styles.addCard}>
      <Text>ADD DECK</Text>
    </TextButton>
  </View>
)

const DeckCard = ({deck = {}}) => (
  <View style={styles.card}>
    <Text style={{ fontSize: 24, color: gray }}>{deck.name}</Text>
    <Text style={{ fontSize: 16, color: lightGray }}>{deck.total} cards</Text>
  </View>
)

const Wrapper = ({children}) => <View style={styles.container}>{children}</View>

const DeckList = ({decks = []}) => (
  <Wrapper>
    {!decks || decks.length === 0
      ? <NoDecks />
      : decks.map((deck, index) => <DeckCard key={index} deck={deck} />)
    }
  </Wrapper>
)

export default DeckList
