import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child</Text>
      <Text style={styles.textStyle2}>Child</Text>
      <Text style={styles.textStyle3}>Child</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textStyle1: {
    borderWidth: 1,
    borderColor: 'red',
    // flex: 1,
    height: 100,
    width: 100
    // marginVertical: 20,
    // marginHorizontal: 20
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: 'red',
    // flex: 1,
    height: 100,
    width: 100,
    top: 100
    // marginVertical: 20,
    // marginHorizontal: 20
  },
  textStyle3: {
    borderWidth: 1,
    borderColor: 'red',
    // flex: 1,
    height: 100,
    width: 100
    // marginVertical: 20,
    // marginHorizontal: 20
  }
});

export default BoxScreen;
