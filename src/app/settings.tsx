import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

export default function Settings() {
  return (
    <View style = {styles.view}>
        <TouchableOpacity style={styles.account} onPress={() => router.push('/accountsettings')}>
            <MaterialIcons name="manage-accounts" size={24} color="black" />
            <Text style={styles.accountText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.advancedsettings}>
            <Feather name="tool" size={24} color="black" />
            <Text style={styles.advancedsettingsText}>Advanced Settings</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    account: {
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        marginTop: 20,
        paddingLeft: 20,
    },
    accountText: {
        fontSize: 18,
    },
    advancedsettings: {
        flexDirection: 'row',
        gap: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        paddingLeft: 20,
    },
    advancedsettingsText: {
        fontSize: 18,
    },
})
