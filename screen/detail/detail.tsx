import React, { useState, useEffect } from "react";
// import styles from "./styles";
import { Image, View, Text, } from "react-native";
import { Post } from "../data/data-type";

const Detail = ({ route }: { route: any }) => {
    const item = route.params.item
    return (
        <View  style={{flex: 1}}>
            <Image style={{width: 500, height: 500}} source={{ uri: item.img }} />
            <Text style={{ fontSize: 20 }}>{item.caption}</Text>
            <Image style={{width: 50, height: 50}} source={{ uri: item.avatar }} />
        </View>
    )
}

export default Detail

