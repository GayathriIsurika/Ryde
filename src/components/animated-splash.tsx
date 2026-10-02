import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

type Props = {
  onFinish: () => void;
};

export default function AnimatedSplash({ onFinish }: Props) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (!showLogo) return;
    const timer = setTimeout(onFinish, 2000); // how long the logo stays
    return () => clearTimeout(timer);
  }, [showLogo, onFinish]);

  return (
    <View style={styles.container}>
      {!showLogo ? (
        <LottieView
          source={require('@/assets/loading.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => setShowLogo(true)}
          style={styles.animation}
        />
      ) : (
        <Image
          source={require('@/assets/loading.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 200,
    height: 200,
  },
});