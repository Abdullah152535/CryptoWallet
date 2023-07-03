
import React from "react";
import {View ,Text, TouchableOpacity,StyleSheet} from 'react-native';

const Button =({label})=>{
    return(
        <View style={styles.button}>
            <TouchableOpacity><Text style={[styles.Text,{fontWeight:"bold",fontSize:17}]}>{label}</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        display:"flex",
        width:70,
        height:40,
        backgroundColor:"#312B31",
        marginVertical:10,
        marginHorizontal:5,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    Text:{
        color:"white"
    }
})

export {Button}