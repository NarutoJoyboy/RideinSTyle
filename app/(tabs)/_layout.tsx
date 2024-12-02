import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      statusBarHidden: true,
    }} >
      <Stack.Screen name="index" options={{ title:"Index"}} />
      <Stack.Screen name="CreateAccount" options={{ title:"CreateAccount"}} />
    </Stack>
  )
}