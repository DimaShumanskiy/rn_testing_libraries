import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../store';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();

  const count = useSelector(store => store.count.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  async function getUser() {
    try {
      const response = await axios.get('https://api.agify.io?name=meelad');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>Counter App</Text>
      <Text style={styles.counter_text}>{count}</Text>

      <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
        <Text style={styles.btn_text}> Increment </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleDecrement}
        style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
        <Text style={styles.btn_text}> Decrement </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={getUser}
        style={{...styles.btn, backgroundColor: 'gold'}}>
        <Text style={styles.btn_text}> Test API </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});
