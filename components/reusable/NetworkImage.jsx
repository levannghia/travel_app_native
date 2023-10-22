import { StyleSheet, Image } from 'react-native'
import React from 'react'

const NetworkImage = ({source, width, height, radius, resize}) => {
  return (
    <Image
        source={{uri: source}}
        style={styles.image(width, height, radius, resize)}
    />
  )
}

export default NetworkImage

const styles = StyleSheet.create({
    image: (width, height, radius, resize) => ({
        width: width,
        height: height,
        borderRadius: radius,
        resizeMode: resize
    })
})