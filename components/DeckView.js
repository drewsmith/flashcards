import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ContainerView, deckStyles } from './common'
import TextButton from './TextButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white } from '../utils/colors'

export default class DeckView extends Component {
  render() {
    let { deck } = this.props.navigation.state.params
    return (
      <ContainerView>
        <View style={{flexDirection: 'row'}}>
          <Text style={[deckStyles.deckTitle, {
            flex: 1,
            justifyContent: 'flex-start'
          }]}>{deck.title}</Text>
          <TextButton style={deckStyles.blueButton}>
            <MaterialCommunityIcons name="plus" size={14} color={white} />
            Add Card
          </TextButton>
        </View>
      </ContainerView>
    )
  }
}
