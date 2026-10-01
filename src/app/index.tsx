import * as Device from 'expo-device';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Spacing } from '@/constants/theme';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
      <View style={styles.safeArea}>
        <Image
          source={require('@/assets/OnboardImage1.jpg')}
          style={styles.onboardimage}
        />
        <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/RydeLogo.png')}
          style={styles.image}
        />
        
          <Text style={styles.title}>Your Ride, Just a Tap Away</Text>
        </View>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/details')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logoContainer: {
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: 359,
    backgroundColor: 'white',
    marginTop: -50,
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
    marginTop: 90,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
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
    fontFamily: 'NunitoSans_700Bold',
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
