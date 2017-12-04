import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { lightBlue800, gray, lighterGray, white, blueGray900 } from '../utils/colors'

import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

import uuid from 'uuid'

import {
  deckStyles,
  BlueButton,
  Label,
  Input,
  ContainerView,
  ErrorView
} from './common'

class AddDeck extends Component {
  state = {
    title: '',
    error: false
  }
  valid = () => {
    let { title } = this.state
    return title && title.length > 0
  }
  handleAdd = () => {
    let { addDeck, viewDeckList } = this.props
    if(!this.valid()) {
      this.setState({error: true})
      return
    }
    addDeck({
      id: uuid.v1(),
      title: this.state.title,
      cards: []
    })
    .then(() => this.setState({error: false}))
    .then(viewDeckList)
  }
  render() {
    let { title, error } = this.state
    return (
      <ContainerView>
        {error && <ErrorView />}
        <Label>TITLE</Label>
        <Input
          value={title}
          onChange={(value) => this.setState({title: value})}
        />
        <BlueButton
          onPress={this.handleAdd}
          text='CREATE DECK'
        />
      </ContainerView>
    )
  }
}

export default connect(
  (state, {navigation}) => ({
    viewDeckList: () => navigation.navigate('DeckList')
  }),
  (dispatch) => bindActionCreators(actions, dispatch)
)(AddDeck)
