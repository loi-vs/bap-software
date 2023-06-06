import React, { useEffect, useState } from 'react';
import RNBootSplash, { hide } from "react-native-bootsplash";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/login/login';
import Main from './screen/main/view-main';
import Detail from './screen/detail/detail';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Post } from './screen/data/data-type';
import NavigationBottom from './screen/main/bottom-nav';
import Camera from './screen/camera/camera';
import Search from './screen/search/search';
import Register from './screen/register/register';
import User from './screen/user/user';
import { Alert } from 'react-native';
import LocalAuthentication from "rn-local-authentication";
import Keychain from 'react-native-keychain';
import { firebase } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();




const handleLocalAuthen = () => {
  LocalAuthentication.isSupportedAsync()
    .then(isAuthenticated => {
      if (isAuthenticated) {
        console.log('Authorized successfully!');
        const handleAuthenticate = async () => {
          const authenticationStatus = await LocalAuthentication.authenticateAsync({
            reason: "Very important reason to authenticate",
            fallbackEnabled: true,
            fallbackTitle: "Enter password",
            cancelTitle: "Cancel",
            fallbackToPinCodeAction: true,
            reuseDuration: 300
          });
          if (authenticationStatus.success) {
            await RNBootSplash.hide({ fade: true, duration: 500 });
            console.log('BootSplash has been hidden successfully');
          }
        };
        handleAuthenticate();
      } else {
        console.log(`Something went wrong. Error: ${isAuthenticated}`);
      }
    })
};

const App = () => {
  const [token, setToken] = useState(false)

  async function getPassword() {
    const credentials = await Keychain.getGenericPassword();
    if (!credentials) return

    const { username, password } = credentials

    firebase.auth().signInWithEmailAndPassword(username, password)
  }

  useEffect(() => {
    getPassword()
    firebase.auth().onAuthStateChanged(user => {
      setToken(!!user)
      console.log(user)
    })
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={() => handleLocalAuthen()}>
        {!token ? (
          <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            {/* <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen name='Camera' component={Camera} />
          <Stack.Screen name='User' component={User}/> */}
          </Stack.Navigator >
        ) : (
          <Stack.Navigator initialRouteName='NavigationBottom' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='NavigationBottom' component={NavigationBottom} />
          </Stack.Navigator>
        )

        }


      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;





