import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import AppBar from '../../components/reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import reusable from '../../components/reusable/reusable.style'
import { DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableButton, ReusableText } from '../../components'
import { Rating } from 'react-native-stock-star-rating'
import { Feather } from '@expo/vector-icons';

const HotelDetails = () => {
  const navigation = useNavigation()
  const hotel = {
    "availability": {
      "start": "2023-08-20T00:00:00.000Z",
      "end": "2023-08-25T00:00:00.000Z"
    },
    "_id": "64c675793cfa5e847bcd5436",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Urban Chic Boutique Hotel",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
    "rating": 4.8,
    "review": "2312 Reviews",
    "location": "San Francisco, CA",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "price": 400,
    "facilities": [
      {
        "wifi": true,
        "_id": "64c675793cfa5e847bcd5437"
      }
    ],
  }

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.latitude,
    longitude: hotel.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }
  return (
    <SafeAreaView style={reusable.container}>
      <ScrollView>
        <View style={{ height: 30 }}>
          <AppBar
            title={hotel.title}
            icon={'search1'}
            color={COLORS.white}
            color1={COLORS.white}
            onPress={navigation.goBack}
            onPress1={() => navigation.navigate('HotelSearch')}
          />
        </View>
        <View style={{ paddingTop: 20 }}>
          <NetworkImage width={"100%"} height={220} radius={25} source={hotel.imageUrl} />
          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={'medium'}
                size={SIZES.xLarge}
                color={COLORS.black}
              />
              <HeightSpacer height={10} />
              <ReusableText
                text={hotel.location}
                family={'medium'}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <HeightSpacer height={15} />
              <View style={reusable.rowWithSpace('space-between')}>
                <Rating maxStars={5} stars={hotel.rating} bordered={false} color={'#FD9942'} />
                <ReusableText
                  text={`(${hotel.review})`}
                  family={'medium'}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 90 }}>
            <ReusableText
              text={"Description"}
              family={'medium'}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <HeightSpacer height={10} />
            <DescriptionText text={hotel.description} />
            <HeightSpacer height={10} />
            <ReusableText
              text={"Location"}
              family={'medium'}
              size={SIZES.medium}
              color={COLORS.black}
            />
            <HeightSpacer height={15} />
            <ReusableText
              text={hotel.location}
              family={'regular'}
              size={SIZES.small + 2}
              color={COLORS.gray}
            />
            <HotelMap coordinates={coordinates} />
            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText
                text={"Reviews"}
                family={'medium'}
                size={SIZES.large}
                color={COLORS.black}
              />
              <TouchableOpacity>
                <Feather name='list' size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[reusable.rowWithSpace('space-between'),  styles.bottom ]}>
            <View>
              <ReusableText
                text={`\$ ${hotel.price}`}
                family={'medium'}
                size={SIZES.large}
                color={COLORS.black}
              />
              <HeightSpacer height={5} />
              <ReusableText
                text={"Jan 01 - Dec 25"}
                family={'medium'}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
            <ReusableButton 
              onPress={() => navigation.navigate("SelectRoom")}
              backgroundColor={COLORS.green}
              btnText={"Select Room"}
              width={(SIZES.width - 50)/2.2}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HotelDetails

const styles = StyleSheet.create({
  titleContainer: {
    margin: 15,
    backgroundColor: COLORS.lightWhite,
    height: 120,
    position: 'absolute',
    top: 170,
    left: 0,
    right: 0,
    borderRadius: 20
  },
  titleColumn: {
    padding: 15
  },
  bottom: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.lightWhite,
    paddingVertical: 20,
    height: 90
  }
})