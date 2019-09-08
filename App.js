import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'


const navigator = createStackNavigator ({
  Search: SearchScreen
},

{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search'
  }
})

export default createAppContainer(navigator)
