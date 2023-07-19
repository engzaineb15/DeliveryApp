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
} from 'react-native';
const {height} = Dimensions.get('window');
import Color from '../constant/Color';
import {Logo} from '../constant/Image';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
     
      increase: true,
      colorr: Color.White,
    
    };
  }




  handleButtonPress = () => {
   
    let increase = this.state.increase;
    let colorr = this.state.colorr;
    if (increase) {
      this.setState({    
        increase: !increase,
        colorr: Color.mintgreen,
      });
    } else {
      this.setState({
      
        increase: !increase,
        colorr: Color.White,
      });
    }
  };
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Color.White}
          barStyle="dark-content"></StatusBar>
        <View style={{flex: 1, backgroundColor: Color.White}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: height * 0.05,
                width: height * 0.07,
                backgroundColor: Color.White,
                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.03,
                marginLeft: height * 0.04,
                fontSize: height * 0.025,
                borderRadius: height * 0.01,
                justifyContent: 'center',
                backgroundColor: Color.yellow,
              }}>
              <Icon
                name={'angle-right'}
                color={'#FFF5E4'}
                size={30}
                style={{textAlign: 'center'}}
              />
            </TouchableOpacity>
            <View
              style={{
                height: height * 0.16,
                width: height * 0.29,
                backgroundColor: Color.yellow,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.02,
                marginTop: height * 0.05,
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
              التسجيل
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
              الاسم الاول
            </Text>
            <TextInput
              style={{
                height: height * 0.07,
                width: height * 0.5,
                backgroundColor: Color.White,
                paddingRight: height * 0.02,
                paddingLeft: height * 0.02,
                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.014,
                alignSelf: 'center',
                fontSize: height * 0.025,
                borderRadius: height * 0.02,
              }}
              keyboardType="default"
            />
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.03,
                fontFamily: 'Almarai-Regular',
                marginLeft: height * 0.06,
                marginTop: height * 0.04,
              }}>
              الاسم الاخير
            </Text>
            <TextInput
              style={{
                height: height * 0.07,
                width: height * 0.5,
                backgroundColor: Color.White,
                paddingRight: height * 0.02,
                paddingLeft: height * 0.02,
                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.014,
                alignSelf: 'center',
                fontSize: height * 0.025,
                borderRadius: height * 0.02,
              }}
              keyboardType="default"
            />
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.03,
                fontFamily: 'Almarai-Regular',
                marginLeft: height * 0.06,
                marginTop: height * 0.04,
              }}>
              المدينة
            </Text>
            <TextInput
              style={{
                height: height * 0.07,
                width: height * 0.5,
                backgroundColor: Color.White,
                paddingRight: height * 0.02,
                paddingLeft: height * 0.02,
                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.014,
                alignSelf: 'center',
                fontSize: height * 0.025,
                borderRadius: height * 0.02,
              }}
              keyboardType="default"
            />
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.03,
                fontFamily: 'Almarai-Regular',
                marginLeft: height * 0.06,
                marginTop: height * 0.04,
              }}>
              كلمة المرور
            </Text>
            <TextInput
              style={{
                height: height * 0.07,
                width: height * 0.5,
                backgroundColor: Color.White,
                paddingRight: height * 0.02,
                paddingLeft: height * 0.02,
                shadowColor: Color.fontColor,
                elevation: 16,
                marginTop: height * 0.014,
                alignSelf: 'center',
                fontSize: height * 0.025,
                borderRadius: height * 0.02,
              }}
              keyboardType="default"
            />
            <View style={{flexDirection: 'row', marginTop: height * 0.02}}>
              {/* <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  height: height * 0.05,
                  width: height * 0.05,
                  alignSelf: 'center',
                  fontSize: height * 0.025,
                  borderRadius: height * 0.02,
                  justifyContent: 'center',
                  backgroundColor: Color.White,
                  marginTop: height * 0.012,
                  shadowColor: Color.fontColor,
                  elevation: 8,
                  borderRadius: height * 0.015,
                  borderColor: '#ccc',
                  borderWidth: height * 0.002,
                  marginLeft: height * 0.06,
                }}></TouchableOpacity> */}




<TouchableOpacity
     style={{
      height: height * 0.05,
      width: height * 0.05,
      alignSelf: 'center',
      fontSize: height * 0.025,
      borderRadius: height * 0.02,
      justifyContent: 'center',
      backgroundColor: Color.White,
      marginTop: height * 0.012,
      shadowColor: Color.fontColor,
      elevation: 8,
      borderRadius: height * 0.015,
      borderColor: '#ccc',
      borderWidth: height * 0.002,
      marginLeft: height * 0.058,
    }}
                  activeOpacity={0.7}
                  onPress={() => {
                    this.handleButtonPress();
                  }}>
                  <Icon
                    name={'check'}
                    color={this.state.colorr}
                    size={15}
                    style={{marginHorizontal: height * 0.01}}
                  />
                </TouchableOpacity>






              <Text
                style={{
                  color: Color.fontColor,
                  fontSize: height * 0.027,
                  fontFamily: 'Almarai-Regular',
                  textAlign: 'center',
                  color: Color.mintgreen,
                  marginLeft: height * 0.015,
                  marginTop: height * 0.012,
                }}>
                هل توافق على سياسة الاستخدام
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
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
                سجل الان
              </Text>
            </TouchableOpacity>

            <View style={{height: height * 0.03}}></View>
          </ScrollView>
        </View>
      </>
    );
  }
}