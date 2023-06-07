import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Tabs from './navigation/Tabs';
import { Login } from './components/Screens/Login';
import { SignUp } from './components/Screens/SignUp';
import { ForgotPassword } from './components/Screens/ForgotPassword';
import CoinGeckoProvider from './contextAPI/provider';


const Stack = createStackNavigator();



export default function App() {
  return (
    <CoinGeckoProvider>
         <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}
         initialRouteName='Login'
         >
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="SignUp" component={SignUp} />
           <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
           <Stack.Screen name="Tabs" component={Tabs} />
         </Stack.Navigator>
       </NavigationContainer>
    </CoinGeckoProvider>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
