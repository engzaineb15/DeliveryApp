import React, { useState, useEffect } from 'react'
import { View, Text, FlatList,TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Modal } from 'react-native';

import Color from '../constant/Color';
import {shipping, orderdelivery,location,discount,wallet,downarrow,applepay,payment,visa} from '../constant/Image';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalHome from 'react-native-modalbox';

 const { width, height } = Dimensions.get("screen");

 export default class paymentPage extends React.Component  {

  constructor() {
    super();
    this.state = {
      itemshow1:false,
      itemshow2:false,
      modhome:false,
      save_index:0,
      itemcheck:true,
      placeinput:"",
      paymethods:[
        {
          item:visa,
          itemshow:false,
    
        },
        {
         item:payment,
          itemshow:false,
    
        },
        {
         item:applepay,
          itemshow:false,
        },
      ]
    };
  }



   checkedFun (index)  {
    let arr=paymethods
    let size = arr.length
    for(let i=0;i<size;i++){
      arr[i].itemshow=false
    }
    arr[index].itemshow=true
   // console.log(size)
   this.setState({save_index:index})
   this.setState({paymethods:arr})
   
  }


  

render() {

  return (
    <>
    
      <View style={{ flex: 1, backgroundColor: Color.White, }}>

      <View
            style={{
              backgroundColor: Color.White,
              flexDirection: 'row',
              height: height * 0.11,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Color.yellow,
                height: height * 0.04,
                width: height * 0.04,
                marginLeft: height * 0.02,
                borderRadius: height * 0.01,
                shadowColor: Color.fontColor,
                elevation: 16,
                justifyContent: 'center',
                marginTop: height * 0.04,
              }}
              activeOpacity={0.7}
              onPress={() => {

                navigation.navigate("purchase")
              }}>
              <Icon
                name={'chevron-right'}
                color={Color.White}
                size={19}
                style={{
                  textAlign: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: height * 0.13,
                color: Color.fontColor,
                fontFamily: 'Almarai-Bold',
                fontSize: 20,

                alignSelf: 'center',
              }}>
              إتمام الطلب
            </Text>
          </View>


          <View
style={{
//  backgroundColor:'#ff9f',
 width:"97%",
 flexDirection:"row",
justifyContent:"space-between",
// alignItems:"center",
//justifyContent:"center",
//marginHorizontal:10,
alignSelf:"center"
}}>


<TouchableOpacity style={{
 // width:"45%",
 backgroundColor:this.state.itemshow1?'#d3fec6':'#fbfcff',
  borderRadius:10,
  height:height/20,
  paddingHorizontal:10,
  flexDirection:"row-reverse",
 alignItems:"center",
 // justifyContent:"flex-end",
  marginVertical:15,
  opacity:0.9,


}}
onPress={()=>{

  this.setState({itemshow1:true});
  this.setState({itemshow2:false})

   
  }}>
  <View
                         style={{
                        //  width:"50%",
                        flexDirection:"row-reverse",

                         }}
                         >
  <Text style={{
    fontSize:15,
    fontFamily:'Almarai-Bold',
    color:'#000',
    marginHorizontal:8

  }}>اتراك الطلب عند الباب</Text>


<Image
                          source={orderdelivery}
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: "cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
 
  </View>
  </TouchableOpacity>

  <TouchableOpacity style={{
    backgroundColor:this.state.itemshow2?'#d3fec6':'#fbfcff',
 borderRadius:10,
 height:height/20,
 paddingHorizontal:10,
 flexDirection:"row-reverse",
alignItems:"center",
// justifyContent:"flex-end",
 marginVertical:15,
 opacity:0.9,


}}
onPress={()=>{
  
  this.setState({itemshow1:false});
  this.setState({itemshow2:true})
 
   
 
}}
>
                         
                         <View
                         style={{
                        //  width:"45%"
                        flexDirection:"row-reverse",

                         }}
                         >
  <Text style={{
    fontSize:15,
    fontFamily:'Almarai-Bold',
    color:'#000',
    marginHorizontal:8

  }}>استلام الطلب عند المتجر</Text>

  
<Image
                          source={shipping}
                          style={{
                            width: 25,
                            height: 25,
                            resizeMode: "cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />

                                       
  </View>          
  </TouchableOpacity>
  </View>
  
  <View
  style={{
   // backgroundColor:"#00f",
 flexDirection:"row-reverse",
 justifyContent:"flex-end",
 marginHorizontal:10
  }}>
  <Text
  style={{
    fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
  }}>التوصيل الي</Text>

<Image
                          source={location}
                          style={{
                            width: 23,
                            height: 23,
                            resizeMode: "cover",
                            //  backgroundColor:"#000",
                            //justifyContent: "center"
                          }} />
  </View>

 

<TextInput
                    style={{
                      
                        backgroundColor:"#fdfaeb",
                        width:width/1.05,
                        height:height/15,
                        alignSelf:"center",
                        marginVertical:15,
                        borderRadius:10,
                        alignItems:"flex-start",
                        justifyContent:"center",
                      marginHorizontal: 10,
                      color: "#000",
                    }}
                    placeholder="اكتب عنوان المنزل"
                    placeholderTextColor={Color.grey}
                    value={(this.state.placeinput + '')}
                    onChangeText={(val) => {
                     
                      this.setState({placeinput:val})
                    }}></TextInput>

 <View
  style={{
   // backgroundColor:"#00f",
 flexDirection:"row-reverse",
 justifyContent:"flex-end",
 marginHorizontal:10
  }}>
  <Text
  style={{
    fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
  }}>إضافة كوبون</Text>

<Image
                          source={discount}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: "cover",
                           
                            //justifyContent: "center"
                          }} />

                          
  </View>

<View
style={{
 // backgroundColor:"#00ff",
  flexDirection:"row",
  marginVertical:15
  //justifyContent:"center"
}}>
  <TextInput
                    style={{
                      
                     //   backgroundColor:"#fdfaeb",
                        width:width/1.5,
                        height:height/17,
                       borderColor:Color.grey,
                       borderWidth:1,
                        borderRadius:10,
                        alignItems:"flex-start",
                        justifyContent:"center",
                      marginHorizontal: 10,
                      color: "#000",
                    }}
                    placeholder="ادخل كوبون الخصم "
                    placeholderTextColor={Color.grey}
                    value={(this.state.placeinput + '')}
                    onChangeText={(val) => {
                      this.setState({placeinput:val})
                    }}></TextInput>
<TouchableOpacity
style={{
  backgroundColor:"#04929c",
  width:width/4.7,
  height:height/17,
  justifyContent:"center",
  borderRadius:15
  
}}
>
<Text
 style={{
  fontSize:17,
  fontFamily:'Almarai-Bold',
  color:Color.White,
  textAlign:"center"
  
  }}>تأكيد</Text>
</TouchableOpacity>

</View>

<View
  style={{
   // backgroundColor:"#00f",
 flexDirection:"row-reverse",
 justifyContent:"flex-end",
 marginHorizontal:10
  }}>
  <Text
  style={{
    fontSize:17,
    fontFamily:'Almarai-Bold',
    color:Color.fontColor,
    marginHorizontal:8
  }}>طريقة الدفع</Text>

<Image
                          source={wallet}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: "cover",
                           
                            //justifyContent: "center"
                          }} />

                          
  </View>

<View
style={{
 // backgroundColor:"#00ff",
  flexDirection:"row",
  marginVertical:15
  //justifyContent:"center"
}}>

                         
<TouchableOpacity
style={{
  backgroundColor: "#fff",
  borderColor:Color.grey,
  borderWidth:1,
   borderRadius:10,
   width:width/1.04,
  //height: 45,
  justifyContent:"space-between",
 flexDirection:"row",
 alignItems:"center",
  borderRadius: 10,
  padding:10,
  

}}
onPress={()=>{
 this.setState({modhome:true})
 this.setState({itemcheck:true})
}}>

<Text
            style={{
              fontSize: 17,
         
              fontFamily: 'Almarai-Bold',
              color:"#666"
              
            }}>اختر طريقة الدفع</Text>

<Icon 
             
             name="angle-down" size={20} color="#666"/> 

</TouchableOpacity>
</View>

<ModalHome
isOpen={this.state.modhome}
onRequestClose={() => {
  this.setState({modhome:true})
}}

style={{
 // height:'50%' ,
 
  backgroundColor:"#fff",
  borderRadius:10,
  padding:10,
  marginVertical:height/1.6,
  

}}

backButtonClose={true}
backdropPressToClose={true}

backdrop={true}

onClosed={()=>{
 this.setState({modhome:false})
}}>

<View
style={{
  // width:"100%",
  // height:"60%",
  // backgroundColor:"#ff3",
  // marginTop:310,
 //  paddingHorizontal:10,
 // paddingTop:5,
 
 
}}>
<Text
 style={{
  fontSize: 20,
  color: Color.mintgreen,
  fontFamily: 'Almarai-Bold',
  alignSelf:"center",
 // justifyContent:"center"
   
}}>طريقة الدفع</Text>


{this.state.itemcheck?(
  <>

{this.state.paymethods.map((item,index)=>
<>

<TouchableOpacity
onPress={()=>{
  checkedFun(index) 
  }}>
<View style={{
 // backgroundColor:"#0ff",
  width:'100%',
  paddingHorizontal:10,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
 marginVertical:10,

}}>


<Image
                          source={item.item}
                          style={{
                            width: 30,
                            height:30,
                            resizeMode:"contain",
                         //   borderRadius:10
                            //  marginHorizontal:10
                          }} />

  <View style={{
    width:17,
    height:17,
    backgroundColor:this.state.paymethods[index].itemshow?'#000':'#999',
    borderRadius:10, 
    
  }}>
   
 </View>
 </View>

{/* <View
    style={{
     // width:width,
      height:1,
      backgroundColor:Color.grey
    }}>
  </View> */}

  </TouchableOpacity>
  </>
)}
  </>
 ):null} 

</View>

<TouchableOpacity
                  style={{
                   // height:height/20,
                   padding:5,
                    width: width/1.2,
             //       marginRight: height * 0.39,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                   marginVertical:15,
                    alignSelf: 'center',
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
                    اختر  
                  </Text>
                </TouchableOpacity>

</ModalHome>


    
<View
style={{
  backgroundColor:"#f9faffe6",
  backgroundColor:"#0ff",
  width:width,
  borderTopRightRadius:15,
  borderTopLeftRadius:15,
  padding:20,
  height:height/4,
   marginVertical:120,
  // justifyContent:"space-between"
}}>
  <View 
  style={{
    flexDirection:"row",
    justifyContent:"space-between",
    
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
                    this.props.navigation.navigate("Donepayment")
        
                        }}>
                  <Text
                    style={{
                      color: Color.fontColor,
                      fontSize: 22,
                      fontFamily: 'Almarai-Regular',
                      textAlign: 'center',
                      color: Color.White,
                    }}>
                    تنفيذ الطلب 
                  </Text>
                </TouchableOpacity>
</View>





      </View>
    </>
  )
                  }
}
