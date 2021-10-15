import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, style} from 'react-native';
import {Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons"


export default function home(){
    return (
        <View style={{backgroundColor: "white", flex: 1, paddingTop: 55, paddingHorizontal: 20}}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Ionicons name="ios-menu" size={24} color="black" />
                <FontAwesome name="motorcycle" size={24} color="black" />
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="search1" size={24} color="black" />
                    <Ionicons name="notifications" size={24} color="black" />
                </View>

            </View>


           <View >
               <Text style={{fontSize: 20, color: "grey", marginTop: 20}}>The World's  <Text style={{fontSize: 30, color: "orange", fontWeight: "bold"}}>Best Bike</Text> </Text>
               <Text style={{fontSize: 20, color: "black", marginTop: 30, fontWeight: "bold"}}>Categories</Text>




               <TouchableOpacity style={{backgroundColor: "#f3f3f3", marginTop: 10, borderRadius: 10, padding: 10,marginRight: 300, }}>
                   <Text style={{ fontSize: 20, textAlign: "center", color: "orange" }}>All</Text>
                   
               </TouchableOpacity> 

               

                <TouchableOpacity style={{ backgroundColor: "#f3f3f3", marginTop: 10, borderRadius: 10, padding: 10,marginRight: 140, marginLeft: 80, marginBottom: 1000}}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: "d3d3d3" }}>Roadbike</Text>
                </TouchableOpacity>

           




               





              
                   
       
       
               
            

           </View>





        </View>
    )






    
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },



    introView:{

        marginLeft: 15,

    },

    introText: {
        fontSize: 30,
        color: "grey",
        

    }



});





        
    
