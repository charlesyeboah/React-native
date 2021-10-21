import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, style, ScrollView, navigation} from 'react-native';
import {Ionicons, FontAwesome, AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons} from "@expo/vector-icons"
import login from "./login";




export default function home({navigation}){
    


    const Products = (props) => {return(
        <View style={{backgroundColor: "#e8e9eb", flex: 1, width: 150, borderRadius: 20, marginBottom: 9, marginLeft: 10, marginTop: 20, flexDirection: "column", marginRight: 30, position: "relative", alignItems: "center", paddingTop: 180}}>

        <Text style={{color: "#9c9c9c", paddingLeft: 10}}>Pinarello Bike  <Text style={{color: "orange", marginTop: 180, paddingLeft: 20, fontWeight: "bold",fontSize: 30}}>$<Text style={{color: "grey",fontWeight: "bold", fontSize: 30, paddingLeft: 60}}>1,700</Text></Text>    </Text>
       
    </View>

    

    )}
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
           

           <View style={{flexDirection: "row", marginLeft: 10}}>
               <Products/>
               <Products/>


           </View>

           <View style={{flexDirection: "row", marginLeft: 10}}>
               <Products/>
               <Products/>


           </View>
           

           <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80,position:'absolute', bottom:0}}>
           <View style={{flexDirection:"row"}}>
               <TouchableOpacity onPress={() => {
                   navigation.navigate("login")
               }}>
                   <Entypo name="home" size={30} color="orange" style={{marginTop:20, marginLeft:30}} />

               </TouchableOpacity>
           <TouchableOpacity> 
               <MaterialCommunityIcons name="microphone" size={30} color="white" style={{
                   marginTop:1,
                   marginLeft:120,
                   backgroundColor:"black",
                   padding:17,
                   borderRadius:27,
                   borderColor:"black",
                   borderWidth:1,
                   overflow:'hidden',
                   paddingBottom: 10
         }}/>

           </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Cart")
            }}>
           <SimpleLineIcons name="bag" size={30} color="black" style={{marginLeft:120, marginTop:20}} />
           </TouchableOpacity>
    </View>
    
        
    </View> 
 



        </View>
    )






    
}


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





        
    
