import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";


const NavigationHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image resizeMode="contain" style={{}} source={require('./img/Camera-icon.png')}/>
      <Image resizeMode="contain" style={{}} source={require('./img/Instagram-logo.png')}/>
      <View style={styles.headerIcon}>
        <Image resizeMode="contain" style={{marginRight: 5}} source={require('./img/IGTV.png')}/>
        <Image resizeMode="contain" style={{}} source={require('./img/Messanger.png')}/>
      </View>
    </View>
  );
}

export default NavigationHeader