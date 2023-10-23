import React from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'

const statusBarHeight = StatusBar.currentHeight || 0;

const reusable = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        ...Platform.select({
            android: {
              marginTop: statusBarHeight,
            },
            ios: {
            //   backgroundColor: 'red',
            },
            default: {
              // other platforms, web for example
            // backgroundColor: 'blue',
            },
          }),
    },
    rowWithSpace: (justifyContent) => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: justifyContent
    })
})

export default reusable