import * as actions from './types'

export const addDeck = deck => ({
  type: actions.ADD_DECK,
  deck,
})

export const addCard = (card, deckId) => ({
  type: actions.ADD_CARD,
  deckId,
  card
})
