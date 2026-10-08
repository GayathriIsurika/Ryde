import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function EmailEditModal({ visible, onClose, onConfirm }: Props) {
    const [text, setText] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Email</Text>
          <TextInput style={styles.modalbutton} placeholder="Enter your email" value={text} onChangeText={(newValue) => setText(newValue)}/>

          <View style={styles.buttonRow}>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.deleteButton]}
              onPress={onConfirm}
            >
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "flex-start",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalbutton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: "black",
    width: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#eee",
  },
  deleteButton: {
    backgroundColor: "#c1f819",
  },
  cancelText: {
    color: "#333",
    fontWeight: "600",
  },
  saveText: {
    color: "black",
    fontWeight: "600",
  },
});