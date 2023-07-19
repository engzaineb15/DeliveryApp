import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color.js';
import {pizza3} from '../constant/Image';
const App = () => {
  return (
   <>
   <ScrollView>
   <View style={{
    height:710,
    width:'100%',
    backgroundColor:'#fff',
   }}>
   
   <View style={{
    height:70,
    width:'100%',
    backgroundColor:Color.yellow,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
   }}>
<Text style={{
  fontSize:20,
  fontFamily:'Almarai-Bold',
  color:'#fff'
}}>المفضلة</Text>
   </View>
<View style={{
 width:'90%',
 height:90,
 alignSelf:'center',
 backgroundColor:'#fff',
 shadowColor:'#000',
 elevation:16,
 borderRadius:15,
 flexDirection:'row',
 padding:5,
 marginVertical:10,
justifyContent:'space-between'

}}>

<View style={{
   
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center'
}}>
    <Image source={pizza3} style={{
         borderRadius:10,
         height:80,
         width:80,
         marginRight:10
         
       }}></Image>

 
       <View>
       <Text style={{
         fontSize:15,
         color:Color.fontColor,
         fontFamily:'Almarai-Bold',
       }}>بيتزا مارجريتا</Text>
        <Text style={{
         fontSize:13,
         color:Color.mintgreen,
         fontFamily:'Almarai-Bold',
       }}>60 ج.م</Text>
       

       </View>       
</View>


<Ionicons name="heart" size={30} color={Color.yellow} style={{
       alignSelf:'center',
       
       }} />
</View>


   </View>
   </ScrollView>
   </>
  );
};


export default App;