import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { lightBlue800, gray, lighterGray, white, blueGray900 } from '../utils/colors'

import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

import uuid from 'uuid'

import { deckStyles, BlueButton, Label, Input, ContainerView } from './common'

class AddDeck extends Component {
  state = {
    title: ''
  }
  handleAdd = () => {
    let { addDeck, navigation } = this.props
    addDeck({
      id: uuid.v1(),
      title: this.state.title,
      cards: []
    }).then(() => {
      navigation.navigate('DeckList')
    })
  }
  render() {
    let { title } = this.state
    return (
      <ContainerView>
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
  () => ({}),
  (dispatch) => bindActionCreators(actions, dispatch)
)(AddDeck)
