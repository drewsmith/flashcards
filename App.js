import React from 'react'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'

import { View, StatusBar, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { lightBlue800, white } from './utils/colors'

const CardStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        <SimpleLineIcons name='plus' size={30} color={tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? lightBlue800 : white,
    style: {
      height: 60,
      backgroundColor: Platform.OS === 'ios' ? white : lightBlue800,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CardStatusBar backgroundColor={lightBlue800} barStyle='light-content' />
        <Tabs />
      </View>
    );
  }
}
