import * as actions from './types'
import * as api from '../utils/api'

export const fetchDecks = () => {
  return dispatch => {
    return api.getDecks()
        .then(decks => dispatch(receiveDecks(decks)))
  }
}

export const fetchDeck = id => {
  return dispatch => {
    return api.getDeck(id)
  }
}

export const receiveDecks = (decks) => ({
  type: actions.RECEIVE_DECKS,
  decks
})

export const addDeck = deck => {
  return dispatch => {
    return api.addDeck(deck)
      .then(() => dispatch(fetchDecks()))
  }
}
