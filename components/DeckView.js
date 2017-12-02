import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ContainerView, deckStyles } from './common'

export default class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params
    return {
      title: deck.title
    }
  }
  render() {
    let { deck } = this.props.navigation.state.params
    return (
      <ContainerView>
        <Text style={deckStyles.deckTitle}>{deck.title}</Text>
      </ContainerView>
    )
  }
}
