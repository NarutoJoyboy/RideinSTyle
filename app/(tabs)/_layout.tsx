import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function _layout() {
  return (
    // <SafeAreaView style={{backgroundColor:'black'}}>
    <>  
      <StatusBar style="light" backgroundColor="black" />
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: {backgroundColor:'black'}
    }} >
      <Stack.Screen name="index" options={{ title:"Index"}} />
      <Stack.Screen name='createAccount' options={{ title:"Create Account" }} />
      <Stack.Screen name='signIn' options={{ title:"Sign In" }} />
    </Stack>
      </>
    // {/* </SafeAreaView> */}
  )
}