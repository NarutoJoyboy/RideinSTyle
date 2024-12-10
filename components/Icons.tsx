import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'

export default function CustomIcons({...props}) {

    const IconSet = {
        AntDesign,
        Ionicons,
        FontAwesome,
    }

    const IconComponent =IconSet[props.type] || Ionicons;

  return (
    <IconComponent name={props.name} size={props.size} color={props.color} {...props} />
  )
}