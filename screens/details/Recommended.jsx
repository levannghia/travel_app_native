import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import reusable from '../../components/reusable/reusable.style'
import AppBar from '../../components/reusable/AppBar'
import { COLORS } from '../../constants/theme'

const Recommended = () => {
  return (
    <SafeAreaView style={reusable.container}>
      <View style={{height: 30}}>
        <AppBar title="Recommendation" icon={'search1'} color={COLORS.white} color1={COLORS.white}/>
      </View>
      <View style={{paddingTop: 20}}>
        <Text>safdsfsf</Text>
      </View>
    </SafeAreaView>
  )
}

export default Recommended

const styles = StyleSheet.create({})