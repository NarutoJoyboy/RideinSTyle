import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {


  return (

      <Stack screenOptions={{
        headerShown: false,
        statusBarHidden: false,
        statusBarBackgroundColor: 'black',
        contentStyle: {backgroundColor:'black'}
      }} >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>


  );
}
