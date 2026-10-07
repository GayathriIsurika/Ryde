import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="account-circle" size={150} color="black" marginTop={50}/>
      <Text style={styles.name}>Gayathri Isurika</Text>
      <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.help}>
            <Feather name="help-circle" size={24} color="black" marginLeft={10} />
            <Text style={styles.helpText}>Help and Support</Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color="black"
              marginLeft={60}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.payments}>
            <MaterialIcons name="payments" size={24} color="black" marginLeft={10} />
            <Text style={styles.paymentsText}>Payments</Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color="black"
              marginLeft={120}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings} onPress={() => router.push('/settings')}>
            <Ionicons
              name="settings-outline"
              size={24}
              color="black"
              marginLeft={10}
            />
            <Text style={styles.settingsText}>Settings</Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color="black"
              marginLeft={130}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.aboutus}>
            <AntDesign name="info-circle" size={24} color="black" marginLeft={10} />
            <Text style={styles.aboutusText}>About Us</Text>
            <FontAwesome
              name="angle-right"
              size={24}
              color="black"
              marginLeft={120}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete}>
            <Text style={styles.deleteText}>Logout</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 30,
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius:50,
    width: 359,
    
  },
  help: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#c1f819",
    borderColor: "#c1f819",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  helpText: {
    fontSize: 18,
    textAlign: "center",
  },
  payments: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#c1f819",
    borderColor: "#c1f819",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paymentsText: {
    fontSize: 18,
    textAlign: "center",
  },
  settings: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#c1f819",
    borderColor: "#c1f819",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingsText: {
    fontSize: 18,
    textAlign: "center",
  },
  aboutus: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#c1f819",
    borderColor: "#c1f819",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  aboutusText: {
    fontSize: 18,
    textAlign: "center",
  },
  delete: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    marginTop: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    borderColor: "red",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteText: {
    fontSize: 18,
    color: "red",
  },
});
