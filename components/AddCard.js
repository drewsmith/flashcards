import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ContainerView, Label, Input, BlueButton, ErrorView } from './common'

import uuid from 'uuid'

import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    error: false
  }
  valid = () => {
    let { question, answer } = this.state
    return (question && question.length > 0)
      && (answer && answer.length > 0)
  }
  handleAdd = () => {
    let { deck, goBack, addDeck } = this.props
    let { question, answer } = this.state

    if(!this.valid()) {
      this.setState({error: true})
      return
    }

    deck.cards.push({
      id: uuid.v1(),
      question,
      answer
    })
    
    addDeck(deck).then(goBack)
  }
  render() {
    let { question, answer, error } = this.state
    return (
      <ContainerView>
        {error && <ErrorView />}
        <Label>QUESTION</Label>
        <Input
          value={question}
          onChange={(value) => this.setState({question: value})}
        />
        <Label>ANSWER</Label>
        <Input
          value={answer}
          onChange={(value) => this.setState({answer: value})}
        />
        <BlueButton
          onPress={this.handleAdd}
          text='CREATE CARD'
        />
      </ContainerView>
    )
  }
}

export default connect(
  (state, {navigation}) => {
    let { deckId } = navigation.state.params
    return {
      deckId,
      deck: state.deck.decks[deckId],
      goBack: () => navigation.goBack()
    }
  },
  (dispatch) => bindActionCreators(actions, dispatch)
)(AddCard)
