import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'FLASHCARDS'

export const addDeck = deck => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  )
}

export const addCard = (deckId, card) => {
  let deck = getDeck(deckId)
  if(!deck) {
    return
  }
  
  if(!deck.cards) {
    deck.cards = []
  }

  deck.cards.push(card)

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({
    ...data,
    [deck.id]: deck
  }))
}

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(data => JSON.parse(data))
}

export const getDeck = deckId => {
  return getDecks()
    .then(decks => decks.filter(deck => deck.id === deckId))
}
