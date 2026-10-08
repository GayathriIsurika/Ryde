import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import NameEditModal from '../components/nameeditmodal';
import PhoneEditModal from '../components/phoneeditmodal';
import EmailEditModal from '../components/emaileditmodal';
import Entypo from '@expo/vector-icons/Entypo';

export default function AccountSettings() {

  const [modalVisible, setModalVisible] = useState(false);
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);

  const handleEditName = () => {
    setModalVisible(false);
    // your name edit logic here
  };

  const handleEditPhone = () => {
    setPhoneModalVisible(false);
    // your phone edit logic here
  };

  const handleEditEmail = () => {
    setEmailModalVisible(false);
    // your email edit logic here
  };

  
  return (
    <View style = {styles.view}>
        <TouchableOpacity>
            <MaterialIcons name="account-circle" size={150} color="black" marginTop={40}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.camera}>
            <Entypo name="camera" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.name} onPress={() => setModalVisible(true)}>
            <Text style={styles.nameTitleText}>Name</Text>
            <Text style={styles.nameEnterText}>User</Text>
        </TouchableOpacity>
        <NameEditModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleEditName}
        />
        <PhoneEditModal
          visible={phoneModalVisible}
          onClose={() => setPhoneModalVisible(false)}
          onConfirm={handleEditPhone}
        />
        <TouchableOpacity style={styles.phone} onPress={() => setPhoneModalVisible(true)}>
            <Text style={styles.phoneTitleText}>Mobile</Text>
            <Text style={styles.phoneEnterText}>+94 77 123 4567</Text>
        </TouchableOpacity>
        <EmailEditModal
          visible={emailModalVisible}
          onClose={() => setEmailModalVisible(false)}
          onConfirm={handleEditEmail}
        />
        <TouchableOpacity style={styles.email} onPress={() => setEmailModalVisible(true)}>
            <Text style={styles.emailTitleText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save}>
            <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    camera: {
      position: 'absolute',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      top: -60,
      left: 20,
    },
    name: {
    borderWidth: 1,
    width: 300,
    height: 56,
    marginTop: 40,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "white",
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameTitleText: {
    fontSize: 15,
    color: "gray",
    paddingLeft: 10,
  },
  nameEnterText: {
    fontSize: 15,
    color: "black",
    paddingLeft: 10,

  },
  email: {
    borderWidth: 1,
    width: 300,
    height: 56,
    marginTop: 20,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "white",
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  emailTitleText: {
    fontSize: 15,
    color: "gray",
    paddingLeft: 10,
  },
  emailEnterText: {
    fontSize: 15,
    color: "black",
    paddingLeft: 10,

  },
  phone: {
    borderWidth: 1,
    width: 300,
    height: 56,
    marginTop: 20,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: "white",
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  phoneTitleText: {
    fontSize: 15,
    color: "gray",
    paddingLeft: 10,
  },
  phoneEnterText: {
    fontSize: 15,
    color: "black",
    paddingLeft: 10,
  },
  save: {
    borderWidth: 1,
    width: 300,
    height: 56,
    marginTop: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c1f819",
    borderColor: "black",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveText: {
    fontSize: 18,
    color: "black",
  },
})
