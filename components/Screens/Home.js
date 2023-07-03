import React, { useContext, useEffect, useState ,useCallback} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CoinGeckoContext from '../../contextAPI/context';
import { BalanceInfo } from '../BalanceInfo';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { IconTextButton } from '../buttons/IconTextButton';
import { Chart } from '../Chart';

import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
const Home = (navigation) => {

        const cryptoData = useContext(CoinGeckoContext);
        
        
         const[data,setData] = useState(cryptoData);
         const[chartdata,setChartData] = useState([]);
         const[coin , setCoin] = useState('bitcoin');

    

       

        useEffect(()=>{
            setData(cryptoData);
        },[cryptoData])

        useEffect(() => {
            getData(coin)
          }, [coin]);

          async function getData(coinName){
            try {
                // console.log(coinName)
                const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=7`);
                const formatData = response.data.prices.map(function(i){
                    return{
                        x:i[0],
                        y:i[1],
                    }
                })
                // console.log(formatData);
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
        {chartdata.length>0 && <Chart containerStyle={{}} chartPrices={chartdata} />}
        </View>

        {/* Top Crypto Currencies */}
        <View style={styles.topCryptos}>
          <View>
          <FlatList
          data ={data}
          keyExtractor={item=>item.id}
          ListHeaderComponent={
            <View>
               <Text style={{color:"white",fontWeight:"bold",fontSize:22,marginBottom:20,marginLeft:15}}>Top Crypto Currencies</Text> 
            </View>
          }
          renderItem={({item})=>{

            let priceColor = (item.price_change_percentage_7d_in_currency==0)? "lightgrey" :
             (item.price_change_percentage_7d_in_currency>0)? "green" : "red"

            return (
                <TouchableOpacity style={{margin:15}} onPress={()=>{
                    setCoin(item.id)
                }}>
                   <View style={{display:"flex", flexDirection:"row"}}>
                   <View style={{width:35}}>
                        <Image
                        source={{uri:item.image}}
                        style={{height:20,width:20}}
                        />
                    </View>

                    <View style={{flex:1}}>
                        <Text style={{color:"white",fontWeight:"bold",fontSize:17}}>{item.name}</Text>
                    </View>

                    {/* View for price and percentage change */}
                    <View>
                        <Text style={{color:"white",alignSelf:"flex-end"}}>$ {item.current_price} </Text>

                        <View style={{flexDirection:"row",justifyContent:"flex-end"}}>

                            <View style={{marginVertical:4}}>{
                            item.price_change_percentage_7d_in_currency>0 ? (
                                <AntDesign name="caretup" size={12} color="green" />
                            ):
                            item.price_change_percentage_7d_in_currency<0 ? (
                                <AntDesign name="caretdown" size={12} color="red" />
                            ):
                            (
                                <Text>  </Text>
                            )
                        }
                        </View>

                        <Text style={{color:"white",marginHorizontal:4}}>{item.price_change_percentage_7d_in_currency.toFixed(3)}%</Text>
                        
                        </View>
                    </View>
                   </View>
                </TouchableOpacity>
            )
          }}
        />
          </View>
        </View>

        
       </SafeAreaView>
    )
}

const WalletInfo = () => {
    return(
        <View>
            <BalanceInfo title="Your Wallet"
            displayAmount = "3954.4310"
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
        flex:0.57,
        backgroundColor:"#282528",
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopRightRadius:35,
        borderTopLeftRadius:25,
        padding:10,
        marginRight:20,
        marginLeft:5,
    },
    Graph:{
        flex:0.3,
        marginTop:40,
        marginLeft:-40,
        paddingVertical:50,
        justifyContent:"center"
    },
    topCryptos:{
        flex:1,
        // backgroundColor:"silver"
    }
});



export {Home};