import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants/theme'
import reusable from './reusable.style'
import NetworkImage from './NetworkImage'
import HeightSpacer from './HeightSpacer'
import ReusableText from './ReusableText'
import WidthSpacer from './WidthSpacer'
import Rating from './Rating'

const ReusableTile = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ padding: 10, backgroundColor: COLORS.lightWhite, borderRadius: 12 }}>
                <View style={reusable.rowWithSpace('flex-start')}>
                    <NetworkImage source={item.imageUrl} width={80} height={80} radius={12} />
                    <View style={{width: 8}}/>
                    <View style={{justifyContent: "space-between"}}>
                        <ReusableText
                            text={item.title}
                            family={'medium'}
                            size={SIZES.medium}
                            color={COLORS.black}
                        />
                        <ReusableText
                            text={item.location}
                            family={'medium'}
                            size={14}
                            color={COLORS.gray}
                        />
                        <View style={reusable.rowWithSpace('flex-start')}>
                            <Rating rating={item.rating}/>
                            <WidthSpacer width={5} />
                            <ReusableText
                                text={` (${item.review}) `}
                                family={'medium'}
                                size={14}
                                color={COLORS.gray}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ReusableTile

const styles = StyleSheet.create({})