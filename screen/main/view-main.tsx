import React from "react";
import { View } from "react-native";
import NavigationHeader from "./head-nav";
import Post from "./post";
import BottomNavigation from "./bottom-nav";

 const Screen = () => {
    return (
        <View>
            <NavigationHeader />
            <Post />
            <BottomNavigation/>
        </View>
    )
 }

export default  Screen