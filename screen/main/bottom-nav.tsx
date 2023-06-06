import React from "react";
import styles from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, Button, Alert, TouchableOpacity } from "react-native";
import Main from "./view-main";
import Camera from "../camera/camera";
import Search from "../search/search";
import User from "../user/user";

const Tab = createBottomTabNavigator();

const NavigationBottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{ tabBarActiveTintColor: '#e91e63', headerShown: false, tabBarStyle: { position: 'relative' } }}
      detachInactiveScreens={true}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image resizeMode="contain" style={{}} source={require('./img/Home-icon.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image resizeMode="contain" style={{}} source={require('./img/Search-icon.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: () => (
            <Image resizeMode="contain" style={{}} source={require('./img/Add-icon.png')} />
          ),
        }}
      />
      <Tab.Screen 
        name="User" 
        component={User}
        options={{
          tabBarIcon: () => (
            <Image resizeMode="contain" style={{}} source={require('./img/Heart-icon.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationBottom






