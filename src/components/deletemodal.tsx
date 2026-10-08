import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({ visible, onClose, onConfirm }: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Delete Account?</Text>
          <Text style={styles.modalText}>This action cannot be undone.</Text>

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
              <Text style={styles.deleteText}>Delete</Text>
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
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
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
    backgroundColor: "#d9534f",
  },
  cancelText: {
    color: "#333",
    fontWeight: "600",
  },
  deleteText: {
    color: "white",
    fontWeight: "600",
  },
});