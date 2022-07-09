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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerNavigate: {
    borderWidth: 1,
    paddingVertical: 4,
  },
});
export default Main;
