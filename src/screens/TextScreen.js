import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: '#000000',
    borderWidth: 1
  }
});

export default TextScreen;