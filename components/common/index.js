import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { lighterGray, white, gray, lightGray, lightBlue800 } from '../../utils/colors'

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
    borderRadius: 7
  }
})

export const ContainerView = ({children}) => (
  <ScrollView contentContainerStyle={deckStyles.container}>
    {children}
  </ScrollView>
)
