import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './src/store';
import screen from './src/screens/';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={screen.Main} />
            <Stack.Screen name="LottieFiles" component={screen.LottieFiles} />
            <Stack.Screen name="BaseShadow" component={screen.BaseShadow} />
            <Stack.Screen name="FadeIn" component={screen.FadeIn} />
            <Stack.Screen
              name="ReactNativePaper"
              component={screen.ReactNativePaper}
            />
            <Stack.Screen name="Animation" component={screen.Animation} />
            <Stack.Screen name="Modal" component={screen.Modal} />
            <Stack.Screen name="BottomSheets" component={screen.BottomSheets} />
            <Stack.Screen
              name="AnimationWithSpring"
              component={screen.AnimationWithSpring}
            />
            <Stack.Screen name="Animation2" component={screen.Animation2} />
            <Stack.Screen
              name="PanGestureHandler1"
              component={screen.PanGestureHandler1}
            />
            <Stack.Screen name="Introduction" component={screen.Introduction} />
            <Stack.Screen name="Hover" component={screen.Hover} />
            <Stack.Screen name="Home" component={screen.Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
