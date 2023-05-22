import React from "react";
import { View } from "react-native";
import NavigationHeader from "./head-nav";
import Post from "./post";
import BottomNavigation from "./bottom-nav";
import Story from "./story";

 const Screen = () => {
    return (
        <View>
            <NavigationHeader />
            <Story />
            <Post />
            <BottomNavigation/>
        </View>
    )
 }

export default  Screen