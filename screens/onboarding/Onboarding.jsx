import { StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native'
import Slides from "../../components/onboarding/Slides"
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
    <SafeAreaView>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent"/>
      <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slides item={item} />}
    />
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})