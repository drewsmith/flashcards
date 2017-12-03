import * as actions from '../../actions/types'

const deck = (
  state = {
    decks: []
  },
  action
) => {
  switch (action.type) {
    case actions.ADD_DECK:
      return {
        ...state,
        decks: state.decks.concat(action.deck)
      }
    case actions.ADD_CARD:
      return {
        ...state,
        decks: [
          decks.filter(deck => deck.id === action.deckId).cards.concat(action.card),
          ...decks
        ]
      }
    default:
      return state
  }
}

export default deck
