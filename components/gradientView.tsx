import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function GradientView({...props}) {

    

  return (
    <LinearGradient  colors={props.colors} style={props.style} end={props.end} start={props.start} >
        {props.children}
    </LinearGradient>
  )
}