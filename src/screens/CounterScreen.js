import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); // default value passed in
  // You don't modify state directly, so use setCounter which is arg 2 as the setter

  return (
    <View>
      <Button title="Increase" onPress={() => {setCounter(counter + 1)}} />
      <Button title="Decrease" onPress={() => {setCounter(counter - 1)}} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;