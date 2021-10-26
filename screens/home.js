import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, style, ScrollView, navigation, SafeAreaView} from 'react-native';
import {Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons, Foundation} from "@expo/vector-icons"
import login from "./login";
import { NavigationContainer} from "@react-navigation/native";







export default function home({navigation}){


  const [heartNames, setHeartNames] = useState([
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    "heart-outline",
    ])





   const heart = (id) => {
    return <Ionicons
            
            name={heartNames[id]}
            size={24}
            color="orange"
            style={{ marginLeft: 80 }}

            
          />;
  }



  const [list, setList] = useState([
    { name: "All", key: "1" },
    { name: "Road Bike", key: "2" },
    { name: "Mountain", key: "3" },
    { name: "Urban", key: "4" },
  ]);


  const updateHeart = (id) => {
    console.log(id);
  
    let updatedList = heartNames.map((item,index) => 
      {
        if (index == id){
          if (heartNames[index] == "heart-outline"){
            return "heart";
          }
          else
          {
            return 'heart-outline';
          }
           
        }
        return item;
      });
  
    setHeartNames( updatedList); 
  }


    const PRODUCT = (props) => {
        return (
          <View
            style={{
              height: 250,
              width: 150,
              backgroundColor: "rgb(224,224,224)",
              padding: 20,
              marginTop: 30,
              borderRadius: 20,
              marginLeft: 20,
              position: "relative",
              flexDirection: "column",
            }}
          >
         
            <TouchableOpacity onPress={()=>updateHeart(
            props.id)
            }>
              {heart(props.id)}
            </TouchableOpacity>
    
        
            
              <Image
                style={{ alignItems:"center", justifyContent:"center", marginTop:10, marginBottom:10, height: 130, maxWidth: 100, borderRadius:20 }}
                source={{uri:props.image}}
                
              />
            
    
         
            <Text>{props.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "orange" }}>$</Text>
              <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
                {props.price}
              </Text>
            </View>
          </View>
        );
      };
    
    return (


        <View style={{backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 20}}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <TouchableOpacity>
                    <Ionicons name="ios-menu" size={24} color="black" />
                </TouchableOpacity>

                
                    <FontAwesome name="motorcycle" size={24} color="black" />
                

                <View style={{flexDirection: "row"}}>

                    <TouchableOpacity>
                        <AntDesign name="search1" size={24} color="black" />

                    </TouchableOpacity>


                    <TouchableOpacity>
                        <Ionicons name="notifications" size={24} color="black" />

                    </TouchableOpacity>
                </View>

            </View>


           <View >
               <Text style={{fontSize: 20, color: "grey", marginTop: 20}}>The World's  <Text style={{fontSize: 30, color: "orange", fontWeight: "bold"}}>Best Bike</Text> </Text>
               <Text style={{fontSize: 20, color: "black", marginTop: 30, fontWeight: "bold"}}>Categories</Text>

               <View>
                   
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:5}}>

                       <TouchableOpacity>
                           <Text style={styles.caText}>All</Text>
                       </TouchableOpacity>

                       <TouchableOpacity onPress={() => {navigation.navigate("cart")}}>
                           <Text style={styles.caText}>Roadbike</Text>
                       </TouchableOpacity>

                       <TouchableOpacity>
                           <Text style={styles.caText}>Mountain</Text>
                       </TouchableOpacity>

                       <TouchableOpacity>
                           <Text style={styles.caText}>Urban</Text>
                       </TouchableOpacity>

                       <TouchableOpacity>
                           <Text style={styles.caText}>Spike</Text>
                       </TouchableOpacity>

                       <TouchableOpacity>
                       <Text style={styles.caText}>Kids</Text>
                       </TouchableOpacity>

                       <TouchableOpacity>
                           <Text style={styles.caText}>Others</Text>
                       </TouchableOpacity>
                       
                   </ScrollView>
               </View>

            
           </View>



           
      <SafeAreaView style={{height:570}}>
      <ScrollView >
      <View style={{ flexDirection: "row" }}>
        
          
          <PRODUCT
            title="Deer Hunt"
            image="https://images.unsplash.com/photo-1557616907-6bea6f8991d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxiaWN5Y2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            id={0}
            price="1,900.00
            "
          />
          <PRODUCT
          id={1}
            price="1,300.00"
            title="Gentleman"
            image="https://images.unsplash.com/photo-1578509557315-37510239a203?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxiaWN5Y2xlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
          />
          
        
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={2} price="5,800.00" title="Keep Fit" image="https://images.unsplash.com/photo-1618762044398-ec1e7e048bbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" 
        />
        <PRODUCT id={3} price="8,980.00" title="Paddle Geek" image="https://images.unsplash.com/photo-1559348349-86f1f65817fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={4} price="2,300.00" title="Champagne Poetry" image="https://images.unsplash.com/photo-1593091861575-38a632b4f32a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
        <PRODUCT id={5} price="980.00" title="Papi's Home" image="https://images.unsplash.com/photo-1549216963-72c1712c1196?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={6} price="1,230.00" title="Italian Series" image="https://images.unsplash.com/photo-1510135649765-8f3a1921bb1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
        <PRODUCT id={7} price="1,450.00" title="Phantom X" image="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={8} price="1,500.00" title="Bump" image="https://images.unsplash.com/photo-1525379241313-7d584a5c09a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
        <PRODUCT id={9} price="3,200.00" title="Roller coast" image="https://images.unsplash.com/photo-1586222515300-fa1992155ece?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGJpY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" />
      </View>
      </ScrollView>
    </SafeAreaView>

            
            <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80,position:'absolute', bottom:0}}>
            <View style={{flexDirection:"row"}}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("login")
                }}>
                    <Entypo name="home" size={30} color="orange" style={{marginTop:20, marginLeft:30}} />

                </TouchableOpacity>

            <TouchableOpacity>
                 <FontAwesome name="microphone" size={30} color="white" style={{
                     marginTop:1,
                     marginLeft:120,
                     backgroundColor:"black",
                     padding:17,
                     borderRadius:27,
                     borderColor:"black",
                     borderWidth:1,
                     overflow:'hidden'
         }}/>

            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{
                navigation.navigate("cart")
            }}>
                <SimpleLineIcons name="bag" size={30} color="black" style={{marginLeft:120, marginTop:20}} />
            </TouchableOpacity>
            </View>
    
        
    </View> 
    </View>
   
           

           
           


 


     
    )






    
        };


const styles = StyleSheet.create({
    caText: {
        backgroundColor: "#ffffff",
        color: "#535557",
        borderRadius: 10,
        margin: 10,
        fontSize: 16,
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        overflow: "hidden"
        
    },






    introView:{

        marginLeft: 15,

    },

    introText: {
        fontSize: 30,
        color: "grey",
        

    },

    



});





        
    
