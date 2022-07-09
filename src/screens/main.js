import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Main = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerNavigate}>
        <Button
          title="LottieFiles"
          onPress={() => props.navigation.navigate('LottieFiles')}
        />
      </View>
      <View style={styles.containerNavigate}>
        <Button
          title="BaseShadow"
          onPress={() => props.navigation.navigate('BaseShadow')}
        />
      </View>
      <View style={styles.containerNavigate}>
        <Button
          title="FadeIn"
          onPress={() => props.navigation.navigate('FadeIn')}
        />
      </View>
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
