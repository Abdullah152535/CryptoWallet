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
import { Chart } from '../Chart';
import { UseGetAPI } from '../../contextAPI/UseGetAPI';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
const Home = (navigation) => {

        const cryptoData = useContext(CoinGeckoContext);
        
        
         const[data,setData] = useState(cryptoData);
         const[chartdata,setChartData] = useState([]);

         useEffect(()=>{
            setData(cryptoData);
        })

        useEffect(()=>{
            getData();
        })

        useEffect(()=>{
            setData(cryptoData);
        },[data])
         async function getData(){
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7');
                const formatData = response.data.prices.map(function(i){
                    return{
                        x:i[0],
                        y:i[1],
                    }
                })
                setChartData(formatData); 
            } catch (error) {
                console.log(error);
            }
         }


   

    return (
       <SafeAreaView style={styles.container}>

        
        {/* Wallet Info Section */}
        <View style={styles.walletInfo}>
           <View>{WalletInfo()}</View>
        </View>

        {/* Chart Section */}
        <View style={styles.Graph}>
        {chartdata.length > 0 && <Chart containerStyle={{}} chartPrices={chartdata} />}
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

const topCryptos =()=>{
    return(
        <FlatList/>
    )
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
        marginTop:40,
        marginLeft:-40,
       

    },
    topCryptos:{
        flex:1,
        // backgroundColor:"silver"
    }
});



export {Home};