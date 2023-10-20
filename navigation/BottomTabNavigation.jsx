import { Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home, Location, Profile, Chat } from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
}
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        activeColor='#EB6A58'
        inactiveColor='#3E2465'
        tabBarHideKeyBoard={true}
        screenOptions={{
            headerShown: false,

        }}
        barStyle={{paddingBottom: 48}}
    >
      <Tab.Screen name='Home' component={Home} options={{
        tabBarStyle: tabBarStyle,
        tabBarLabel: false,
        tabBarIcon: ({focused}) => {
            
        }
      }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation
