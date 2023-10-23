import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import reusable from '../../components/reusable/reusable.style'
import AppBar from '../../components/reusable/AppBar'
import { COLORS } from '../../constants/theme'
import { ReusableTile } from '../../components'
import { useNavigation } from '@react-navigation/native'

const HotelsList = () => {
    const navigation = useNavigation()
    const hotels = [
        {
            "_id": "64c631650298a05640539adc",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Walt Disney World",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "San Francisco, CA"
        },
        {
            "_id": "64d062a3de20d7c932f1f70a",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Statue of Liberty",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
            "rating": 4.8,
            "location": "San Francisco, CA"
        },
        {
            "_id": "64d09e3f364e1c37c8b4b13c",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Golden Gate Bridge",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
            "rating": 4.6,
            "review": "2145 Reviews",
            "location": "San Francisco, CA"

        },
        {
            "_id": "64d09f9036781c37c8b4b140",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Yellowstone National Park",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "rating": 4.8,
            "review": "24455 Reviews",
            "location": "San Francisco, CA"
        },
        {
            "_id": "64d30f789d009909fa8b7ce5",
            "country_id": "64d2fd32618522e2fb342eec",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "title": "Yellowstone National Park",
            "rating": 4.8,
            "review": "24455 Reviews",
            "location": "Ho Chi Minh, VN"
        },
        {
            "_id": "64c631650298a35640539adc",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Walt Disney World",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "San Francisco, CA"
        },
        {
            "_id": "64d062a3de20eec932f1f70a",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Statue of Liberty",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
            "rating": 4.8,
            "location": "San Francisco, CA"
        },
        {
            "_id": "64d09e3f3ư4e1c37c8b4b13c",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Golden Gate Bridge",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
            "rating": 4.6,
            "review": "2145 Reviews",
            "location": "San Francisco, CA"

        },
        {
            "_id": "64d09f90e64e1c37c8b4b140",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Yellowstone National Park",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "rating": 4.8,
            "review": "24455 Reviews",
            "location": "San Francisco, CA"
        },
        {
            "_id": "64d30f789r008909fa8b7ce5",
            "country_id": "64d2fd32618522e2fb342eec",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "title": "Yellowstone National Park",
            "rating": 4.8,
            "review": "24455 Reviews",
            "location": "Ho Chi Minh, VN"
        }
    ];
    return (
        <SafeAreaView style={reusable.container}>
            <View style={{ height: 30 }}>
                <AppBar
                    title="Nearby Hotels"
                    icon={'search1'}
                    color={COLORS.white}
                    color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => navigation.navigate('HotelSearch')}
                />
            </View>
            <View style={{ paddingTop: 20 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    data={hotels}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 10 }}>
                            <ReusableTile item={item} onPress={() => navigation.navigate('HotelDetails', item._id)} />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default HotelsList

const styles = StyleSheet.create({})