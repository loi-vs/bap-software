import React from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import Keychain from 'react-native-keychain';

const User = ({ navigation }: { navigation: any }) => {
  const handleLogout = () => {
    firebase.auth().signOut()
    .then(()=>{
      Keychain.resetGenericPassword();
    })
    .catch(error => {
      console.log(error)
    })
    

  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 16, }}>This is the Screen</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleLogout}>
          <Text style={styles.buttonTextStyle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default User;


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

