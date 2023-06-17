import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from 'victory-native';
import { useIsFocused } from '@react-navigation/native';

const Trade = ({navigation}) => {

    const isfocused = useIsFocused();

    const [isVisible,setIsVisible] = useState(true);


    function SetModal(){
        setIsVisible(true);
    }
    function closeModal(){
        setIsVisible(false);
        navigation.goBack();
    }

    useEffect(()=>{
        if (isfocused) {
            SetModal();
        }
    
    },[isfocused])
    return (
       
       
        
        <Modal visible={isVisible} transparent  >
           <View style={styles.ModalStyle}>

            <TouchableOpacity style={{width:100,height:70,backgroundColor:"grey",borderRadius:2}}
            onPress={()=>closeModal()}>

            </TouchableOpacity>
           </View>
        </Modal>
      
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"black",
      
    },
    ModalStyle:{
        backgroundColor:"#282528",
        height:300,
        marginTop:540
    }
});

export  {Trade};