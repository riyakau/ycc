import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookdonateScreen from '../screens/BookdonateScreen'
import BookrequestScreen from '../screens/BookrequestScreen'
export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookdonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-list.png')} style={{width:20,height:20}}/>
        }
    },
    BookRequest:{
        screen:BookrequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-book.png')} style={{width:20,height:20}}/>
        }
    }
})