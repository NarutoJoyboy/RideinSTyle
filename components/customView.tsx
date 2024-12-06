import { View, Text } from 'react-native'
import React from 'react'

export default function CustomView({...props}) {
  return (
    <View style={props.style} >
        {props.children}
    </View>
  )
}