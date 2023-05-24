import React from "react";
import styles from "../main/styles";
import { ImageBackground, View, TextInput, Image, Button } from "react-native";

const image = require('./img/background.jpg');

const Login = ( {navigation}: {navigation: any}) => {

    const [text, onChangeText] = React.useState('Account');
    const [number, onChangeNumber] = React.useState('Password');

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.loginImage}>
            <Image resizeMode="contain" source={require('./img/Instagram-logo.png')} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
            />
            <Button
                title="Log In"
                onPress={() => navigation.navigate('Main') }
            />
        </ImageBackground>
    )
}

export default Login


