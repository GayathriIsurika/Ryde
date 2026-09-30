import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="details" options={{ title: 'Details' }} />
      </Stack>
    </>
  );
}