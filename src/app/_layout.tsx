import { SplashScreen, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import {useCallback, useEffect, useState} from 'react'
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import AnimatedSplash from '@/components/animated-splash';


export default function RootLayout() {
  const [splashDone, setSplashDone] = useState(false);
  const [fontsLoaded] = useFonts({
    NunitoSans_700Bold,
  })
  const handleFinish = useCallback(() => setSplashDone(true), []);
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>     
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ title: 'Details' }} />
        <Stack.Screen name="otp" options={{ title: 'Verification' }} />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="advancedsettings" options={{ title: 'Advanced Settings' }} />
        <Stack.Screen name="accountsettings" options={{ title: 'Account Settings' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      {!splashDone && (
        <View style={StyleSheet.absoluteFill}>
          <AnimatedSplash onFinish={handleFinish} />
        </View>
      )}
    </>
  );
}


