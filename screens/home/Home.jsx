import { View, SafeAreaView, StatusBar } from 'react-native'
import reusable from '../../components/reusable/reusable.style'
import React from 'react'
import { HeightSpacer, ReusableText, Place } from '../../components'
import { SIZES, COLORS } from '../../constants/theme'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import styles from './home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText
            text={"Hey User!"}
            family={'regular'}
            size={SIZES.large}
            color={COLORS.black}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.box}>
            <AntDesign name='search1' size={26} />
          </TouchableOpacity>
        </View>
        <HeightSpacer height={SIZES.xLarge} />
        <ReusableText
          text={"Place"}
          family={'medium'}
          size={SIZES.large}
          color={COLORS.black}
        />
        <Place />
        
      </View>
    </SafeAreaView>
  )
}

export default Home