import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { DescriptionText, NetworkImage, ReusableText, ReusableButton, PopularList, HeightSpacer } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import reusable from '../../components/reusable/reusable.style'
import { Feather } from '@expo/vector-icons';
import AppBar from '../../components/reusable/AppBar'

const statusBarHeight = StatusBar.currentHeight || 0;

const CountryDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params
    const country = {
        "_id": "64c62bfc65af9f8c969a8d04",
        "country": "USA",
        "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
        "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/1bcdbbd0-d702-475d-92ea-d9171c041674-vinci_01_places_new_york.jpg",
        "popular": [
            {
                "_id": "64c631650298a05640539adc",
                "title": "Walt Disney World",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
                "rating": 4.7,
                "review": "1204 Reviews",
                "location": "Orlando, USA"
            },
            {
                "_id": "64d062a3de20d7c932f1f70a",
                "title": "Statue of Liberty",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
                "rating": 4.8,
                "review": "1452 Reviews",
                "location": "Liberty Island, New York Harbor"
            },
            {
                "_id": "64d062a3de20d7c9i2f1f70a",
                "title": "Statue of Liberty",
                "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
                "rating": 4.8,
                "review": "1452 Reviews",
                "location": "Liberty Island, New York Harbor"
            }
        ],
        "region": "North America, USA"
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled>
                <View>
                    <NetworkImage source={country.imageUrl} width={"100%"} height={350} radius={25} />
                </View>
                <View style={{
                    marginHorizontal: 10,
                    position: "absolute",
                    top: Platform.OS === 'android' ? statusBarHeight : 0,
                    left: 0,
                    right: 0,
                    justifyContent: "center",
                }}>
                    <AppBar
                        title={country.country}
                        icon={'search1'}
                        color={COLORS.white}
                        color1={COLORS.white}
                        onPress={navigation.goBack}
                        onPress1={() => navigation.navigate('HotelSearch')}
                    />
                </View>
                <View style={styles.description}>
                    <ReusableText
                        text={country.region}
                        family={'medium'}
                        size={SIZES.xLarge}
                        color={COLORS.black}
                    />
                    <DescriptionText text={country.description} />
                    <View style={{ alignContent: "center" }}>
                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                text={"Popular Destinations"}
                                family={'medium'}
                                size={SIZES.large}
                                color={COLORS.black}
                            />
                            <TouchableOpacity>
                                <Feather name='list' size={20} />
                            </TouchableOpacity>
                        </View>
                        <HeightSpacer height={20} />
                        <PopularList data={country.popular} />
                        <ReusableButton onPress={() => navigation.navigate('HotelSearch', id)}
                            btnText={"Find best hotel"}
                            width={SIZES.width - 20}
                            backgroundColor={COLORS.green}
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

export default CountryDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F4F8"
    },
    description: {
        marginHorizontal: 10,
        paddingTop: 20
    }
})