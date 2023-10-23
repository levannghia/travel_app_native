import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import reusable from '../../components/reusable/reusable.style'
import { COLORS, SIZES } from '../../constants/theme'
import { Feather } from '@expo/vector-icons';
import { ReusableTile } from '../../components';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation()
  const [searchKey, setSearchKey] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const search =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Miami Beach, FL"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Mountain Lodge",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
        "rating": 4.5,
        "review": "12024 Reviews",
        "location": "Aspen, CO"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Alpha",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "City Center, USA"
    },
    {
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Family-Friendly Resort",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "Orlando, FL"
    },
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel 1",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
]
  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            onChange={() => setSearchKey()}
            placeholder='Where do you want to visit'
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.searchbtn}>
          <Feather name='search' size={24} color={COLORS.white}/>
        </TouchableOpacity>
      </View>
      {search.length === 0 ? (
        <Image source={require("../../assets/images/icons/google_96px.png")} style={styles.searchImage}/>
      ) : (
        <FlatList
          data={search}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <View style={styles.tile}>
              <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)}/>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SIZES.small,
    borderColor: COLORS.blue,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50
  },
  input: {
    fontFamily: 'regular',
    width: "100%",
    height: "100%",
    paddingHorizontal: 50
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.medium,
    borderRadius: SIZES.medium
  },
  searchbtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue
  },

  searchImage: {
    resizeMode: 'contain',
    width: "100%",
    height: SIZES.height,
    paddingHorizontal: 20
  },
  tile: {
    marginHorizontal: 12,
    marginBottom: 10
  }
})