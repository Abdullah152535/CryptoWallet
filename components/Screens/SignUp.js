import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
   
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone:', phone);
    navigation.navigate('Tabs')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.formContainer}>
        <TextInput
          label="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          style={[styles.input,]}
          underlineColor="#FFFFFF" // Change the underline color here
          selectionColor="#FFFFFF"
          theme={{
            colors: {
              primary: '#FFFFFF',
              text: '#FFFFFF', // Change the label and input text color here
            },
            fonts: {
              medium: { // Change the label font style here
                fontFamily: 'Roboto-Medium',
              },
            },
            roundness: 8, // Change the border radius of the input field here
          }}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={[styles.input,]}
          underlineColor="#FFFFFF" // Change the underline color here
          selectionColor="#FFFFFF"
          keyboardType="email-address"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: '#FFFFFF',
              text: '#FFFFFF', // Change the label and input text color here
            },
            fonts: {
              medium: { // Change the label font style here
                fontFamily: 'Roboto-Medium',
              },
            },
            roundness: 8, // Change the border radius of the input field here
          }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={[styles.input,]}
          underlineColor="#FFFFFF" // Change the underline color here
          selectionColor="#FFFFFF"
          theme={{
            colors: {
              primary: '#FFFFFF',
              text: '#FFFFFF', // Change the label and input text color here
            },
            fonts: {
              medium: { // Change the label font style here
                fontFamily: 'Roboto-Medium',
              },
            },
            roundness: 8, // Change the border radius of the input field here
          }}
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={[styles.input,]}
          underlineColor="#FFFFFF" // Change the underline color here
          selectionColor="#FFFFFF"
          keyboardType="phone-pad"
          theme={{
            colors: {
              primary: '#FFFFFF',
              text: '#FFFFFF', // Change the label and input text color here
            },
            fonts: {
              medium: { // Change the label font style here
                fontFamily: 'Roboto-Medium',
              },
            },
            roundness: 8, // Change the border radius of the input field here
          }}
        />
        <Button
          mode="contained"
          onPress={handleSignUp}
          style={styles.button}
          labelStyle={styles.buttonText}
          theme={{ colors: { primary: '#9e9e9e' } }}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
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
  },
  input: {
    marginBottom: 25,
    backgroundColor: 'transparent',
    color: '#FFFFFF', // Change the input text color here
    fontSize: 20, // Change the input font size here
  },
  button: {
    marginTop: 20,
    backgroundColor: '#9e9e9e',
    height:50,
    justifyContent:"center"
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize:20
  },
});

export {SignUp};
