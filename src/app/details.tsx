import { StyleSheet, TextInput, TouchableOpacity, View, Text} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Details() {
  return (
    <View>
        <View style={styles.nameContainer}>
            <TextInput
                placeholder="First Name"
                style={styles.name}
            />
            <TextInput
                placeholder="LastName"
                style={styles.name}
            />
      </View>
      <TextInput
        placeholder="Email"
        style={styles.email}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.phone}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Next</Text>
        <AntDesign name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    name: {
        height: 50,
        width: 150,
        padding: 10,
        marginHorizontal: 8,
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
    },
    nameContainer: {
        flexDirection: 'row',
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
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#c1f819',
        paddingVertical: 10,
        width: 100,
        height: 50,
        marginTop: 300,
        marginLeft: 240,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    buttontext: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
    }
});
