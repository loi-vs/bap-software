import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";


const NavigationHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={{ width: 10, }} source={{ uri: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814055_960_720.png'}}/>
      <Text style={styles.headerText}>Instagram</Text>
    </View>
  );
}

export default NavigationHeader