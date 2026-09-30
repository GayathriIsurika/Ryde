import { router } from 'expo-router';
import { StyleSheet, TextInput, TouchableOpacity, View, Text} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Details() {
  return (
    <View>
      <TextInput placeholder="First Name" style={styles.name} />
      <TextInput placeholder="LastName" style={styles.name} />
      <TextInput placeholder="Email" style={styles.name} keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="Phone Number" style={styles.name} keyboardType="phone-pad" />
      <TouchableOpacity style={styles.button} onPress={() => router.push('/otp')}>
        <Text style={styles.buttontext}>Next</Text>
        <AntDesign name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  name: { height: 50, padding: 10, marginHorizontal: 8, borderWidth: 1, marginTop: 20, borderRadius: 10 },
  button: { borderRadius: 20, backgroundColor: '#c1f819', paddingVertical: 10, width: 100, height: 50, marginTop: 300, marginLeft: 240, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  buttontext: { color: 'black', fontSize: 16, textAlign: 'center' },
});
