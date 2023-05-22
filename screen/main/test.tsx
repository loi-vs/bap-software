import React from "react";
import { Image } from "react-native";


const Test = () => {
    const img = require('./img/screenshot.png')
    return (
        <Image source={img}/>  
    )
}

export default Test