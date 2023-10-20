import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import { Slides } from '../../components'
import React from 'react'

const Onboarding = () => {
  const slides = [
    {
        id: 1,
        image: require("../../assets/images/1.png"),
        title: 'Find the prefect place to stay'
    },
    {
        id: 2,
        image: require("../../assets/images/2.png"),
        title: 'Sis saaaaaa saaaaaaa sa'
    },
    {
        id: 3,
        image: require("../../assets/images/3.png"),
        title: 'Sis saaaaaa saaaaaaa sasa'
    }
  ]
  return (
    <FlatList 
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Slides item={item}/>}
    />
  )
}

export default Onboarding

const styles = StyleSheet.create({})