import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import {useState} from 'react'
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';


export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
  })

  
  return (
    <>     
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ title: 'Details' }} />
        <Stack.Screen name="otp" options={{ title: 'Verification' }} />
      </Stack>
    </>
  );
}
