import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { deckStyles } from './styles'

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
      <View style={deckStyles.container}>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}
