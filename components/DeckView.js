import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { ContainerView, deckStyles } from './common'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, lightBlue800 } from '../utils/colors'

export default class DeckView extends Component {
  goToAddCard = () => {
    let { navigation } = this.props
    let { deck } = navigation.state.params
    navigation.navigate(
      'AddCard',
      { deckId: deck.id }
    )
  }
  render() {
    let { deck } = this.props.navigation.state.params
    return (
      <ContainerView>
        <View style={{flexDirection: 'row'}}>
          <Text style={[deckStyles.deckTitle, {
            flex: 1,
            justifyContent: 'flex-start'
          }]}>{deck.title}</Text>
          <TouchableOpacity
            onPress={this.goToAddCard}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <MaterialCommunityIcons
              name="plus"
              size={18}
              color={lightBlue800}
            />
            <Text style={{
              color: lightBlue800,
              justifyContent: 'center',
              alignItems: 'center'
            }}>Card</Text>
          </TouchableOpacity>
        </View>
      </ContainerView>
    )
  }
}
