import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
  const coordinates = {
    latitude: 11.6130738,
    longitude: 108.9206342,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: "My location"
  }
  return (
    <MapView style={styles.mapStyle} initialRegion={coordinates}>
      <Marker coordinate={coordinates} title={coordinates.title}/>
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject
  }
})