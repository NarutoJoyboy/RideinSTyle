import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'



export default function Loading() {
    
    return(
        <View>
            <ActivityIndicator size={"large"} color={"white"} />
        </View>
    )
}