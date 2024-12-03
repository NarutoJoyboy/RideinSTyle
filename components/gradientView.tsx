import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientView({...props}) {
  return (
    <LinearGradient colors={props.gradientColor} style={props.style} end={props.end} start={props.start} >
        {props.children}
    </LinearGradient>
  )
}