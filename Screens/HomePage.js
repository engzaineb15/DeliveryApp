import * as React from 'react';
import {
  View,
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
const { height } = Dimensions.get('window');
import Color from '../constant/Color';
import {
  Kresby,
  Logo_1,
  pizza,
  Kusharry,
  Shawrma,
  pasta,
  kofta,
  falafel,
} from '../constant/Image';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      resturant: [
        {
          name: 'بازوكا',
          image: Kresby,
        },
        {
          name: 'اهل الشام',
          image: Shawrma,
        },
        {
          name: 'بيتزا بان',
          image: pizza,
        },
        {
          name: 'التحرير',
          image: Kusharry,
        },
        {
          name: 'باستا باشا',
          image: pasta,
        },
        {
          name: 'الكبابجى',
          image: kofta,
        },
        {
          name: 'ختعم',
          image: falafel,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={Color.White} barStyle="dark-content"></StatusBar>
        <View style={{ flex: 1,backgroundColor: Color.White }}>
        <View
            style={{
              // height: height * 0.11,
              // width: height * 0.61,
              padding:10,
              backgroundColor: Color.White,
              alignItems: 'center',
    
              flexDirection: 'row',
             // alignSelf: 'center',
              justifyContent:"space-between"
            }}>
            <Image
              source={Logo_1}
              style={{
                height: height * 0.06,
                width: height * 0.12,
               // marginLeft: height * 0.02,
               justifyContent:"space-between"
              }}
            />
            <Text
              style={{
                color: Color.mintgreen,
                fontSize: height * 0.024,

                fontFamily: 'Almarai-Bold',
              //  marginLeft: height * 0.07,
              }}>
              <Text
                style={{
                  color: Color.fontColor,
                  fontSize: height * 0.024,
                  fontFamily: 'Almarai-Bold',
                  //marginLeft: height * 0.06,
                }}>
                التوصيل الى
              </Text>
              <Text
                style={{
                  color: Color.fontColor,
                  fontSize: height * 0.024,
                  fontFamily: 'Almarai-Bold',
                //  marginLeft: height * 0.04,
                }}>
                {' '}
              </Text>
              المنزل
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                height: height * 0.05,
                width: height * 0.07,
                backgroundColor: Color.mintgreen,
                justifyContent: 'center',
                shadowColor: Color.fontColor,
                elevation: 16,
               // marginLeft: height * 0.11,
                fontSize: height * 0.025,
                borderRadius: height * 0.01,
              }}
              onPress={() => {
                this.props.navigation.navigate("orderPage")
    
                    }}
              >
              <Icon
                name={'shopping-cart'}
                color={'#FFF5E4'}
                size={22}
                style={{ textAlign: 'center' }}
              />
            </TouchableOpacity>
          </View>

          <View>
           
              <View
                style={{
                //  height: height * 0.14,
                padding:7,
                  alignItems: 'center',
                  flexDirection: 'row',
                // marginTop: height * 0.03,
                }}>
              



                <FlatList
                  data={this.state.resturant}
                  horizontal
                  renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                          height: height * 0.13,
                          width: height * 0.13,

                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: height * 0.01,

                        }}
                        onPress={() => {
                          this.props.navigation.navigate("restaurant")
              
                              }}>
                        <ImageBackground
                          source={item.image}
                          style={{
                            height: height * 0.13,
                            width: height * 0.13,
                            justifyContent: 'center',
                            overflow: "hidden",
                            borderRadius: height * 0.02,

                          }}>
                          <View
                            style={{

                              width: height * 0.1,
                              backgroundColor: '#000',
                              opacity: 0.6,
                              alignSelf: 'center',
                            }}>
                            <Text
                              style={{
                                color: Color.White,
                                fontSize: height * 0.024,
                                textAlign: 'center',
                                fontFamily: 'Almarai-Bold',
                              }}>
                              {item.name}
                            </Text>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: height * 0.2,
              backgroundColor: Color.White,
              width: height * 0.6,
              marginTop: height * 0.03,
            }}>
            <View>

              <View style={{ flexDirection: 'row' ,width:"40%"}}>
                <Text
                  style={{
              
                    marginTop: height * 0.015,
                    marginLeft: height * 0.023,
                    color: Color.fontColor,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.024,
                  }}>
                  مطعم بازوكا
                </Text>
                <View
                  style={{
                    height: height * 0.015,
                    width: height * 0.015,
                    backgroundColor: '#16FF00',
                    borderRadius: height * 0.01,
                   marginLeft: height * 0.02,
                    marginTop: height * 0.027,
                  }}></View>
              </View>
              <Text
                style={{
                  marginTop: height * 0.01,
                  marginLeft: height * 0.023,
                  color: Color.fontColor,
                  fontFamily: 'Almarai-Bold',
                  fontSize: height * 0.021,
                }}>
                فرايد تشيكن
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    height: height * 0.055,
                    width: height * 0.17,
                    marginTop: height * 0.022,
                    marginLeft: height * 0.011,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  activeOpacity={0.7}>
                  <Icon
                    name={'info-circle'}
                    color={Color.mintgreen}
                    size={15}
                    style={{ marginLeft: height * 0.01 }}
                  />
                  <Text
                    style={{
                      // marginTop: height * 0.01,
                      marginLeft: height * 0.01,
                      color: Color.fontColor,
                      fontFamily: 'Almarai-Bold',
                      fontSize: height * 0.019,
                    }}>
                    معلومات
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    height: height * 0.055,
                    width: height * 0.17,
                    marginTop: height * 0.022,
                    marginLeft: height * -0.04,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={'clock'}
                    color={Color.mintgreen}
                    size={15}
                    style={{ marginLeft: height * 0.01 }}
                  />
                  <Text
                    style={{
                      // marginTop: height * 0.01,
                      marginLeft: height * 0.01,
                      color: Color.fontColor,
                      fontFamily: 'Almarai-Bold',
                      fontSize: height * 0.019,
                    }}>
                    يغلق فى 10 ص
                  </Text>
                </View>

                <View
                  style={{
                    height: height * 0.055,
                    width: height * 0.17,
                    marginTop: height * 0.022,
                    marginLeft: height * 0.01,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name={'star'}
                    color={Color.mintgreen}
                    size={15}
                    style={{ marginLeft: height * 0.01 }}
                  />
                  <Text
                    style={{
                      // marginTop: height * 0.01,
                      marginLeft: height * 0.01,
                      color: Color.fontColor,
                      fontFamily: 'Almarai-Bold',
                      fontSize: height * 0.019,
                    }}>
                    4.9
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  // height: height * 0.05,
                  // width: height * 0.1,
                  padding:6,
                  backgroundColor: Color.yellow,
                  justifyContent: 'center',
                  shadowColor: Color.fontColor,
                  elevation: 16,
                  marginLeft: height * -0.04,
                //  fontSize: height * 0.025,
                  borderRadius: height * 0.01,
                  marginTop: height * 0.01,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: Color.White,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.021,
                  }}>
                  فروعنا
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // height: height * 0.06,
              // width: height * 0.61,
              padding:10,
              backgroundColor: Color.pink,
             // alignSelf: 'center',
            //  marginTop: height * 0.03,
              justifyContent: 'center',
            }}>
            <Text
              style={{
               // marginLeft: height * 0.023,
                color: Color.fontColor,
                fontFamily: 'Almarai-Bold',
                fontSize: height * 0.024,
              }}>
              اقرب فرع :<Text> </Text>
              <Text
                style={{
               //   marginLeft: height * 0.023,
                  color: Color.alertColor,
                  fontFamily: 'Almarai-Bold',
                  fontSize: height * 0.024,
                }}>
                فرع طنطا
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: Color.mintgreen,
              height: height * 0.07,
              width: height * 0.15,
              alignSelf: 'center',
              borderRadius: height * 0.02,
              marginTop: height * 0.03,
              justifyContent: 'center',
              shadowColor: Color.fontColor,
              elevation: 16,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Almarai-Bold',
                fontSize: height * 0.024,
                color: Color.White,
              }}>
              المنيو
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

