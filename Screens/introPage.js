import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {height} = Dimensions.get('window');
import Color from '../constant/Color';
import {Intro1, Intro2, Intro3} from '../constant/Image';
export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [Intro1, Intro2, Intro3],
      imgIndex: 0,
      address: [
        'خيارات واسعة وعروض لا تنتهى',
        'اطلب ونحن نوصلها لك على عنوانك بسهولة',
        'استمتعت بتجربة تسوق فريدة وسريعة',
      ],
      addressIndex: 0,

      word: [
        'شاشة خاصة بالعروض المميزة تجدها فى تطبيق فودفاى',
        'اضافة تفاصيل عنوانك لتصلك الطلبية بأعلى جودة',
        'استمتع بتجربة تسوق جديدة و مميزة عبر استعراض المزودين الاقرب منك',
      ],
      wordIndex: 0,
    };
  }

  plus() {
    let index = this.state.imgIndex;
    let img = this.state.img;
    index = (index + 1) % img.length;

    let indexaddress = this.state.addressIndex;
    let address = this.state.address;
    indexaddress = (indexaddress + 1) % address.length;

    let indexword = this.state.wordIndex;
    let word = this.state.word;
    indexword = (indexword + 1) % word.length;

    this.setState({
      imgIndex: index,
      addressIndex: indexaddress,
      wordIndex: indexword,
    });
  }

  minus() {
    let index = this.state.imgIndex;
    let img = this.state.img;

    index = index - 1;

    if (index < 0) {
      index += img.length;
    }

    this.setState({imgIndex: index});
  }

  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Color.White}
          barStyle="dark-content"></StatusBar>
        <View
          style={{
            flex: 1,
            backgroundColor: Color.White,
          }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              marginTop: height * 0.03,
              marginLeft: height * 0.029,
              height: height * 0.05,
              width: height * 0.07,
            }}
            onPress={() => {
              this.props.navigation.navigate("Home")
  
                  }}
            >
            <Text
              style={{
                color: Color.fontColor,
                fontSize: height * 0.025,

                fontFamily: 'Almarai-Bold',
              }}>
              تخطى
            </Text>
          </TouchableOpacity>
          <View>
            <Image
              style={{
                width: height * 3,
                height: height * 0.4,
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: height * 0.04,
              }}
              source={this.state.img[this.state.imgIndex]}
              resizeMode="contain"
            />

            <View>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: Color.mintgreen,
                  textAlign: 'center',
                  marginTop: height * 0.06,
                  fontFamily: 'Almarai-Bold',
                }}>
                {this.state.address[this.state.addressIndex]}
              </Text>
              <Text
                style={{
                  fontSize: height * 0.02,
                  color: Color.fontColor,
                  textAlign: 'center',
                  fontFamily: 'Almarai-Bold',
                }}>
                {this.state.word[this.state.wordIndex]}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {this.state.img.map((img, index) => (
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  backgroundColor:
                    this.state.imgIndex == index ? Color.yellow : '#ccc',
                  height:
                    this.state.imgIndex == index
                      ? height * 0.02
                      : height * 0.02,
                  width:
                    this.state.imgIndex == index
                      ? height * 0.09
                      : height * 0.02,
                  borderRadius: 6,
                  marginHorizontal: 8,
                  marginTop: height * 0.06,
                }}
                onPress={() => {
                  this.setState({imgIndex: index});
                }}></TouchableOpacity>
            ))}
          </View>
          {/* </ScrollView> */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.plus();
              this.props.navigation.navigate("Home")
            }}
            style={{
              height: height * 0.07,
              width: height * 0.5,
              backgroundColor: Color.White,

              shadowColor: Color.fontColor,
              elevation: 16,
              marginTop: height * 0.06,
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
              التالى
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}