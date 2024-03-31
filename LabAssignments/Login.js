import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
    setButtonDisabled(text === '' || password === '');
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setButtonDisabled(text === '' || username === '');
  };

  const handleLogin = () => {
    if (username === 'cspeople' && password === 'computerscience') {
      Alert.alert('Success', 'Login Successful');
    } else {
      if (username === '' || password === '') {
        Alert.alert('Error', 'Please enter both username and password');
      } else {
        Alert.alert('Error', 'Incorrect username or password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonDisabled ? 'gray' : '#007bff' }]}
        onPress={handleLogin}
        disabled={buttonDisabled}  
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Login;

