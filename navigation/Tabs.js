import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import {  View ,TouchableOpacity,Modal,StyleSheet} from 'react-native';
import {Home}  from '../components/Screens/Home';
import {Portfolio}  from '../components/Screens/Portfolio';
import { Trade } from '../components/Screens/Trade';
import { Market } from '../components/Screens/Market';
import { Profile } from '../components/Screens/Profile';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {IconTextButton} from '../components/buttons/IconTextButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs({navigation}) {

  const [isVisible,setIsVisible] = useState(false);


    function SetModal(){
        setIsVisible(true);
    }
    function closeModal(){
        setIsVisible(false);
    }

  return (
    <View style={{flex:1}}>
    <Tab.Navigator
    screenOptions={ ({route}) =>({
        tabBarIcon:({focused,color,size}) =>{

            let screenName = route.name;
            

            if(screenName==="Home"){
                return <AntDesign name="home" size={24} color="white" />
            }
            else if(screenName==="Portfolio"){
                return <Ionicons name="briefcase-outline" size={24} color="white" />
            }
            else if(screenName==="Trade"){
                
                return  <View style={{
                    display: "flex",
                     transform: [{ rotate: "90deg"}],  }}>
                      <FontAwesome name="exchange" size={24} color="white" />
                      
                      </View>
            }
            else if(screenName==="Market"){
                return <SimpleLineIcons name="graph" size={24} color="white" />
            }
            else if(screenName==="Profile"){
                return <Feather name="user" size={24} color="white" />
            }
        },
        
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              paddingBottom: 8,
              fontSize: 12
            },
            tabBarStyle:{
                height:100,
                paddingTop:15,
                paddingBottom:15,
                backgroundColor:"black",
            }
        

    })
    }

    >
        
      <Tab.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Tab.Screen name="Portfolio" component={Portfolio} options={{headerShown:false}}/>
      <Tab.Screen name="Trade" component={Home} options={{headerShown:false}} 
           listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            SetModal();
          },
        })}
      />
      <Tab.Screen name="Market" component={Market} options={{headerShown:false}}/>
      {/* <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/> */}
    </Tab.Navigator>
    {/* Tab Navigator ends here and Modal Component starts */}

      <Modal visible={isVisible} transparent  >
      <View style={styles.ModalContainer} >
       <View style={styles.ModalStyle}>

       
       <View style={{ height:60, margin:10}}><IconTextButton label={"Transfer"} icon={<Feather name="send" size={18} color="black"/>}  clickFunction={()=>closeModal()} /></View>
       <View style={{height:60, margin:10}}><IconTextButton label={"Withdraw"} icon={<FontAwesome5 name="arrow-circle-down" size={18} color="black" />}  clickFunction={()=>closeModal()}/></View>

       <View style={{alignItems:"center",marginTop:30}}>
        <TouchableOpacity onPress={()=>closeModal()}>
        <EvilIcons name="close" size={36} color="white" />
        </TouchableOpacity>
        </View>


      </View>
       </View>
      </Modal>

      </View>
  );
}


const styles = StyleSheet.create({
  ModalContainer:{
    flex:1,
    justifyContent:"flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  ModalStyle:{
      display:"flex",
      backgroundColor:"#282528",
      height:260,
      padding:10,
  },
  buttons:{
      display:"flex",
      flex:0.5
  }
});

export default Tabs;