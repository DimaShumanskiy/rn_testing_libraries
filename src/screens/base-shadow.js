import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const BaseShadow = props => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow1}>
        <View style={styles.containerText}>
          <Text>тут могла быть ваша реклама</Text>
        </View>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.shadow2}>
          <Text style={styles.buttonText}>{'new button'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerText}>
        <Text>react-native-shadow-generator</Text>
      </View>
      <View style={styles.containerBtn}>
        <View style={styles.shadow3}>
          <Text>{`необходим:\nborderColor: 'white',\nborderWidth: 1`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  shadow1: {
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 16,
    shadowOpacity: 0.58,
    elevation: 24,
  },
  containerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  shadow2: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 5,
  },
  shadow3: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 5,
  },
});
export default BaseShadow;
