import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withSpring,
} from 'react-native-reanimated';

const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const {height, width} = Dimensions.get('window');
const screenHeight = height;

const Animation = props => {
  const animation = useSharedValue(0);
  // const dimensions = useWindowDimensions();

  const [value, setValue] = useState();

  const top = useSharedValue(screenHeight);
  const style = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, {easing: Easing.linear, duration: 0}),
    };
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(animation.value, {
        duration: 250,
      }),
    };
  });

  const onOff = () => {
    if (animation.value === 0.4) {
      animation.value = 0;
      top.value = withSpring(screenHeight, SPRING_CONFIG);
    } else {
      animation.value = 0.4;
      top.value = withSpring(
        // 200,
        // value,
        // dimensions.height - value * 2,
        screenHeight - value,
        // dimensions.height / 2,
        SPRING_CONFIG,
      );
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => onOff()}>
        <Animated.View style={[styles.box, animationStyle]} />
        <Animated.View
          onLayout={event => {
            setValue(event.nativeEvent.layout.height);
          }}
          style={[styles.container, style]}>
          {['', '', '', '', '', ''].map(() => (
            <Text>Sheet Sheet Sheet Sheet Sheet Sheet </Text>
          ))}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    // bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
});
export default Animation;
