import React from "react";
import styles from "./styles";
import {View, Text, } from "react-native";


const BottomNavigation = () => {
    return (
      <View style={styles.bottomNavContainer}>
        <Text style={styles.bottomNavText}>Home</Text>
        <Text style={styles.bottomNavText}>Explore</Text>
        <Text style={styles.bottomNavText}>Profile</Text>
      </View>
    );
  };

export default BottomNavigation