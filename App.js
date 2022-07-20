import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';

import Main from './src/screens/main';
import LottieFiles from './src/screens/lottiefiles';
import BaseShadow from './src/screens/base-shadow';
import FadeIn from './src/screens/fade-in';
import ReactNativePaper from './src/screens/react-native-paper';
import Animation from './src/screens/animation';
import Modal from './src/screens/modal';
import BottomSheets from './src/screens/bottom-sheet';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="LottieFiles" component={LottieFiles} />
          <Stack.Screen name="BaseShadow" component={BaseShadow} />
          <Stack.Screen name="FadeIn" component={FadeIn} />
          <Stack.Screen name="ReactNativePaper" component={ReactNativePaper} />
          <Stack.Screen name="Animation" component={Animation} />
          <Stack.Screen name="Modal" component={Modal} />
          <Stack.Screen name="BottomSheets" component={BottomSheets} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
