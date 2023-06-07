import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  View } from 'react-native';
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


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
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
      <Tab.Screen name="Trade" component={Trade} options={{headerShown:false}} />
      <Tab.Screen name="Market" component={Market} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

export default Tabs;