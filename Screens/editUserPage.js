import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image
} from 'react-native';
const { height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color.js';
import {woman} from '../constant/Image.js';
const edit_user = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Color.White}
        barStyle="dark-content"></StatusBar>
      <ScrollView>
        <View style={{
          height: 710,
          width: '100%',
          backgroundColor: '#fff',
        }}>

          <View style={{
            height: 70,
            width: '100%',
            backgroundColor: Color.yellow,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

          }}>
            <Text style={{
             color: Color.White,
             fontSize: height * 0.03,
             fontFamily: 'Almarai-Bold',
            }}>تعديل الحساب</Text>
          </View>

          <View style={{
            padding: 20
          }}>
            <Image source={woman}
              style={{
                alignSelf: 'center',
                height: height*0.22,
                width: height*0.22,
                marginVertical: height*0.012,
              }}></Image>
            <Text style={{
              fontFamily: 'Almarai-Regular',
              fontSize: 17,
              color: Color.fontColor
            }}>الإسم</Text>
           <TextInput style={{
            height: height * 0.05,
            width: '100%',
            backgroundColor: Color.White,
              shadowColor: '#000',
              elevation: 16,
              Color: Color.fontColor,
              fontSize: height * 0.025,
              borderRadius: height * 0.012,
              marginVertical: height*0.02,

              
            }}>

            </TextInput>


            <Text style={{
              fontFamily: 'Almarai-Regular',
              fontSize: height * 0.025,
              color: Color.fontColor

            }}>العنوان</Text>
           <TextInput style={{
            height: height * 0.05,
            width: '100%',
            backgroundColor: Color.White,
              shadowColor: '#000',
              elevation: 16,
              color: Color.fontColor,
              fontSize: height * 0.025,
              borderRadius: height * 0.012,
              marginVertical: height*0.02,

              
            }}>

            </TextInput>

            <Text style={{
              fontFamily: 'Almarai-Regular',
              fontSize: height * 0.025,
              color: Color.fontColor,

            }}>رقم الهاتف</Text>
            <TextInput style={{
            height: height * 0.05,
            width: '100%',
            backgroundColor: Color.White,
              shadowColor: '#000',
              elevation: 16,
              Color: Color.fontColor,
              fontSize: height * 0.025,
              borderRadius: height * 0.012,
              marginVertical: height*0.02,

              
            }}>

            </TextInput>
            <Text style={{
           fontFamily: 'Almarai-Regular',
           fontSize: height * 0.025,
           color: Color.fontColor,

            }}>البريد الإلكترونى</Text>
           <TextInput style={{
            height: height * 0.05,
            width: '100%',
            backgroundColor: Color.White,
              shadowColor: '#000',
              elevation: 16,
              Color: Color.fontColor,
              fontSize: height * 0.025,
              borderRadius: height * 0.012,
              marginVertical: height*0.02,

              
            }}>

            </TextInput>

            <TouchableOpacity style={{
                height: height*0.05,
                width: height*0.5,
                borderRadius: height * 0.012,
                marginVertical: height*0.02,
                backgroundColor: Color.yellow,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center', 
                  
              }}>
                <Text style={{
                  fontFamily: 'Almarai-Regular',
                  fontSize: height * 0.025,
                  color: Color.White,
  
                }}>حفظ</Text>
              </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
    </>
  );
};


export default edit_user;