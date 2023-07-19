import React, { useState, useEffect } from 'react'
import { View, Text, FlatList,TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal } from 'react-native';

import Color from '../constant/Color';
import {buyer} from '../constant/Image';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalHome from 'react-native-modalbox';

 const { width, height } = Dimensions.get("screen");

 export default class Donepayment extends React.Component {


  render() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: Color.White, }}>

      <View
       style={{
   // backgroundColor:"#00f",
      // height:height/3,
    padding:40,
       width:width,
       alignItems:"center",
       justifyContent:"center"
    
       }}>
  
<Image
                          source={buyer}
                          style={{
                            width: 250,
                            height: 250,
                            resizeMode:"cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
 
      </View>

      <View 
      style={{
   // backgroundColor:"#0f0",
    //   height:height/3,
    padding:10,
       width:width,
       alignItems:"center",
       justifyContent:"center"
      
       }}>
                        
  <Text style={{
    fontSize:28,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,


  }}>تم تقديم الطلب بنجاح</Text>
  <Text style={{
    fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.grey,
   

  }}>رقم الطلب : #0059435945</Text>
      </View>

<View  
style={{
//backgroundColor:"#0f0",
marginVertical:80,
}}
>
      <TouchableOpacity
                  style={{
                   // height:height/20,
                   padding:5,
                    width: width/1.2,
                    backgroundColor: Color.White,
             //       marginRight: height * 0.39,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                   marginVertical:10,
                    alignSelf: 'center',
                    fontSize: height * 0.025,
                    borderRadius: height * 0.02,
                    justifyContent: 'center',
                    backgroundColor: Color.yellow,
                    
                  }}
                  onPress={() => {
                  
                    this.props.navigation.navigate("orderPage")
                  }}>
                  <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 22,
                      fontFamily: 'Almarai-Bold',
                      textAlign: 'center',
                      color: Color.White,
                    }}>
                    طلباتي  
                  </Text>
                </TouchableOpacity>

               <TouchableOpacity  
               style={{

               }}
               onPress={() => {
                  
                this.props.navigation.navigate("Home")
              }}
               >
         <Text
                    style={{
                      color: Color.mintgreen,
                      fontSize: 18,
                      fontFamily: 'Almarai-Bold',
                      textAlign: 'center',
                      textDecorationLine:"underline"
                      
                    }}>الي الرئيسية  
                  </Text>
               </TouchableOpacity>
               </View>

</View>

    </>
  )
}
 }