import React from 'react';
import {Image} from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/homescreen'
import ExchangeScreen from './screens/exchangescreen'
import SignUpLoginScreen from './screens/signuploginscreen'

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen,
  navigationOptions:{
    tabBarIcon:<Image source = {require("./assets/home-icon.png")} style={{width:20 ,height:20}}/>,
    tabBarLabel:"Home"
  }
  },
  ExchangeScreen:{screen:ExchangeScreen,
    navigationOptions:{
      tabBarIcon:<Image source = {require("./assets/ads-icon.png")} style={{width:20 ,height:20}}/>,
      tabBarLabel:"Exchange"
    }
  }
},
)

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:SignUpLoginScreen},
  BottomTab:{screen:TabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator);

