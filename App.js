import React from 'react'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'

import { View, StatusBar, Platform } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Constants } from 'expo'

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { lightBlue800, white } from './utils/colors'

const CardStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

const defaultNavigationOptions = {
  navigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: lightBlue800
    }
  }
}

const Hamburger = ({navigation}) => (
  <MaterialCommunityIcons
    name="menu"
    size={20}
    color={white}
    style={{ marginRight: 10 }}
    onPress={() => navigation.navigate('DrawerOpen')}
  />
)

const DeckListStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerRight: <Hamburger navigation={navigation} />
    })
  }
}, defaultNavigationOptions);

const AddDeckStack = StackNavigator({
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Deck',
      headerRight: <Hamburger navigation={navigation} />
    })
  }
}, defaultNavigationOptions);

const Root = DrawerNavigator({
  DeckList: {
    screen: DeckListStack,
    navigationOptions: {
      title: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeckStack,
    navigationOptions: {
      title: 'Add Deck'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CardStatusBar backgroundColor={lightBlue800} barStyle='light-content' />
        <Root />
      </View>
    );
  }
}
