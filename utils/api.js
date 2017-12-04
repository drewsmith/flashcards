import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'FLASHCARDS'

export const addDeck = deck => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  )
}

export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(data => JSON.parse(data))
}

export const getDeck = deckId => {
  return getDecks().then(decks => decks[deckId])
}
