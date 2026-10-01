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
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi Gayathri Isurika,</Text>
          <Text style={styles.greeting}>Good Morning!</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.services}>
          {services.map((service) => (
            <TouchableOpacity key={service.label} style={styles.service} activeOpacity={0.75}>
              <View style={styles.serviceIconBox}>
                <Ionicons name={service.icon} size={38} color="#008080" />
                {service.badge && <Text style={styles.serviceBadge}>{service.badge}</Text>}
              </View>
              <Text style={styles.serviceLabel}>{service.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.searchBox}>
          <TextInput placeholder="Where are you going?" placeholderTextColor="#999" style={styles.searchInput} />
          <Ionicons name="search" size={28} color="#aeb2bb" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  header: { minHeight: 138, backgroundColor: '#c1f819', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  greeting: { color: '#242321', fontSize: 20, lineHeight: 27, fontWeight: '500' },
  scrollContent: { paddingHorizontal: 22, paddingBottom: 20 },
  services: { marginTop: 12, marginBottom: 28, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  service: { width: '23%', alignItems: 'center', marginTop: 20 },
  serviceIconBox: { width: '100%', aspectRatio: 1, borderRadius: 17, backgroundColor: '#f0f1f3', alignItems: 'center', justifyContent: 'center' },
  serviceBadge: { position: 'absolute', top: -9, right: -4, overflow: 'hidden', backgroundColor: '#ef1717', color: '#fff', borderRadius: 12, paddingHorizontal: 7, paddingVertical: 3, fontSize: 11, fontWeight: '600' },
  serviceLabel: { color: '#555', fontSize: 15, marginTop: 10, textAlign: 'center' },
  searchBox: { height: 62, borderRadius: 14, backgroundColor: '#f4f4f4', paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  searchInput: { flex: 1, fontSize: 18, color: '#222' },
  eventCard: { borderRadius: 16, overflow: 'hidden', backgroundColor: '#f5f5f5', marginBottom: 16 },
  eventArtwork: { height: 195, backgroundColor: '#71c5e9', paddingHorizontal: 14, paddingTop: 18, alignItems: 'center', justifyContent: 'space-between' },
  eventEyebrow: { fontSize: 8, fontWeight: '700', color: '#12364c', letterSpacing: 1 },
  eventTitle: { color: '#082846', fontSize: 27, fontWeight: '900', letterSpacing: 1, textShadowColor: '#fff', textShadowRadius: 5 },
  eventDetails: { fontSize: 8, color: '#12364c', fontWeight: '700' },
  eventPeople: { position: 'absolute', top: 52, height: 95, left: 0, right: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', opacity: 0.75 },
  ticketLine: { color: '#141414', backgroundColor: 'rgba(255,255,255,0.85)', alignSelf: 'stretch', textAlign: 'center', paddingVertical: 8, fontSize: 11, fontWeight: '800' },
  eventCopy: { padding: 18 },
  eventHeading: { color: '#222', fontSize: 19, fontWeight: '700', marginBottom: 7 },
  eventDescription: { color: '#666', fontSize: 16, lineHeight: 23 },
  exploreLink: { textAlign: 'right', color: '#555', marginTop: 8 },
  bottomNav: { height: 76, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#eee', backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  navItem: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4 },
  navLabel: { color: '#64636b', fontSize: 10 },
  activeNavLabel: { color: '#211b32', fontWeight: '700' },
});
