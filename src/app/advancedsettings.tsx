import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeleteModal from '../components/deletemodal'; // adjust the path to where the file actually is

export default function AdvancedSettings() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteAccount = () => {
    setModalVisible(false);
    // your delete logic here
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.account}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={styles.accountText}>Delete Account</Text>
      </TouchableOpacity>

      <DeleteModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleDeleteAccount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  account: {
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: 20,
    paddingLeft: 20,
  },
  accountText: {
    fontSize: 18,
  },
});