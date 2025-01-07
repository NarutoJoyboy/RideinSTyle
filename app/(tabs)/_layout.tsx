import { View, StatusBar } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function _layout() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'black' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Index',  }} />
        <Stack.Screen name="createAccount" options={{ title: 'Create Account' }} />
        <Stack.Screen name="signIn" options={{ title: 'Sign In' }} />
        <Stack.Screen name="verification" options={{ title: 'Verification' }} />
      </Stack>
    </View>
  );
}