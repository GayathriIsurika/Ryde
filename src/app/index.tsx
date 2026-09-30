import * as Device from 'expo-device';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Spacing } from '@/constants/theme';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={require('@/assets/OnboardImage1.jpg')}
          style={styles.onboardimage}
        />
        <Image
          source={require('@/assets/RydeLogo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Your Ride, Just a Tap Away</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/details')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: -25,
  },
  onboardimage: {
    width: 800,
    height: 400,
    resizeMode: 'contain',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#c1f819',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Inter_900Black',
    marginTop: -20,
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
