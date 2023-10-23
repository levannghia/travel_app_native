import React from "react";
import { View, FlatList } from "react-native";
import ReusableTile from "../reusable/ReusableTile";
import { useNavigation } from "@react-navigation/native";

const PopularList = ({ data }) => {
    const navigation = useNavigation();
    return (
        <View>
        {
            data.map((item) => (
                <View style={{ marginBottom: 10 }} key={item._id}>
                    <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)} />
                </View>
            ))
        }
        </View>
    )
}

export default PopularList