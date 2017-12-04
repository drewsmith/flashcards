import React, { Component } from 'react'
import { TouchableOpacity, Animated, Text, StyleSheet } from 'react-native'
import { deckStyles } from './common'
import { lightGray, lightGreen200, lightGreen700, gray, white } from '../utils/colors'

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
    marginBottom: 5
  }
})

const FRONT = 'FRONT'
const BACK = 'BACK'
const isFront = side => side === FRONT

class CardView extends Component {
  state = {
    activeSide: FRONT,
    bounceValue: new Animated.Value(1),
  }

  componentWillReceiveProps = (nextProps) => this.setState({ activeSide: FRONT })

  toggleSide = () => {
    let { bounceValue } = this.state

    this.setState((state) => ({
      activeSide: isFront(state.activeSide) ? BACK : FRONT
    }))

    Animated.sequence([
      Animated.timing(bounceValue, {duration: 200, toValue: 1.75}),
      Animated.spring(bounceValue, {toValue: 1, friction: 4})
    ]).start()
  }

  render() {
    let { activeSide, bounceValue } = this.state
    let { card } = this.props
    let front = isFront(activeSide)
    return (
      <TouchableOpacity
        key={card.id}
        onPress={this.toggleSide}
        style={[
          deckStyles.card,
          { backgroundColor: front ? white : lightGreen200 }
        ]}>
        <Text style={[
          styles.header,
          { color: front ? lightGray : lightGreen700 }
        ]}>
          {front ? 'QUESTION' : 'ANSWER'}
        </Text>
        <Animated.Text style={[
          deckStyles.cardTitle,
          {
            transform: [{
              scale: bounceValue
            }]
          }
        ]}>
          {front ? card.question : card.answer}
        </Animated.Text>
      </TouchableOpacity>
    )
  }
}

export default CardView
