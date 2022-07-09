import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './src/screens/main';
import LottieFiles from './src/screens/lottiefiles';
import BaseShadow from './src/screens/base-shadow';
import FadeIn from './src/screens/fade-in';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="LottieFiles" component={LottieFiles} />
        <Stack.Screen name="BaseShadow" component={BaseShadow} />
        <Stack.Screen name="FadeIn" component={FadeIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
