import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { AntDesign } from '@expo/vector-icons';
import { SIZES, COLORS } from '../../constants/theme';
import { ReusableText} from "../../components"

const AppBar = ({title, color, color1, icon }) => {
    return (
        <View style={styles.overlay}>
            <View style={reusable.rowWithSpace('space-between')}>
                <TouchableOpacity style={styles.box(color)}>
                    <AntDesign name='left' size={SIZES.large} />
                </TouchableOpacity>
                <ReusableText
                    text={title}
                    family={'medium'}
                    size={SIZES.large}
                    color={COLORS.black}
                    align={'center'}
                />
                <TouchableOpacity style={styles.box1(color1)}>
                    <AntDesign name={icon} size={SIZES.large} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
    },
    box: (color) => ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    }),
    box1: (color1) => ({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    })
})