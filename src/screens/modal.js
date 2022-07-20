import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const Modal = props => {
  const dimensions = useWindowDimensions();
  const top = useSharedValue(dimensions.height);
  const style = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, {easing: Easing.linear, duration: 0}),
    };
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      // Dismissing snap point
      if (top.value > dimensions.height / 2 + 200) {
        top.value = dimensions.height;
      } else {
        top.value = dimensions.height / 2;
      }
    },
  });

  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="open"
          onPress={() => {
            top.value = withSpring(
              dimensions.height / 2, // half screen
              SPRING_CONFIG,
            );
          }}
        />
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              // shadowColor: '#000',
              // shadowOffset: {
              //   width: 0,
              //   height: 2,
              // },
              // shadowOpacity: 0.25,
              // shadowRadius: 3.84,
              // elevation: 5,
              padding: 20,
              // justifyContent: 'center',
              // alignItems: 'center',
            },
            style,
          ]}>
          <Text>Sheet</Text>
          <Text>Sheet</Text>
          <Text>Sheet</Text>
          <Text>Sheet</Text>
          <Text>Sheet</Text>
          <Text>Sheet</Text>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerNavigate: {
    borderWidth: 1,
    paddingVertical: 4,
    marginBottom: 10,
  },
});
export default Modal;
