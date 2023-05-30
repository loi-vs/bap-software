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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true, duration: 500 })}>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          {/* initialParams={{ post: data }} */}
          <Stack.Screen name='Main' component={NavigationBottom}  />
          <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='Search' component={Search}/>
          <Stack.Screen name='Camera' component={Camera}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
