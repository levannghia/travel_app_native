import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NetworkImage from '../../reusable/NetworkImage'
import { HeightSpacer, ReusableText } from '../../../components'
import { SIZES, COLORS } from '../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const Country = ({ item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('CountryDetails', {item})}>
            <View>
                <NetworkImage
                    source={item.imageUrl}
                    width={85}
                    height={85}
                    radius={12}
                    resize={"cover"}
                />
                <HeightSpacer height={5}/>
                <ReusableText
                    text={item.country}
                    family={'medium'}
                    size={SIZES.medium}
                    color={COLORS.black}
                    align={'center'}
                />
            </View>
        </TouchableOpacity>
    )
}

export default Country

const styles = StyleSheet.create({})