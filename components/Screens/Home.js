import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoinGeckoContext from '../../contextAPI/context';
import { BalanceInfo } from '../BalanceInfo';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { IconTextButton } from '../buttons/IconTextButton';


const Home = (navigation) => {

    const {cryptoData} = useContext(CoinGeckoContext);
    
    const[data,setData] = useState(cryptoData);

    useEffect(()=>{
        // console.log(cryptoData);
        setData(cryptoData);
    },[cryptoData])
    return (
       <SafeAreaView style={styles.container}>
        

        {/* Wallet Info Section */}
        <View style={styles.walletInfo}>
           <View>{WalletInfo()}</View>
        </View>

        {/* Chart Section */}
        <View style={styles.Graph}>
           
        </View>

        {/* Top Crypto Currencies */}
        <View style={styles.topCryptos}>
        <Text style={{color:"white"}} >Top crypto</Text>
        </View>

        
       </SafeAreaView>
    )
}

const WalletInfo = () => {
    return(
        <View>
            <BalanceInfo title="Your Wallet"
            displayAmount = "39,000"
            changePct ="-1.77"
            containerStyle={{ }} 
            />

            <View style={{flexDirection:"row",marginTop:30,height:50}}>
          <IconTextButton label={"Transfer"} icon={<Feather name="send" size={18} color="black" />} />
           <IconTextButton label={"Withdraw"} icon={<FontAwesome5 name="arrow-circle-down" size={18} color="black" />} />
          </View>

        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
    walletInfo:{
        flex:0.65,
        backgroundColor:"#2d2a2e",
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopRightRadius:35,
        borderTopLeftRadius:25,
        padding:10,
        marginRight:20,
        marginLeft:5,
    },
    Graph:{
        flex:1,
        // backgroundColor:"blue"
        

    },
    topCryptos:{
        flex:1,
        // backgroundColor:"silver"
    }
});



export {Home};