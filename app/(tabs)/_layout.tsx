import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    // <SafeAreaView style={{backgroundColor:'black'}}>
    <Stack screenOptions={{
      headerShown: false,
      statusBarHidden: true,
    }} >
      <Stack>
      <Stack.Screen name="index" options={{ title:"Index"}} />
      <Stack.Screen name='createAccount' options={{ title:"Create Account" }} />
      <Stack.Screen name='signIn' options={{ title:"Sign In" }} />
      </Stack>
    </Stack>
    // {/* </SafeAreaView> */}
  )
}