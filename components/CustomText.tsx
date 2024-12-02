import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomText({...props}) {
  return (
    <TouchableOpacity disabled={props.type} style={props.buttonStyle} onPress={props.onPress}  >
      <Text style={props.textStyle}>{props.helperText}</Text>
    </TouchableOpacity>
  )
}