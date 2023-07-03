import React,{useContext,useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../buttons/ButtonSmall';
import CoinGeckoContext from '../../contextAPI/context';
const Market = (navigation) => {

    const cryptoData  = useContext(CoinGeckoContext);

    const[data,setData] = useState(cryptoData);

    useEffect(()=>{
        console.log(cryptoData)
        setData(cryptoData);
    })

    function RenderTabBar(){
        return(
            <View 
            style={{flexDirection:"row",marginTop:10,width: "100%",
            height:50,backgroundColor:"#312B31",borderRadius:15,}}>
                <View style={{flex:0.5,justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity style={{width:197,height:50,justifyContent:"center",alignItems:"center"}}>
                        <Text style={[styles.Text,{fontSize:18,fontWeight:"bold"}]}>CryptoAssets</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.5,}}>
                    <TouchableOpacity  style={{width:197,height:50,justifyContent:"center",alignItems:"center"}}>
                        <Text style={[styles.Text,{fontSize:18,fontWeight:"bold"}]}>Exchanges</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function RenderButtons(){
        return(
            <View style={{flexDirection:"row"}}>
                <Button label={"USD"}/>
                <Button label={"%(7d)"}/>
                <Button label={"Top"}/>
            </View>
        )
    }

     function RenderMarketList(){
        return(
            
                <View style={{width:"100%"}}>
                <FlatList
                data= {data}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                  return(
                    <TouchableOpacity>
                      <View style={styles.item}>
                        <View style={styles.image}>
                        <Image
                        source={{uri:item.image}}
                        style={{height:25,width:25,margin:10}}
                        />

                         <Text style={[styles.Text,{marginLeft:5}]}>{
                            item.name
                            .split(' ')
                            .slice(0, 2)
                            .join(' ')
                         } </Text>

                         
                        </View>
                      </View>
                       </TouchableOpacity>
                  )
                }}
                />
            </View>
           
        )
     }
    return (
        <SafeAreaView style={styles.container}> 
            <View>
            <Text style={[styles.Text,{fontSize:36,fontWeight:"bold",marginLeft:10}]}>Market</Text>

            {RenderTabBar()}

            {RenderButtons()}

            {RenderMarketList()}
            
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        width:"100%",
        height:"100%",
        padding:20
        },
        Text:{
            color:"white"
        },
        item:{
            height:50,
            width: 350,
            backgroundColor:"red",
            margin:10,
            
        },
        image:{
            backgroundColor:"blue",
            height:"100%",
            width:"36%",
            flexDirection:"row",
            alignItems:"center"
        }
})
export  {Market};