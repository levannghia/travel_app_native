import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import {ReusableText, ReusableButton, HeightSpacer} from '../../components'
import { useNavigation } from "@react-navigation/native"

const Slides = ({item}) => {
  const navigation = useNavigation()
  return (
    <View>
      <Image source={item.image} style={styles.image}/>
      <View style={styles.stack}>
        <ReusableText 
            text={item.title}
            family={'medium'}
            size={SIZES.xxLarge}
            color={COLORS.white}
        />
        <HeightSpacer height={40}/>
        <ReusableButton onPress={() => {}}
         btnText={"Let's go"}
         width={(SIZES.width - 50)/2.2}
         backgroundColor={COLORS.red}
         borderColor={COLORS.red}
         borderWidth={0}
         textColor={COLORS.white}
         />
      </View>
    </View>
  )
}

export default Slides

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        width: SIZES.width,
        height: SIZES.height,
    },
    stack: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 60,
        marginHorizontal: 20
    }
})