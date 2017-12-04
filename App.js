import React, { Component } from 'react'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import QuizView from './components/QuizView'

import { View, StatusBar, Platform } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Constants } from 'expo'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { lightBlue800, lightBlue200, white } from './utils/colors'

import { setNotification } from './utils/notifications'

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
    style={{ marginLeft: 10 }}
    onPress={() => navigation.navigate('DrawerOpen')}
  />
)

const DeckListStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: 'Decks',
      headerLeft: <Hamburger navigation={navigation} />
    })
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => {
      const { title } = navigation.state.params
      return {
        title
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Card'
    })
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => {
      const { title } = navigation.state.params
      return {
        title
      }
    }
  }
}, defaultNavigationOptions);

const AddDeckStack = StackNavigator({
  AddDeck: {
    screen: AddDeck,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Deck',
      headerLeft: <Hamburger navigation={navigation} />
    })
  }
}, defaultNavigationOptions);

const Root = DrawerNavigator({
  DeckList: {
    screen: DeckListStack,
    navigationOptions: {
      drawerLabel: 'Decks',
      drawerIcon: ({ tintColor }) => (
        <MaterialCommunityIcons
          name='cards'
          size={24}
          color={lightBlue200}
        />
      )
    }
  },
  AddDeck: {
    screen: AddDeckStack,
    navigationOptions: {
      drawerLabel: 'Add Deck',
      drawerIcon: ({ tintColor }) => (
        <SimpleLineIcons
          name='plus'
          size={24}
          color={lightBlue200}
        />
      )
    }
  }
},{
  contentOptions: {
    activeTintColor: white,
    activeBackgroundColor: lightBlue800
  }
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default class App extends Component {
  componentDidMount() {
    setNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <CardStatusBar backgroundColor={lightBlue800} barStyle='light-content' />
          <Root />
        </View>
      </Provider>
    );
  }
}
