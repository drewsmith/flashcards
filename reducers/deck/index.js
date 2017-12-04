import * as actions from '../../actions/types'

const deck = (
  state = {
    decks: []
  },
  action
) => {
  switch (action.type) {
    case actions.RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    default:
      return state
  }
}

export default deck
