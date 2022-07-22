import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  useDerivedValue,
  interpolateColor,
  withRepeat,
  cancelAnimation,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import React from 'react';
import {ScrollView, PanGestureHandler} from 'react-native-gesture-handler';

const Animation2 = () => {
  const animation = useSharedValue(0);
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animation.value,
        },
      ],
    };
  });
  const startAnimation = () => {
    animation.value = withTiming(
      300,
      {
        duration: 2000,
        // easing : Easing.bounce
        // easing : Easing.bezier(.02,.01,1,.55)
        easing: Easing.circle,
      },
      () => {
        animation.value = 0;
      },
    );
  };

  const animationPercentage = useSharedValue(0);
  const width = useDerivedValue(() => {
    return interpolate(animationPercentage.value, [0, 1], [20, 80]);
  });
  const height = useDerivedValue(() => {
    return interpolate(animationPercentage.value, [0, 1], [15, 65]);
  });
  const animationStylePercentage = useAnimatedStyle(() => {
    return {
      width: width.value + '%',
      height: height.value + '%',
    };
  });
  const startAnimationPercentage = () => {
    animationPercentage.value = withTiming(1, {
      duration: 2000,
    });
  };

  const animationRotation = useSharedValue(0);
  const rotation = useDerivedValue(() => {
    return interpolate(animationRotation.value, [0, 360], [0, 360]);
  });
  const animationStyleRotation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg',
        },
      ],
    };
  });
  const startAnimationRotation = () => {
    animationRotation.value = withTiming(120, {
      duration: 2000,
    });
  };

  const animationColorValue = useSharedValue(0);
  const animationColor = useDerivedValue(() => {
    return interpolateColor(
      animationColorValue.value,
      [0, 1],
      ['#631d94', '#399915'],
    );
  });
  const startAnimationColor = () => {
    animationColorValue.value = withTiming(1, {
      duration: 2000,
    });
    setTimeout(() => {
      animationColorValue.value = 0;
    }, 2000);
  };
  const animationStyleColor = useAnimatedStyle(() => {
    return {
      backgroundColor: animationColor.value,
    };
  });

  const animationRot = useSharedValue(0);
  const rotationRot = useDerivedValue(() => {
    return interpolate(animationRot.value, [0, 360], [0, 360]);
  });
  const animationStyleRot = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotationRot.value + 'deg',
        },
      ],
    };
  });
  const startAnimationRot = () => {
    animationRot.value = withRepeat(
      withTiming(90, {
        duration: 1200,
      }),
      -1,
    );
  };

  const animationStop = useSharedValue(0);
  const rotationStop = useDerivedValue(() => {
    return interpolate(animationStop.value, [0, 360], [0, 360]);
  });
  const animationStyleStop = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotationStop.value + 'deg',
        },
      ],
    };
  });
  const startAnimationStop = () => {
    animationStop.value = withRepeat(
      withTiming(90, {
        duration: 1200,
      }),
      -1,
    );
  };
  const stop = () => {
    cancelAnimation(animationStop);
  };

  const animationOp = useSharedValue(1);
  const startAnimationOp = () => {
    animationOp.value = withTiming(0, {
      duration: 2000,
    });
  };
  const animationStyleOp = useAnimatedStyle(() => {
    return {
      opacity: animationOp.value,
      // opacity:withTiming(animation.value,{
      //   duration:2000
      // })
    };
  });
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Text>animationColorValue</Text>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box, animationStyle]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <Text>animationStylePercentage</Text>
        <TouchableWithoutFeedback onPress={startAnimationPercentage}>
          <Animated.View style={[styles.box, animationStylePercentage]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <Text>animationStyleRotation</Text>
        <TouchableWithoutFeedback onPress={startAnimationRotation}>
          <Animated.View style={[styles.box, animationStyleRotation]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <Text>animationColorValue</Text>
        <TouchableWithoutFeedback onPress={startAnimationColor}>
          <Animated.View style={[styles.box, animationStyleColor]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.container}>
        <Text>animationStyleRot</Text>
        <TouchableWithoutFeedback onPress={startAnimationRot}>
          <Animated.View style={[styles.box, animationStyleRot]} />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.container}>
        <Text>animationStyleStop</Text>
        <TouchableWithoutFeedback onPress={startAnimationStop}>
          <Animated.View style={[styles.box, animationStyleStop]} />
        </TouchableWithoutFeedback>
        <Button title="stop animation" onPress={stop} />
      </View>

      <View style={styles.container}>
        <Text>opacity</Text>
        <TouchableWithoutFeedback onPress={startAnimationOp}>
          <Animated.View style={[styles.box, animationStyleOp]} />
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#631d94',
  },
  //   box1: {
  //     width: 200,
  //     height: 200,
  //     backgroundColor: '#631d94',
  //   },
});

export default Animation2;
