import React, { useState } from "react";
import styles from "../main/styles";
import { ImageBackground, View, TextInput, Image, Button, ActivityIndicator, SafeAreaView, ScrollView } from "react-native";
import auth from "@react-native-firebase/auth";


const image = require('./img/background.jpg');

const Login = ( {navigation}: {navigation: any}) => {
    const [ userEmail, setUserMail] = useState("");
    const [ userPassword, setUserPassword ] = useState("");
    const [ errortext, setErrortext ] = useState("");

    // const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext("");
        if(!userEmail) {
            alert("Pleas fill Email")
            return;
        }
        if(!userPassword) {
            alert("Pleas fill Password")
            return;
        }
        auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
            console.log(user);
            if (user) navigation.replace("Main");
        })
        .catch((error) => {
            console.log(error);
            if( error.code === "auth/invalid-email")
                setErrortext(error.message);
            else if(error.code == "auth/user-not-found")
                setErrortext("no User Found");
            else {
                setErrortext("Please check your email id or password");
            }
        });
    };

    return (
        <SafeAreaView>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                }}
            >

            </ScrollView>
        </SafeAreaView>
    )
    // const [text, onChangeText] = useState('Account');
    // const [number, onChangeNumber] = useState('Password');
    // const LoadMore = () => {
    //     return(
    //         <ActivityIndicator size="large" color="#00ff00" />
    //     )
    // }
    // return (
    //     <ImageBackground source={image} resizeMode="cover" style={styles.loginImage}>
    //         <Image resizeMode="contain" source={require('./img/Instagram-logo.png')} />
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeText}
    //             value={text}
    //         />
    //         <TextInput
    //             style={styles.input}
    //             onChangeText={onChangeNumber}
    //             value={number}
    //             keyboardType="numeric"
    //         />
    //         <Button
    //             title="Log In"
    //             onPress={() => navigation.navigate('Main') }
    //         />
    //     </ImageBackground>
    // )
}

export default Login


