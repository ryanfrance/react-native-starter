import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNT_STEP = 1;

const reducer = (state, action) => {
    if (action.type === 'increment_counter' || action.type === 'decrement_counter') {
        return { ...state, counter: state.counter + action.payload };
    }

    return state;
}

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0); // default value passed in
  // You don't modify state directly, so use setCounter which is arg 2 as the setter

  // Would be better to use state but to get more reducer practice in....
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state; 

  return (
    <View>
      {/* <Button title="Increase" onPress={() => {setCounter(counter + 1)}} />
      <Button title="Decrease" onPress={() => {setCounter(counter - 1)}} /> */}
      <Button title="Increase" onPress={() => { dispatch({ type: 'increment_counter', payload: COUNT_STEP }) }} />
      <Button title="Decrease" onPress={() => { dispatch({ type: 'decrement_counter', payload: -1 * COUNT_STEP }) }} />
      <Text>Current Count: { counter }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;