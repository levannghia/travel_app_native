import { Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Location, Profile, Chat } from '../screens';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  // padding: 20,
  borderRadius: 20,
  height: 70,
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
      tabBarHideOnKeyboard={true}
      barStyle={{
        paddingBottom: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      headerShown={false}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
          (<Ionicons
            name={focused ? "grid" : "grid-outline"} size={26}
            color={focused ? COLORS.red : COLORS.gray}
          />)

        }} />
      <Tab.Screen name='Location' component={Location} options={{
        tabBarStyle: tabBarStyle,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) =>
        (<Ionicons
          name={focused ? "location" : "location-outline"} size={26}
          color={focused ? COLORS.red : COLORS.gray}
        />)

      }} />
      <Tab.Screen name='Chat' component={Chat} options={{
        tabBarStyle: tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) =>
        (<Ionicons
          name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} size={26}
          color={focused ? COLORS.red : COLORS.gray}
        />)

      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarStyle: tabBarStyle,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) =>
        (<Ionicons
          name={focused ? "person" : "person-outline"} size={26}
          color={focused ? COLORS.red : COLORS.gray}
        />)
      }} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation