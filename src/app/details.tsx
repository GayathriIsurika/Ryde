import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router, Stack } from "expo-router";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Details() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Your details",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <EvilIcons name="arrow-left" size={40} color="black" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: "#c1f819" },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "light",
            color: "black",
          },
        }}
      />
      <View style={styles.view}>
        <View style={styles.nameContainer}>
          <TextInput placeholder="First Name" style={styles.name} />
          <TextInput placeholder="LastName" style={styles.name} />
        </View>
        <TextInput placeholder="Email" style={styles.email} />
        <TextInput placeholder="Phone Number" style={styles.phone} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/otp')}>
        <Text style={styles.buttontext}>Next</Text>
        <AntDesign name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#c1f819",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 300,
    width: 359,
  },
  name: {
    height: 50,
    width: 150,
    padding: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
  nameContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
  },
  email: {
    height: 50,
    padding: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 18,
    width: 330,
    backgroundColor: "white",
  },
  phone: {
    height: 50,
    padding: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 18,
    width: 330,
    backgroundColor: "white",
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#c1f819",
    paddingVertical: 10,
    width: 100,
    height: 50,
    marginTop: 300,
    marginLeft: 240,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttontext: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
