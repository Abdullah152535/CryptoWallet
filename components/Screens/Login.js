import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Tabs')
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          theme={{ colors: { primary: '#FFFFFF'} }}
          underlineColor="#FFFFFF"
          selectionColor="#FFFFFF"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#FFFFFF"

        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
          theme={{ colors: { primary: '#FFFFFF'} }}
          underlineColor="#FFFFFF"
          selectionColor="#FFFFFF"
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonText}
          theme={{ colors: { primary: '#9e9e9e' } }}
        >
          Login
        </Button>

        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
          Forgot password?
        </Text>

        <Text style={styles.signUp} onPress={handleSignUp}>
          Don't have an account? Sign up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#282c34',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 16,
    height:"60%",
    // backgroundColor:"blue",
  },
  input: {
    marginBottom: 40,
    backgroundColor: 'transparent',
    fontSize:22,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#9e9e9e',
    height:50,
    justifyContent:"center"
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize:20
  },
  forgotPassword: {
    marginTop: 50,
    color: '#FFFFFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  signUp: {
    marginTop: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export { Login };
