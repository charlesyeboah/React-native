import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
 SafeAreaView,
 ScrollView,
 StatusBar
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import home from "./home";

export default function cart({navigation}){

    const CartItem = (props) => {
        
    return (
            <View style={{flexDirection:'row'}}>

            <Image 
            style={{
                padding:40,
                backgroundColor:'rgb(224,224,224)',
                width:100, 
                height:100, 
                marginLeft: 30,
                marginTop:40,
                borderRadius:10
                }}

            source={{uri:props.image}}
            />

            
            <View style={{flexDirection:'column'}}>

            
            <Text style={{marginTop:50, marginLeft:30, fontWeight:'bold', fontSize:20}}>{props.title}</Text>
            <Text style={{marginTop:10, marginLeft:30}}>{props.description}</Text>
        <Text style={{marginTop:10, marginLeft:30, color:"orange"}}>$<Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>{props.price}</Text></Text>
                
            </View>

            <View style={{flexDirection:'column'}}>
            <EvilIcons name="trash" size={24} color="rgb(204,102,0)"  style={{marginTop:50, marginLeft:70}}/>

            <View style={{flexDirection:"row"}}>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{marginTop:30}} />
            </TouchableOpacity>
            <Text style={{marginTop:30, marginLeft:20, fontWeight:'bold', fontSize:20}}>1</Text>
            <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(204,102,0)" style={{marginTop:29, marginLeft:20}} />
            </TouchableOpacity>
            </View>
        </View>
        </View>
       

      
    )}

    const {goBack} = navigation;
    return (
        
        
        <View style={{fflex:1}}>
    <View style={{marginTop:70, marginLeft:20, flexDirection:'row'}}>
        <TouchableOpacity onPress= {()=>goBack()
        }>
        <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <View style={{flexDirection:'column'}}>
        <Text style={{
            marginLeft:120,
            fontSize:24,
            fontWeight:"bold"
        }}>
            Cart List
        </Text>
        <Text style={{marginLeft:130}}>(3 items)</Text>
       
        </View>

        
         
    </View>

    <View>
    <CartItem description="Mountain Bike" price="5,800.00" title="Keep Fit" image="https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"/>
    <CartItem description="Urban Bike" price="3,200.00" title="Roller Coast" image="https://images.unsplash.com/photo-1586222515300-fa1992155ece?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"/>
    <CartItem description="Road Bike" price="8,980.00" title="Paddle Geek" image ="https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />

    </View>

   <View style={{margin:7, borderRadius:30, padding:90, backgroundColor:"rgb(160,160,160)", alignItems:"center",justifyContent:"space-between", flexDirection:"row"}}>
   <Text style={{justifyContent:"space-between", fontSize:20, color:"grey"}}>Sub-Total </Text>
   <Text style={{justifyContent:"space-between",  fontSize:25}}>$17,980.00</Text>
   </View>
   
       
        <TouchableOpacity>
        <View style={{backgroundColor:"rgb(204,102,0)", padding:20, margin:5, borderRadius:15}}>
        <Text style={{marginTop:0, fontWeight:'bold', color:"white", textAlign:'center', fontSize:17}}>Proceed to Checkout</Text>
        
        </View>
        </TouchableOpacity>

        <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80, bottom:0}}>
    <View style={{flexDirection:"row"}}>

    <TouchableOpacity onPress={()=>{
        navigation.navigate("Home")
    }}>
    <Ionicons name="home-outline" size={30} color="black" style={{marginTop:20, marginLeft:30}} />
</TouchableOpacity>
        <FontAwesome name="microphone" size={30} color="white" style={{
        marginBottom:0,
         marginLeft:120,
         backgroundColor:"black",
         padding:17,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity>
         <FontAwesome5 name="shopping-bag" size={24} color="orange"  style={{marginLeft:120, marginTop:20}} />
        </TouchableOpacity>
    </View>
    
        
    </View> 
    
    
    </View>
    )
}