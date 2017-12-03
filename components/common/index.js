import React from 'react'

import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native'

import {
  lighterGray,
  white,
  gray,
  lightGray,
  lightBlue800,
  blueGray900
} from '../../utils/colors'

export const deckStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: lighterGray
  },
  card: {
    alignItems: 'center',
    backgroundColor: white,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, .24)',
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  deckTitle: {
    fontSize: 24,
    color: gray
  },
  cardCount: {
    fontSize: 16,
    color: lightGray
  },
  blueButton: {
    backgroundColor: lightBlue800,
    padding: 10,
    borderRadius: 10
  },
  reset: {
    textAlign: 'center',
    color: white
  },
  label: {
    fontSize: 12,
    color: gray,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: lighterGray,
    height: 40,
    paddingLeft: 5,
    color: blueGray900,
    backgroundColor: white,
    marginBottom: 10
  }
})

export const Label = ({children}) => (
  <Text style={deckStyles.label}>
    {children}
  </Text>
)

export const Input = ({value, onChange}) => (
  <TextInput
    style={deckStyles.input}
    onChangeText={(value) => onChange(value)}
    value={value}
  />
)

export const ContainerView = ({children}) => (
  <ScrollView contentContainerStyle={deckStyles.container}>
    {children}
  </ScrollView>
)

export const TextButton = ({text, onPress, style = ''}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={deckStyles.reset}>{text}</Text>
  </TouchableOpacity>
)

export const BlueButton = (props) => (
  <TextButton {...props} style={deckStyles.blueButton} />
)
