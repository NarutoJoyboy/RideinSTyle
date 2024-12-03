import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function CustomText({...props}) {

  return (
      <Text style={props.textStyle}>{props.helperText}</Text>
  )
}