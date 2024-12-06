import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import Style from './colors'



export default function Loading() {
    
    return(
        <View style={{flex:1, backgroundColor:Style.colors.background, justifyContent:'center'}}>
            <ActivityIndicator size={60} color={"white"}  />
        </View>
    )
}