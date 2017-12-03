import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ContainerView, Label, Input, BlueButton } from './common'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleAdd = () => {
    let { navigation } = this.props
    navigation.goBack()
  }
  render() {
    let { title } = this.state
    return (
      <ContainerView>
        <Label>QUESTION</Label>
        <Input
          value={title}
          onChange={(value) => this.setState({question: value})}
        />
        <Label>ANSWER</Label>
        <Input
          value={title}
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

export default AddCard
