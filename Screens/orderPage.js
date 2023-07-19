import React , {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

import {
  pizza1,pizza4} from '../constant/Image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color.js';
import { ColorSpace, color } from 'react-native-reanimated';
const { width, height } = Dimensions.get("screen");
export default class orderPage extends React.Component {
  
  render() {
    return (
    <>

      <ScrollView>
        <View style={{
          height: height,
          width: '100%',
          backgroundColor: '#fff',
         
        }}>
          <View style={{
            height: height*0.1,
            width: '100%',
            backgroundColor: Color.yellow,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Almarai-Bold',
              color: '#fff'
            }}>طلباتى</Text>
          </View>

          <View style={{
            width: '100%',
            padding: 10,
            // backgroundColor:'#000',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>

            <TouchableOpacity style={{
              height: height*0.04,
              width: width*0.2,
              backgroundColor: Color.yellow,
              borderRadius: 10,
              justifyContent:"center"
            }}>
              <Text style={{

                fontFamily: 'Almarai-Bold',
                color: '#fff',
                alignSelf: 'center'
              }}>جاريه</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              height: height*0.04,
              width: width*0.2,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#666',
              borderRadius: 10,
              justifyContent:"center"
            }}>
              <Text style={{
                // fontSize:13,
                fontFamily: 'Almarai-Bold',
                color: '#000',
                alignSelf: 'center'
              }}>مكتمله</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
             height: height*0.04,
             width: width*0.2,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#666',
              borderRadius: 10,
              justifyContent:"center"
            }}>
              <Text style={{
                // fontSize:13,
                fontFamily: 'Almarai-Bold',
                color: '#000',
                alignSelf: 'center'
              }}>ملغاه</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            height: height*0.04,
            width: width*0.2,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#666',
              borderRadius: 10,
              justifyContent:"center"
            }}>
              <Text style={{
                // fontSize:13,
                fontFamily: 'Almarai-Bold',
                color: '#000',
                alignSelf: 'center'
              }}>فواتير</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={{
            
            width:'90%',
      //  backgroundColor:'#f0f',
            alignSelf:'center',
            flexDirection:'row',
            marginTop:30,
            alignItems:'center',
            justifyContent:'space-between',

            
          }}
          onPress={() => {
            this.props.navigation.navigate("Orderdetails")

                }}>
             <View style={{
           
            alignSelf:'center',
            flexDirection:'row',
           

            
          }}>
 <Image source={pizza1} style={{
         borderRadius:10,
         height:height*0.11,
         width:width*0.2,
         marginRight:10
         
       }}></Image>


<View >
  <Text style={{
    fontSize:15,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,

  }}>

  #6259847030</Text>
  <Text style={{
    fontSize:13,
    fontFamily:'Almarai-Bold',
    color:'#666',

  }}>

  5/7/2023</Text>
</View>
</View>
<Text style={{
fontFamily:'Almarai-Bold',
fontSize:15,
color:Color.mintgreen
}}>90 ج.م

</Text>
          </TouchableOpacity>
      

          <TouchableOpacity style={{
         
            width:'90%',
            // backgroundColor:'#f0f',
            alignSelf:'center',
            flexDirection:'row',
            marginTop:30,
            alignItems:'center',
            justifyContent:'space-between',
           

            
          }}
          onPress={() => {
            this.props.navigation.navigate("Orderdetails")

                }}>
             <View style={{
          
            alignSelf:'center',
            flexDirection:'row',
           

            
          }}>
 <Image source={pizza4} style={{
         borderRadius:10,
         height:height*0.11,
         width:width*0.2,
         marginRight:10
         
       }}></Image>


<View >
  <Text style={{
    fontSize:15,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,

  }}>

  #6259847031</Text>
  <Text style={{
    fontSize:13,
    fontFamily:'Almarai-Bold',
    color:'#666',

  }}>

  5/7/2023</Text>
</View>
</View>
<Text style={{
fontFamily:'Almarai-Bold',
fontSize:15,
color:Color.mintgreen
}}>60 ج.م

</Text>
          </TouchableOpacity>
      
            

        </View>
      </ScrollView>
    </>
  );
}}