import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Stack, router } from 'expo-router';
const rydeLogo = require('../../assets/RydeLogo.png');

export default function AboutUsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1a202c" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* App Logo / Brand Box */}
        <View style={styles.logoContainer}>
  <Image 
    source={require('../../assets/RydeLogo.png')} 
    style={styles.logoImage} 
    resizeMode="contain"
  />
        
          <Text style={styles.appVersion}>Version 1.0.0</Text>
        </View>

        {/* Mission Statement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.description}>
            We are dedicated to providing fast, reliable, and convenient services right at your fingertips. Whether it's daily rides, fresh food, or essential shopping, our goal is to streamline your everyday routine with seamless digital solutions.
          </Text>
        </View>

        {/* Features / Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          
          <View style={styles.featureRow}>
            <Ionicons name="flash-outline" size={22} color="#176b3a" style={styles.featureIcon} />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Fast & Reliable</Text>
              <Text style={styles.featureSub}>Quick deliveries and real-time tracking.</Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <Ionicons name="shield-checkmark-outline" size={22} color="#176b3a" style={styles.featureIcon} />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Safe & Secure</Text>
              <Text style={styles.featureSub}>Your transactions and data are fully protected.</Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <Ionicons name="headset-outline" size={22} color="#176b3a" style={styles.featureIcon} />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>24/7 Support</Text>
              <Text style={styles.featureSub}>We are here to assist you whenever you need help.</Text>
            </View>
          </View>
        </View>

        {/* Footer Info */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Resistors. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a202c',
  },
  placeholder: {
    width: 40,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
 logoImage: {
    width: 100,
    height: 100,
    borderRadius: 20, 
    marginBottom: 12,
  },
  appVersion: {
    fontSize: 14,
    color: '#687386',
    marginTop: 4,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#4a5568',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
  },
  featureIcon: {
    marginRight: 16,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a202c',
  },
  featureSub: {
    fontSize: 13,
    color: '#687386',
    marginTop: 2,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#a0aec0',
  },
});