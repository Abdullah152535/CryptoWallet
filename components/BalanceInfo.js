
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BalanceInfo = ({title,displayAmount,changePct,containerStyle}) => {

    return (
        <View style={{marginTop:20}}>
        <Text style={[styles.text,{fontSize:14}]} >{title} </Text>
        <Text style={[styles.text,{fontSize:14}]} >$  <Text style={{fontWeight:"bold",fontSize:24,color:"white"}}>{displayAmount}</Text>  USD</Text>

        <View style={{display:"flex",flexDirection:"row"}}> 
           <View style ={{marginRight:5,marginTop:10,marginLeft:5}}>
           {
              changePct>0 ? (
                <AntDesign name="caretup" size={12} color="green" />
              ):
              changePct<0 ? (
                <AntDesign name="caretdown" size={12} color="red" />
              ):
              (
                <Text>  </Text>
              )
           }
           </View>

           <Text style={[styles.text,{fontWeight:"bold",fontSize:16},changePct > 0 ? styles.positive : styles.negative]}>
            {changePct > 0 ? `+${changePct}%` : `${changePct}%`}</Text>

            <Text style={styles.text}>1h change</Text>
         </View>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"grey",
        margin:5
    },
    positive: {
        color: 'green',
      },
      negative: {
        color: 'red',
      },
})

export  {BalanceInfo};