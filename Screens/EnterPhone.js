import * as React from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
const {height} = Dimensions.get('window');
import Color from '../constant/Color';
import {Logo} from '../constant/Image';
// import {ScrollView} from 'react-native-gesture-handler';

import {CountryPicker} from 'react-native-country-codes-picker';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      countryCode: '+20',
      phone:" ",
      
    };
  }


  handlePickerButtonPress = item => {
    this.setState({countryCode: item.dial_code, show: false});
  }

submit(){
  let phone = this.state.phone
  
  if(phone.length != 10){
    Alert.alert("انتبه","يجب ادخال الرقم صحيحا")
  } else {   

      // navigation
  }

}

  render() {
    const {show, countryCode} = this.state;
    return (
      <>
        <StatusBar
          backgroundColor={Color.White}
          barStyle="dark-content"></StatusBar>
        <View style={{flex: 1, backgroundColor: Color.White}}>
          <ScrollView>
            <View
              style={{
                height: height * 0.16,
                width: height * 0.29,
                backgroundColor: Color.yellow,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.02,
                marginTop: height * 0.09,
                shadowColor: Color.fontColor,
                elevation: 16,
              }}>
              <Image
                source={Logo}
                style={{
                  height: height * 0.13,
                  width: height * 0.26,
                  alignSelf: 'center',
                }}
              />
            </View>
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.04,
                marginTop: height * 0.06,
                fontFamily: 'Almarai-Bold',
                marginLeft: height * 0.05,
              }}>
              اهلا وسهلا
            </Text>
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.03,
                fontFamily: 'Almarai-Regular',
                marginLeft: height * 0.05,
              }}>
              مرحبا بكم فى تطبيق فودفاى
            </Text>
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.03,
                fontFamily: 'Almarai-Regular',
                marginLeft: height * 0.06,
                marginTop: height * 0.04,
              }}>
              رقم التليفون
            </Text>
            <View
              style={{
                height: height * 0.07,
                width: height * 0.5,
                backgroundColor: Color.White,
                // paddingRight: height * 0.02,
                // paddingLeft: height * 0.02,
                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.014,
                alignSelf: 'center',
                fontSize: height * 0.025,
                borderRadius: height * 0.02,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TextInput
               onChangeText={(newvalue) => {
                this.setState({ phone: newvalue })
            }}
                style={{
                  height: height * 0.07,
                  width: height * 0.4,
                  backgroundColor: Color.White,
                  paddingRight: height * 0.02,
                  paddingLeft: height * 0.02,

                  fontSize: height * 0.025,
                  borderRadius: height * 0.02,
                }}
                keyboardType="default"
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.setState({show: true})}
                style={{
                  // width: height * 0.08,
                  // height: height * 0.06,
                  backgroundColor: Color.pink,
                  borderRadius: height * 0.02,
                  borderColor: Color.blue,

                  borderWidth: 2,

                   padding: 6,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 20,
                    textAlign: 'center',
                  }}>
                  {countryCode}
                </Text>
              </TouchableOpacity>

              <CountryPicker
                show={show}
                pickerButtonOnPress={this.handlePickerButtonPress}
              />
            </View>
            <TouchableOpacity
         onPress={()=>{
          this.submit()
         }}
              style={{
                height: height * 0.07,
                width: height * 0.5,
                backgroundColor: Color.White,

                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.04,
                alignSelf: 'center',
                fontSize: height * 0.025,
                borderRadius: height * 0.02,
                justifyContent: 'center',
                backgroundColor: Color.yellow,
              }}>
              <Text
                style={{
                  color: Color.fontColor,
                  fontSize: height * 0.03,
                  fontFamily: 'Almarai-Regular',
                  textAlign: 'center',
                  color: Color.White,
                }}>
                تسجيل الدخول
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text
                style={{
                  color: Color.fontColor,
                  fontSize: height * 0.03,
                  fontFamily: 'Almarai-Regular',
                  textAlign: 'center',
                  color: Color.mintgreen,
                  // marginLeft:height*0.08,
                  marginTop: height * 0.012,
                }}>
                ليس لديك حساب
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  height: height * 0.05,
                  alignSelf: 'center',
                  fontSize: height * 0.025,
                  borderRadius: height * 0.02,
                  justifyContent: 'center',
                  marginTop: height * 0.01,
                  // marginLeft: height * 0.01,
                }}>
                <Text
                  style={{
                    color: Color.fontColor,
                    fontSize: height * 0.027,
                    fontFamily: 'Almarai-Regular',
                    textAlign: 'center',
                    color: Color.mintgreen,
                    textDecorationLine: 'underline',
                  }}>
                  انشاء حساب جديد
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{height: height * 0.03}}></View>
          </ScrollView>
        </View>
      </>
    );
  }
}