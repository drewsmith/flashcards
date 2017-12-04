import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { deckStyles, ContainerView } from './common'
import { lightGray, white, red900, lightGreen700, lightBlue800 } from '../utils/colors'
import CardView from './CardView'

import { connect } from 'react-redux'

const styles = StyleSheet.create({
  counts: {
    fontSize: 16,
    color: lightGray
  },
  countContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3
  },
  correctButton: {
    marginBottom: 10,
    backgroundColor: lightGreen700
  },
  incorrectButton: {
    backgroundColor: red900
  },
  retryButton: {
    backgroundColor: lightBlue800,
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    fontSize: 14,
    color: white
  }
})

const Button = ({buttonStyle, text, onPress}) => (
  <TouchableOpacity style={[
    buttonStyle,
    styles.button,
    deckStyles.shadow
  ]} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
)

const initialState = {
  currentCardIndex: 0,
  numberCorrect: 0,
  complete: false
}

class QuizView extends Component {
  state = initialState

  reset = () => this.setState(initialState)

  isComplete = () => {
    let nextIndex = this.state.currentCardIndex + 1
    return nextIndex >= this.props.cardTotal
  }

  handleCorrect = () => this.handleAnswer(this.state.numberCorrect + 1)

  handleIncorrect = () => this.handleAnswer(this.state.numberCorrect)

  handleAnswer = numberCorrect => {
    let complete = this.isComplete()
    this.setState((state) => ({
      numberCorrect,
      complete,
      currentCardIndex: complete ? state.currentCardIndex : state.currentCardIndex + 1
    }))
  }
  
  render() {
    let { currentCardIndex, complete, numberCorrect } = this.state
    let { cards, cardTotal } = this.props

    let cardNumber = cardTotal > 0 ? currentCardIndex + 1 : 0

    return (
      <ContainerView>
        <View style={styles.countContainer}>
          <Text style={styles.counts}>{`${cardNumber} of ${cardTotal}`}</Text>
        </View>

        {cards && cardTotal > 0 && <CardView card={cards[currentCardIndex]} />}

        {complete === false ? (
          <View>
            <Button text='CORRECT' buttonStyle={styles.correctButton} onPress={this.handleCorrect} />
            <Button text='INCORRECT' buttonStyle={styles.incorrectButton} onPress={this.handleIncorrect} />
          </View>
        ) : (
          <View style={styles.scoreContainer}>
            <Text style={styles.counts}>Total Correct: {numberCorrect}</Text>
            <Button text='RETRY' buttonStyle={styles.retryButton} onPress={this.reset} />
          </View>
        )}
      </ContainerView>
    )
  }
}

export default connect(
  (state, { navigation }) => {
    let { deck } = navigation.state.params
    let { cards } = deck
    return {
      cards: cards,
      cardTotal: cards.length
    }
  }
)(QuizView)
