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
    default:
      return state
  }
}

export default deck
