import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, button, style, ScrollView} from 'react-native';
import {Ionicons, FontAwesome, AntDesign, Entypo } from "@expo/vector-icons"




export default function home(){
    


    const Products = (props) => {return(
        <View style={{backgroundColor: "#e8e9eb", flex: 1, width: 150, borderRadius: 20, marginBottom: 180, marginLeft: 1, marginTop: 20, flexDirection: "column", marginRight: 30, position: "relative"}}>
        <Text style={{color: "#9c9c9c"}}>Pinarello Bike</Text>
        <Text style={{color: "orange", marginTop: 180, paddingLeft: 20, fontWeight: "bold",fontSize: 30}}>$<Text style={{color: "grey",fontWeight: "bold", fontSize: 30, paddingLeft: 60}}>1,700</Text></Text>
        
     
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





        
    
