import React, {useRef, useState} from 'react';
import { View, Text,Animated, FlatList,TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal,StatusBar } from 'react-native';

import Color from '../constant/Color';
import {rest,location,wallet,trash,kresby11} from '../constant/Image';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalHome from 'react-native-modalbox';
import * as Animatable from 'react-native-animatable';
 const { width, height } = Dimensions.get("screen");

const App = () => {


 
 
  const [selectedStep, setSelectedStep] = useState(0);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const start1 = () => {
  Animated.timing(progress1, {
  toValue: 100,
  duration: 3000,
  useNativeDriver: false,
  }).start();
  };
  const start2 = () => {
  Animated.timing(progress2, {
  toValue: 100,
  duration: 3000,
  useNativeDriver: false,
  }).start();
  };
  const start3 = () => {
  Animated.timing(progress3, {
  toValue: 100,
  duration: 3000,
  useNativeDriver: false,
  }).start();

  }
  



  return (
    <>
<ScrollView>
      <View style={{ flex: 1, backgroundColor: Color.White, }}>
   
     <View  
     style={{
      backgroundColor:Color.pink,
      padding:20,
  
      
     }}>

<View  
     style={{
      // backgroundColor:Color.pink,
      // padding:20,
     flexDirection:"row",
    //justifyContent:"space-between"
      
     }}>  
      <TouchableOpacity
      style={{
        alignSelf:"flex-start",
       
      }}>
<Icon 
             
             name="angle-right" size={20} color="#666"/> 
             </TouchableOpacity>

<View
style={{
 // backgroundColor:"#0f0",
  width:width/1.2,
  justifyContent:"center",
  alignItems:"center",
  alignSelf:"center"

}}>
             <Text
            style={{
              
              fontSize: 18,
           
              fontFamily: 'Almarai-Bold',
              color:Color.fontColor
              
            }}>تفاصيل الطلب</Text>
 <Text style={{
    fontSize:15,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
   
  }}>رقم الطلب : #0059435945</Text>
</View>  
</View>
<View
style={{
 // backgroundColor:"#0ff",
  width:width,
  padding:10,
  flexDirection:"row"
}}>

  
<Image
                          source={rest}
                          style={{
                            width: 65,
                            height:65,
                            resizeMode:"contain",
                            borderRadius:10
                              // backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
<View
style={{
 //backgroundColor:"#0f0",
  width:width/1.2,
 marginHorizontal:10,
  alignSelf:"center"

}}>
             <Text
            style={{
              
              fontSize: 18,
           
              fontFamily: 'Almarai-Bold',
              color:Color.fontColor
              
            }}>مطعم الطازج</Text>
 <Text style={{
    fontSize:15,
    fontFamily:'Almarai-Bold',
    color:Color.grey,
   
  }}>لاشهى المأكولات العربيه والعالميه</Text>
</View>  
   </View>
</View>

<View
  style={{
   // backgroundColor:"#00f",
 flexDirection:"row-reverse",
 justifyContent:"flex-end",
padding:15
  }}>
  <Text
  style={{
    fontSize:16,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
  }}>طنطا - شارع الجلاء -19292</Text>

<Image
                          source={location}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: "cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
  </View>

<View
style={{
 flexDirection:"row",
 justifyContent:"space-between",
 padding:15
}}>

  <View
  style={{
  //  backgroundColor:"#0ff",
 flexDirection:"row-reverse",
 justifyContent:"flex-end",
// padding:15
  }}>
  <Text
  style={{
    fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
  }}>طريقة الدفع : فيزا</Text>

<Image
                          source={wallet}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: "cover",
                           
                            //justifyContent: "center"
                          }} />

  </View>
<TouchableOpacity>
  <Image
                          source={trash}
                          style={{
                            width: 26,
                            height: 26,
                            resizeMode: "cover",
                            alignSelf:"center",
                            justifyContent: "center"
                          }} />
</TouchableOpacity>



</View>

  <View 
  style={{
  //backgroundColor:"#0f0",
  padding:15,
  marginHorizontal:15
  }}>

    <View  
    style={{
    //  backgroundColor:"#00f",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }}>

  <View
  style={{
    
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal:10,
  backgroundColor: selectedStep > 1 ? 'green' : '#f2f2f2',
  justifyContent: 'center',
  alignItems: 'center',
  }}>
   
  <Text style={{color: '#fff'}}>1</Text>   
              
  </View>
<View  
style={{
//backgroundColor:"#ff0",
width:width/3.3
}}>
  <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 17,
                      fontFamily: 'Almarai-Regular',
                      textAlign: 'center',
                     
                    }}>
                     الطلب قيد التنفيذ
                  </Text>
                  </View>

                  </View>

                  <View
                    style={{
                    width: 6,
                    height: 30,
                    backgroundColor: '#f2f2f2',
                    marginHorizontal:103
                    }}>

                    </View>

                    <View  
    style={{
    //  backgroundColor:"#00f",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }}>

  <View
  style={{
    
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal:10,
  backgroundColor: selectedStep > 2? 'green' : '#f2f2f2',
  justifyContent: 'center',
  alignItems: 'center',
  }}>
   
  <Text style={{color: '#fff'}}>2</Text>   
              
  </View>
  <View  
style={{
//backgroundColor:"#ff0",
width:width/3.3
}}>
  <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 17,
                      fontFamily: 'Almarai-Regular',
                      textAlign: 'center',
                     
                    }}>
                     تجهيز الطلب  
                  </Text>
                  </View>        
                  </View>

                  <View
                    style={{
                    width: 6,
                    height: 30,
                    backgroundColor: '#f2f2f2',
                    marginHorizontal:103
                    }}>

                    </View>

                    <View  
    style={{
    //  backgroundColor:"#00f",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }}>

  <View
  style={{
    
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal:10,
  backgroundColor: selectedStep > 0 ? 'green' : '#f2f2f2',
  justifyContent: 'center',
  alignItems: 'center',
  }}>
   
  <Text style={{color: '#fff'}}>3</Text>   
              
  </View>
  <View  
style={{
//backgroundColor:"#ff0",
width:width/3.3
}}>
  <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 17,
                      fontFamily: 'Almarai-Regular',
                      textAlign: 'center',
                      
                    }}>
                     توصيل الطلب  
                  </Text>
                  </View>     
                  </View>
  </View>

  <View
  style={{
    //backgroundColor:"#f0f",
    padding:4,
    alignItems:"center",
    justifyContent:"center"
  }}>
 <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 12,
                      fontFamily: 'Almarai-Regular',
                      textAlign: 'center',
                     
                    }}>
                    الوقت من 20 -30 دقيقة
                  </Text>
  </View>

  <View
  style={{
   // backgroundColor:"#0ff",
    marginHorizontal:10
    // alignItems:"center",
    // justifyContent:"center"
  }}>
 <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 20,
                      fontFamily: 'Almarai-Regular',
                     // textAlign: 'center',
                     marginVertical:5
                    }}>
                    ملخص الطلب
                  </Text>
  <View
  style={{
    backgroundColor:Color.lightgrey,
    padding:10,
    borderRadius:10,
  }}>
<View
style={{
 // backgroundColor:"#0ff",
  width:width,
  padding:10,
  flexDirection:"row"
}}>

  
<Image
                          source={kresby11}
                          style={{
                            width: 65,
                            height:65,
                            resizeMode:"contain",
                            borderRadius:10
                              // backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
<View
style={{
 //backgroundColor:"#0f0",
  width:width/1.2,
 marginHorizontal:10,
  alignSelf:"center"

}}>
             <Text
            style={{
              
              fontSize: 18,
           
              fontFamily: 'Almarai-Bold',
              color:Color.fontColor
              
            }}>وجبة كرسبي رول</Text>
 <Text style={{
    fontSize:13,
    fontFamily:'Almarai-Bold',
    color:Color.grey,
   
  }}>الكميه 1   100 جنيه</Text>
</View>  
   </View>
  </View>

  </View>


 
<View
style={{
  backgroundColor:"#f9faffe6",
  width:width/1.05,
  borderRadius:20,
  borderWidth:1,
  borderColor:Color.grey,
  padding:10,
  //height:height/4,
  // marginVertical:120,
   alignSelf:"center",
  justifyContent:"center"
}}>
  <View 
  style={{
    flexDirection:"row",
    justifyContent:"space-between"
  }}
  >
 <Text
 style={{
  fontSize:20,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
 }}>قيمة الشراء</Text>

<Text
 style={{
  fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.grey,
    marginHorizontal:8
 }}>30 جنيه</Text>

</View>

<View 
  style={{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:7
  }}
  >
 <Text
 style={{
  fontSize:20,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
 }}>تكلفة التوصيل</Text>

<Text
 style={{
  fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.grey,
    marginHorizontal:8
 }}>20 جنيه</Text>

</View>

<View 
  style={{
    flexDirection:"row",
    justifyContent:"space-between"
  }}
  >
 <Text
 style={{
  fontSize:20,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
 }}>المجموع الاجمالى</Text>

<Text
 style={{
  fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.grey,
    marginHorizontal:8
 }}>50 جنيه</Text>

</View>

</View>

  </View>
  </ScrollView>
    </>
  )
}

export default App;