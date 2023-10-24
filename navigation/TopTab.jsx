import React from "react";
import { View, StatusBar, Platform } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS } from "../constants/theme";
import { HeightSpacer, NetworkImage } from "../components";
import AppBar from "../components/reusable/AppBar";
import { useNavigation } from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()
const statusBarHeight = StatusBar.currentHeight || 0;
const TopBar = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    {/* <HeightSpacer height={300}/> */}
                    <NetworkImage width={"100%"} height={300} radius={0} source={"https://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg"} />
                    <View style={{
                        marginHorizontal: 10,
                        position: "absolute",
                        top: Platform.OS === 'android' ? statusBarHeight : 0,
                        left: 0,
                        right: 0,
                        justifyContent: "center",
                    }}>
                        <AppBar
                            title={"Profile"}
                            icon={'logout'}
                            color={COLORS.white}
                            color1={COLORS.white}
                            onPress={navigation.goBack}
                            onPress1={() => { }}
                        />
                    </View>
                </View>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="TopBookings" component={TopBookings} />
                <Tab.Screen name="TopInfo" component={TopInfo} />
                <Tab.Screen name="TopTrips" component={TopTrips} />
            </Tab.Navigator>
        </View>

    )
}

export default TopBar