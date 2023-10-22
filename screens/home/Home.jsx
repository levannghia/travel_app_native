import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import reusable from '../../components/reusable/reusable.style'
import React from 'react'
import { HeightSpacer, ReusableText, RecommenDations } from '../../components'
import Place from '../../components/home/Place'
import { SIZES, COLORS } from '../../constants/theme'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import BestHotels from '../../components/home/BestHotels'
import styles from './home.style'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
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
        <HeightSpacer height={15}/>
        <RecommenDations/>
        <HeightSpacer height={30}/>
        <BestHotels/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home