import React, { useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BalanceInfo } from '../BalanceInfo';

import CoinGeckoContext from '../../contextAPI/context';
const Portfolio = () => {

    const coins = useContext(CoinGeckoContext)
    return (
        <SafeAreaView style={styles.container}>

           <View style={styles.walletInfo}>
           <Text style={{color:"white", fontWeight:"bold", fontSize:38,}}> Portfolio </Text>
           
           <View>{WalletInfo()}</View>
           </View>

           <View style={styles.Assets}>

            <Text style={{color:"white",fontWeight:"bold",fontSize:24}}>Your Assets</Text>

            <View>

                
            </View>
              <FlatList
              
              />
           </View>
       
        </SafeAreaView>
    )
}
const WalletInfo = () => {
    return(
        <View>
            <BalanceInfo title="Current Balance"
            displayAmount = "3954.4310"
            changePct ="-1.77"
            containerStyle={{ }} 
            />
        </View>
    );
}


const styles = StyleSheet.create({

    container:{
        backgroundColor:"black",
        flex:1,
      
    },
    
    walletInfo:{
     
        backgroundColor:"#282528",
        padding:20,
        borderRadius:30,
        flex:0.28
    },
    Assets:{
        margin:20
    }
});
export  {Portfolio};