import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const test = [{}, {}, {}, {}, {}, {}, {}, {}];

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000 + props.index * 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      {test.map((item, index) => (
        <FadeInView
          key={index}
          index={index + 1}
          style={{
            width: 250,
            height: 50,
            backgroundColor: 'powderblue',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
            Fading in
          </Text>
        </FadeInView>
      ))}
    </View>
  );
};
