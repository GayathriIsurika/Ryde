import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const services = [
  { label: 'Rides', icon: 'car-sport' as const },
  { label: 'Food', icon: 'fast-food' as const },
  { label: 'Market', icon: 'cart' as const },
  { label: 'Explore', icon: 'calendar' as const, badge: 'New' },
  { label: 'Rentals', icon: 'time' as const },
  { label: 'Delivery', icon: 'cube' as const, badge: 'Flash' },
  { label: 'Trucks', icon: 'bus' as const },
  { label: "Scan N' Go", icon: 'scan' as const },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Header Container */}
        <View style={styles.headerContainer}>

          {/* Main Header Content */}
          <View style={styles.headerMainContent}>
            {/* Left side greetings */}
            <View style={styles.greetingWrapper}>
              <View>
                <Ionicons name="sunny-outline" size={20} color="#1c2a05" />
              </View>
              <Text style={styles.greetingTitle}>Hi Gayathri Isurika,</Text>
              <View style={styles.subGreetingRow}>
                <Text style={styles.greetingSubtitle}>Good Morning!</Text>
              </View>
              <Text style={styles.tagline}>Ride. Deliver. Explore. All in one place.</Text>
            </View>

            {/* Top Right Corner Image Artwork */}
            <Image
              source={require('@/assets/hero-banner.png')}
              style={styles.headerCornerImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Floating Search Bar */}
        <View style={styles.searchCard}>
          <View style={styles.searchLeftIcon}>
            <Ionicons name="location" size={22} color="#76ca00" />
          </View>
          <View style={styles.searchTextContainer}>
            <Text style={styles.searchTitle}>Where are you going?</Text>
            <Text style={styles.searchSubTitle}>Set your pickup and drop location</Text>
          </View>
          <TouchableOpacity style={styles.searchArrowBtn} activeOpacity={0.85}>
            <Ionicons name="arrow-forward" size={20} color="#1c2a05" />
          </TouchableOpacity>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {SERVICES.map((item) => (
            <TouchableOpacity key={item.id} style={styles.serviceCard} activeOpacity={0.8}>
              <View style={[styles.iconBox, { backgroundColor: item.bgColor }]}>
                {item.badge && (
                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                )}
                <Ionicons name={item.icon} size={32} color={item.iconColor} />
              </View>

              <View style={styles.serviceTitleRow}>
                <Text style={styles.serviceLabel} numberOfLines={1}>
                  {item.label}
                </Text>
                <Ionicons name="chevron-forward" size={12} color="#a6b1c2" />
              </View>

              <Text style={styles.serviceSubtitle} numberOfLines={1}>
                {item.subtitle}
              </Text>
            </TouchableOpacity>
          ))}
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
  scrollContainer: {
    paddingBottom: 30,
  },
  headerContainer: {
    backgroundColor: '#b9f227',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 52,
    position: 'relative',
    overflow: 'hidden',
  },

  headerMainContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    position: 'relative',
  },
  greetingWrapper: {
    flex: 1,
    paddingRight: 10,
    zIndex: 2,
  },
  greetingTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#121e02',
    letterSpacing: -0.3,
  },
  subGreetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  greetingSubtitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#121e02',
  },
  heartIcon: {
    marginLeft: 6,
  },
  tagline: {
    fontSize: 11,
    fontWeight: '600',
    color: '#384b12',
    marginTop: 6,
  },
  headerCornerImage: {
    width: 175,
    height: 120,
    position: 'absolute',
    right: -15,
    top: -10,
    zIndex: 1,
  },

  /* Search Bar Card Overlay */
  searchCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 18,
    marginTop: -32,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 6,
    zIndex: 10,
  },
  searchLeftIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f1fada',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  searchTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1c212e',
  },
  searchSubTitle: {
    fontSize: 11,
    color: '#808b9e',
    marginTop: 2,
  },
  searchArrowBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#b9f227',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Service Grid Section */
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    marginTop: 22,
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: (width - 28) / 4 - 8,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  iconBox: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 8,
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -4,
    backgroundColor: '#ff3b30',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 2,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: '800',
  },
  serviceTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  serviceLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1a202c',
    marginRight: 2,
  },
  serviceSubtitle: {
    fontSize: 10,
    color: '#8e99a8',
    marginTop: 2,
  },


});
