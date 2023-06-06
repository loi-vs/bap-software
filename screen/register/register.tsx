import React, { useState, createRef } from "react";
import auth from "@react-native-firebase/auth";
import { ImageBackground, StyleSheet } from "react-native";
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, TextInput, TouchableOpacity, View, Image, Text } from "react-native";

const image = require('./img/background.jpg');

const Register = ({ navigation }: { navigation: any }) => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errortext, setErrortext] = useState("");

    const emailInputRef = createRef<TextInput>();
    const passwordInputRef = createRef<TextInput>();

    const handleSubmitButton = () => {
        setErrortext("");
        if (!userName) return alert("Please fill Name");
        if (!userEmail) return alert("Please fill Email");
        if (!userPassword) return alert("Please fill Password");

        auth()
            .createUserWithEmailAndPassword(
                userEmail,
                userPassword
            )
            .then((userCredential) => {
                console.log(
                    "Registration Successful. Please Login to proceed"
                );
                console.log(userCredential);
                if (userCredential !== null) {
                    auth()
                        .currentUser?.updateProfile({
                            displayName: userName,
                            // photoURL:
                            //     "https://aboutreact.com/profile.png",
                        })
                        .then(() => navigation.replace("Login"))
                        .catch((error) => {
                            alert(error);
                            console.error(error);
                        });
                }
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "auth/email-already-in-use") {
                    setErrortext(
                        "That email address is already in use!"
                    );
                } else {
                    setErrortext(error.message);
                }
            });
    };

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.loginImage}>
        <SafeAreaView>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('./img/Instagram-logo.png')}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
                <KeyboardAvoidingView enabled>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserName) =>
                                setUserName(UserName)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Enter Name"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                emailInputRef.current &&
                                emailInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) =>
                                setUserEmail(UserEmail)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Enter Email"
                            placeholderTextColor="#8b9cb5"
                            keyboardType="email-address"
                            ref={emailInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.sectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserPassword) =>
                                setUserPassword(UserPassword)
                            }
                            underlineColorAndroid="#f000"
                            placeholder="Enter Password"
                            placeholderTextColor="#8b9cb5"
                            ref={passwordInputRef}
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={Keyboard.dismiss}
                            blurOnSubmit={false}
                        />
                    </View>
                    {errortext != "" ? (
                        <Text style={styles.errorTextStyle}>
                            {" "}
                            {errortext}{" "}
                        </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}
                    >
                        <Text style={styles.buttonTextStyle}>
                            REGISTER
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
            <Text
                style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "white",
                }}
            >
                Welcome to my app
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "white",
                }}
            >
                firebase.google.com
            </Text>
        </SafeAreaView>
        </ImageBackground>
    );
};
export default Register;

const styles = StyleSheet.create({
    sectionStyle: {
        flexDirection: "row",
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    loginImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
      },
    buttonStyle: {
        backgroundColor: "#7DE24E",
        borderWidth: 0,
        color: "#FFFFFF",
        borderColor: "#7DE24E",
        height: 40,
        alignItems: "center",
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonTextStyle: {
        color: "#FFFFFF",
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: "white",
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#dadae8",
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center",
        fontSize: 14,
    },
});
