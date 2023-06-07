import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Login = ({navigation}) => {
    return (
       <SafeAreaView>
         <View>
            <Text>Dummy </Text>

            <TouchableOpacity style={styles.button} 
               onPress={() => {
                navigation.navigate("Tabs");
              }} >
                <Text>Button
                </Text>
            </TouchableOpacity>
        </View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        button:{
            height:30,
            width:100,
            borderRadius:2,
            margin:20,
            borderWidth:1
        }
    }
)

export {Login};