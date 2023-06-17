
import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const IconTextButton = ({label,icon}) =>{
    
    return (
        <TouchableOpacity  style={styles.main}>
           
                <>{icon}</>
                <Text style={{fontSize:14,color:"black",fontWeight:"bold", margin:10}}>{label}</Text>
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main:{

        height:45,
        flex:1,
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    }
});

export {IconTextButton};

