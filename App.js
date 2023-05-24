import React from 'react';
import RNBootSplash, { hide } from "react-native-bootsplash";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/login/login';
import Main from './screen/main/view-main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Main' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
