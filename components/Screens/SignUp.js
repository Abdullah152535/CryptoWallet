import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { db ,app,auth} from '../../firebase';
import {doc  , setDoc ,getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  const emailIsValid = (email) => {
    // Implement your email validation logic here
    // This can be a simple regular expression or a more complex validation
    // based on your requirements
    // Here's an example of a basic email validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  const checkUserExists = async (email) => {

    const docRef = doc(db, 'Users', email);

    const docSnapshot = await getDoc(docRef);
    return docSnapshot.exists();
  };

  const handleSignUp = async () => {
    try {

      if (!emailIsValid(email)) {
        console.error('Invalid email format');
        // Handle invalid email format scenario, such as displaying an error message to the user
        return;
      }
      console.log("check1") 
        // Check if the user already exists
        const userExists = await checkUserExists(email);
        if (userExists) {
          console.error('User already exists');
          // Handle existing user scenario, such as displaying a message to the user
          return;
        }
        console.log("check2")

      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;
   
      console.log("check3")
      // Store additional user data in Firestore with the user's email as the document ID
      // Add a new document in collection "cities"
        await setDoc(doc(db, "Users", email), {
          phone,  
          fullName,
          password,
          email,
        });
      
      console.log("check4")

      console.log('User signed up successfully:', user);
      navigation.navigate('Login'); // Navigate to the desired screen after sign up
    } catch (error) {
      console.error('Error signing up:', error);
    }
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
          textColor='white'
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
          textColor='white'
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
                color:"white"
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
          textColor='white'
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
          textColor='white'
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
