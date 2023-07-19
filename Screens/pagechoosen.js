import * as React from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
const {height} = Dimensions.get('window');
import Color from '../constant/Color';
import {choosen_food} from '../constant/Image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 4.3,
      increase: true,
      colorr: Color.grey,
      order_num: 0,
      prize: 0,
 
    }
  }






  handleButtonPress = () => {
    let number = this.state.number;
    let increase = this.state.increase;
    let colorr = this.state.colorr;
    if (increase) {
      this.setState({
        number: number + 1,
        increase: !increase,
        colorr: Color.yellow,
      });
    } else {
      this.setState({
        number: number - 1,
        increase: !increase,
        colorr: Color.grey,
      });
    }
  };

  plus() {
    this.setState({
      order_num: this.state.order_num + 1,
      prize: this.state.prize + 70,
    });
  }
  minus() {
    if (this.state.order_num > 0) {
      this.setState({
        order_num: this.state.order_num - 1,
        prize: this.state.prize - 70,
      });
    }
  }
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Color.White}
          barStyle="dark-content"></StatusBar>
        <View style={{flex: 1, backgroundColor: Color.White}}>
          
          <ImageBackground
            style={{
              height: height * 0.50,
              width: height * 0.61,
              alignSelf: 'center',
            }}
            source={choosen_food}>
              <View

            style={{
              
             padding:10,
              flexDirection: 'row',
              height: height * 0.11,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Color.yellow,
                height: height * 0.04,
                width: height * 0.04,
                marginLeft: height * 0.05,
                borderRadius: height * 0.01,
                shadowColor: Color.fontColor,
                elevation: 16,
                justifyContent: 'center',
               // marginTop: height * 0.04,
              }}
              activeOpacity={0.7}
              onPress={() => {

                this.props.navigation.navigate("restaurant")

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
            
          </View>

            <View
              style={{
                // height: height * 0.5,
                // width: height * 0.61,
                backgroundColor: Color.White,
                borderTopRightRadius: height * 0.08,
                borderTopLeftRadius: height * 0.08,
             //   borderColor: Color.yellow,
                marginTop: height * 0.35,
             //   borderWidth: 4,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.07,
                  width: height * 0.61,
                  marginTop: height * 0.04,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    // marginTop: height * 0.01,
                    marginLeft: height * 0.06,
                    color: Color.fontColor,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.022,
                    marginHorizontal: height * 0.32,
                  }}>
                  بيج بازوكا برجر
                </Text>
                <Text
                  style={{
                    color: Color.mintgreen,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.022,
                  }}>
                  70 ج
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  height: height * 0.07,
                  width: height * 0.61,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    // marginTop: height * 0.01,
                    marginLeft: height * 0.06,
                    color: Color.fontColor,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.022,
                    marginHorizontal: height * 0.29,
                  }}>
                  مطعم بازوكا
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    this.handleButtonPress();
                  }}>
                  <Icon
                    name={'star'}
                    color={this.state.colorr}
                    size={19}
                    style={{marginHorizontal: height * 0.01}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: Color.mintgreen,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.022,
                  }}>
                  ( {this.state.number} )
                </Text>
              </View>
              <View
                style={{
                  height: height * 0.2,
                  width: height * 0.5,
                  padding:10,
                  alignSelf: 'center',
                  borderColor: Color.yellow,
                  borderWidth: 2.2,
                  borderRadius: height * 0.02,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Color.fontColor,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.022,
                    lineHeight: height * 0.04,
                  }}>
                  البرجر المشوى + البصل المكرم + الخس + صوص الباربيكيو +
                  المايونيز الكريمى + خيار مخلل
                </Text>
              </View>
              <View style={{
                flexDirection: 'row',
              width:"90%",
                padding:20,
                alignSelf:"center",
               
               //  marginTop: height * 0.033,
               //  backgroundColor:"#0f0",
                 justifyContent:"space-between"
                 
                 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: Color.yellow,
                    height: height * 0.04,
                    width: height * 0.03,
                  //  marginLeft: height * 0.044,
                    borderRadius: height * 0.01,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                    justifyContent: 'center',
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    this.plus();
                  }}>
                  <Icon
                    name={'plus'}
                    color={Color.White}
                    size={19}
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: Color.yellow,
                    height: height * 0.04,
                    width: height * 0.06,
                   // marginLeft: height * 0.01,
                    borderRadius: height * 0.01,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Color.White,
                      fontFamily: 'Almarai-Bold',
                      fontSize: height * 0.025,
                      textAlign: 'center',
                    }}>
                    {this.state.order_num}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: Color.yellow,
                    height: height * 0.04,
                    width: height * 0.03,
                   // marginLeft: height * 0.01,
                    borderRadius: height * 0.01,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                    justifyContent: 'center',
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    this.minus();
                  }}>
                  <Icon
                    name={'minus'}
                    color={Color.White}
                    size={19}
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: Color.yellow,
                    height: height * 0.04,
                    width: height * 0.070,
                    marginLeft: height * 0.04,
                    borderRadius: height * 0.01,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: Color.White,
                      fontFamily: 'Almarai-Bold',
                      fontSize: height * 0.025,
                      textAlign: 'center',
                    }}>
                    {this.state.prize}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{
                    backgroundColor: Color.yellow,
                    height: height * 0.04,
                    width: height * 0.19,
                  // marginLeft: height * 0.01,
                    borderRadius: height * 0.01,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                    justifyContent: 'center',
                  }}
                  
                  onPress={() => {
                    this.props.navigation.navigate("purchase")
        
                        }}
                  >
                  <Text
                    style={{
                      color: Color.White,
                      fontFamily: 'Almarai-Bold',
                      fontSize: height * 0.025,
                      textAlign: 'center',
                    }}>
                    اضف الى السلة
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </ImageBackground>
        </View>
      </>
    );
  }
}