import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const PlaceDetails = ({navigation}) => {
    const route = useRoute()
    const id = route.params;
    console.log(id);
  return (
    <View>
      <Text>PlaceDetails</Text>
    </View>
  )
}

export default PlaceDetails