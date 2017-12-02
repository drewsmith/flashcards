import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { lightBlue800, gray, lighterGray, white, blueGray900 } from '../utils/colors'
import TextButton from './TextButton'

import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

import uuid from 'uuid'

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: lightBlue800,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, .24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
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
    navigation.goBack()
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
        <TextButton style={styles.addButton} onPress={this.handleAdd}>
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
