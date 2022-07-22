import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const config = [
  'LottieFiles',
  'BaseShadow',
  'FadeIn',
  'ReactNativePaper',
  'Animation',
  'Modal',
  'BottomSheets',
  'AnimationWithSpring',
  'Animation2',
];

const Main = props => {
  return (
    <View style={styles.container}>
      {config.map((item, key) => (
        <View key={`${key}_${item}`} style={styles.containerNavigate}>
          <Button
            title={item}
            onPress={() => props.navigation.navigate(item)}
          />
        </View>
      ))}
    </View>
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
export default Main;
