import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
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
