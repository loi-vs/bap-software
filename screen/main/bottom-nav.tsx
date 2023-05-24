import React from "react";
import styles from "./styles";
import {View, Text, Image, Button, Alert} from "react-native";


const NavigationBottom = () => {
    return (
      <View style={styles.bottomNavContainer}>
        <Image resizeMode="contain" style={{}} source={require('./img/Home-icon.png')}/>
        <Image resizeMode="contain" style={{}} source={require('./img/Search-icon.png')}/>
        <Image resizeMode="contain" style={{}} source={require('./img/Add-icon.png')}/>
        <Image resizeMode="contain" style={{}} source={require('./img/Heart-icon.png')}/>
      </View>
    );
  };

export default NavigationBottom



{/* <Text style={styles.bottomNavText}>Home</Text>
<Text style={styles.bottomNavText}>Explore</Text>
<Text style={styles.bottomNavText}>Profile</Text> */}