// import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, {useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Onboarding, Search, CountryDetails, Recommended, PlaceDetails, HotelDetails } from './screens';

// SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    medium: require("./assets/fonts/medium.otf"),
    bold: require("./assets/fonts/bold.otf"),
    light: require("./assets/fonts/light.otf"),
    xtrabold: require("./assets/fonts/xtrabold.otf"),
  })

  const layoutRootView = useCallback(async () => {
    if(fontLoaded){
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded])

  if(!fontLoaded){
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
        <Stack.Screen name="Bottom" component={BottomTabNavigation} options={{headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerShown: false}}/>
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={{headerShown: false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={{headerShown: false}}/>
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{headerShown: false}}/>
        <Stack.Screen name='HotelDetails' component={HotelDetails} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}