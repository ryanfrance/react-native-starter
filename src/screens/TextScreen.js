import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);

  const checkPassword = (newValue) => {
    setPassword(newValue);

    if (password.length > 5) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => checkPassword(newValue)}
      />
      { !passwordValid ? <Text>Please enter a password longer than 5 characters</Text> : null }
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