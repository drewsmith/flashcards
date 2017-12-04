import React from 'react'

import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native'

import {
  lighterGray,
  white,
  gray,
  lightGray,
  lightBlue800,
  blueGray900,
  darkRed
} from '../../utils/colors'

const shadow = {
  shadowRadius: 3,
  shadowOpacity: 0.8,
  shadowColor: 'rgba(0, 0, 0, .24)',
  shadowOffset: {
    width: 0,
    height: 3
  }
}

export const deckStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: lighterGray,
    marginBottom: 10
  },
  shadow: shadow,
  card: Object.assign({
    alignItems: 'center',
    backgroundColor: white,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8
  }, shadow),
  deckTitle: {
    fontSize: 24,
    color: gray
  },
  cardCount: {
    fontSize: 16,
    color: lightGray
  },
  blueButton: Object.assign({
    backgroundColor: lightBlue800,
    padding: 10,
    borderRadius: 3
  }, shadow),
  reset: {
    textAlign: 'center',
    color: white
  },
  label: {
    fontSize: 12,
    color: gray,
    marginBottom: 5
  },
  input: Object.assign({
    height: 40,
    paddingLeft: 5,
    color: blueGray900,
    backgroundColor: white,
    marginBottom: 20
  }, shadow),
  error: {
    marginBottom: 20,
    padding: 10,
    color: darkRed,
    borderColor: 'rgba(255, 0, 0, .3)',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 0, 0, .1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorText: {
    color: darkRed,
  },
  cardTitle: {
    color: gray,
    fontSize: 16
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

export const ErrorView = ({text = 'All fields required.'}) => (
  <View style={deckStyles.error}>
    <Text style={deckStyles.errorText}>{text}</Text>
  </View>
)
