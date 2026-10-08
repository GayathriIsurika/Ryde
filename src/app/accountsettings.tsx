import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Settings() {
  return (
    <View style = {styles.view}>
        <View>
            <MaterialIcons name="account-circle" size={150} color="black" marginTop={40}/>
        </View>
        <TouchableOpacity style={styles.name}>
            <Text style={styles.nameTitleText}>Name</Text>
            <Text style={styles.nameEnterText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.phone}>
            <Text style={styles.phoneTitleText}>Mobile</Text>
            <Text style={styles.phoneEnterText}>+94 77 123 4567</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.email}>
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
