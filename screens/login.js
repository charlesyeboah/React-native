import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, Pressable } from 'react-native';
import {AntDesign } from "@expo/vector-icons"




export default function login({navigation}){
    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white", justifyContent: "center"}}>
            <Image style={{
                width: 200,
                height: 200,
                borderRadius: 20,
                marginBottom: 50,
                transform: [{rotate: "-40deg"}],
            }}

            source={require("../assets/bi.jpg")}
            />
            <Text style={styles.welcomeText}>Welcome to</Text>
 			<Text style={styles.bikeText}>Power Bike Shop</Text> 

             <View style={styles.buttonView}>
                 <TouchableOpacity style={styles.googleBut}>
                 <AntDesign name="google" size={24} color="black" />
                     <Text style={styles.buttonText}>Login with Gmail</Text>
                     
                
                 </TouchableOpacity>

                 <TouchableOpacity onPress={() => {navigation.navigate("home")}} style={styles.appleBut}>
                 <AntDesign name="apple1" size={24} color="white" />
                     <Text style={styles.appletext}>login with Apple</Text>
                 </TouchableOpacity>

      </View>
  

      <View style={styles.lowerView}>
        <Text style={styles.lowerText}>Not a member?</Text>
        
        
        <TouchableOpacity>
        <Text style={styles.orangeText}>Sign Up</Text> 
        </TouchableOpacity>
       
      </View>



      
        </View>


            
            
        
       
    

    );

 
};

     
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  bikeText:{
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",

  },

  welcomeText:{
    fontSize: 30,
    textAlign: "center",
 
  },

  buttonView:{
    width: "100%",
    paddingHorizontal: 20,

  },

  googleBut:{
    backgroundColor: "#D3D3D3",
    padding: 10,
    paddingHorizontal: 60 ,
    borderRadius: 10,
    marginTop: 20,
    flexDirection:"row",

    

  },

  buttonText:{
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 15,
    alignItems:"center",



  },

appleBut:{
  backgroundColor: "black",
  padding: 10,
  paddingHorizontal: 60 ,
  borderRadius: 10,
  marginTop: 20,
  flexDirection:"row",


 

  

},

appletext:{
  color: "white",
  fontSize: 20,
  textAlign: "center",
  fontWeight: "bold",
  marginLeft: 15,
  alignItems:"center",
},

lowerView:{
  flexDirection: "row",
},

lowerText:{
  marginTop: 20,
  fontSize: 18,color: "#808080",
 

 		
},

orangeText:{
  color: "#DD6E0F",
  marginTop: 20,
  fontSize: 18,
  fontWeight: "bold",

},







});
