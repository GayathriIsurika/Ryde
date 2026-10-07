import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const details = {
  title: 'Market',
  subtitle: 'Groceries & more',
  description: 'Shop for groceries and everyday essentials.',
  color: '#e3f2fd',
  icon: 'cart-outline',
};

export default function MarketScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1a202c" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{details.title}</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.iconBox, { backgroundColor: details.color }]}>
          <Ionicons name={details.icon as any} size={56} color="#176b3a" />
        </View>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.subtitle}>{details.subtitle}</Text>
        <Text style={styles.description}>{details.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#ffffff' },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#1a202c' },
  headerRightPlaceholder: { width: 40 },
  content: { alignItems: 'center', paddingHorizontal: 24, paddingTop: 40, paddingBottom: 32 },
  iconBox: { width: 112, height: 112, borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  title: { color: '#1a202c', fontSize: 26, fontWeight: '800' },
  subtitle: { color: '#176b3a', fontSize: 15, fontWeight: '700', marginTop: 6 },
  description: { color: '#687386', fontSize: 15, lineHeight: 24, marginTop: 16, textAlign: 'center' },
});