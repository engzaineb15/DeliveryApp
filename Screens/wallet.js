import React, {useRef, useState} from 'react';
import { View, Text,Animated, FlatList,TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal,StatusBar } from 'react-native';

import Color from './constant/Color';
import {wallet2} from './constant/Image';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalHome from 'react-native-modalbox';
import * as Animatable from 'react-native-animatable';
 const { width, height } = Dimensions.get("screen");

const App = () => {


 


  return (
    <>
      <View style={{ flex:1, backgroundColor: Color.pink, }}>
   
      <View style={{ flex: 0.4, backgroundColor: Color.White,}}>
     
<View
style={{
 // backgroundColor:"#0f0",
  padding:20,
  justifyContent:"center",
  alignItems:"center"
  
}}>
<Text
 style={{
  fontSize:22,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
 }}>المحفظة</Text>

</View>
   

   
<View
       style={{
  //  backgroundColor:"#00f",
      // height:height/3,
    padding:80,
       width:width,
       alignItems:"center",
       justifyContent:"center"
    
       }}>
  
<Image
                          source={wallet2}
                          style={{
                            width: 200,
                            height: 200,
                            resizeMode:"cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
 
      </View>

       <View 
      style={{
   // backgroundColor:"#0f0",
    //   height:height/3,
   // padding:10,
       width:width,
       alignItems:"center",
       justifyContent:"center"
      
       }}>
                        
  <Text style={{
    fontSize:28,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,


  }}>رصيد محفظتك لدى دون</Text>
  <Text style={{
    fontSize:20,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    padding:10

  }}>30  ج.م</Text>
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
                    // backgroundColor: Color.White,
             //       marginRight: height * 0.39,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                   marginVertical:10,
                    alignSelf: 'center',
                    // fontSize: height * 0.025,
                    borderRadius: height * 0.02,
                    justifyContent: 'center',
                    backgroundColor: Color.yellow,
                    
                  }}>
                  <Text
                    style={{
                     
                      fontSize: 22,
                      fontFamily: 'Almarai-Bold',
                      textAlign: 'center',
                      color: Color.White,
                    }}>
                    الفواتير  
                  </Text>
                </TouchableOpacity>

               <TouchableOpacity  
               style={{

               }}
               >
         <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 17,
                      fontFamily: 'Almarai-Bold',
                      textAlign: 'center',
                      padding:10,
                      textDecorationLine:"underline"
                      
                    }}>خيارات الدفع</Text>
               </TouchableOpacity>
               </View>


               </View>
  </View>
    </>
  )
}

export default App;