import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightBlue800, white } from '../utils/colors'

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: white
  }
})

const TextButton = ({children, onPress, style = ''}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.reset, style]}>{children}</Text>
  </TouchableOpacity>
)

export default TextButton
