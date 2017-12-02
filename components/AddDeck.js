import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { lightBlue800, gray, lighterGray, white, blueGray900 } from '../utils/colors'
import TextButton from './TextButton'

import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

import uuid from 'uuid'

import { deckStyles } from './common'

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: gray,
    marginBottom: 5
  },
  title: {
    borderWidth: 1,
    borderColor: lighterGray,
    height: 40,
    paddingLeft: 5,
    color: blueGray900,
    backgroundColor: white,
    marginBottom: 10
  },
  container: {
    padding: 20
  }
})

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
    })
    navigation.navigate('DeckList')
  }
  render() {
    let { title } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.label}>TITLE</Text>
        <TextInput
          style={styles.title}
          onChangeText={(title) => this.setState({title})}
          value={title}
        />
        <TextButton style={deckStyles.blueButton} onPress={this.handleAdd}>
          <Text>CREATE DECK</Text>
        </TextButton>
      </View>
    )
  }
}

export default connect(
  () => ({}),
  (dispatch) => bindActionCreators(actions, dispatch)
)(AddDeck)
