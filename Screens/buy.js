import * as React from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
import Color from '../constant/Color';
import {trash, kresby_3} from '../constant/Image';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Bill extends React.Component {
  constructor() {
    super();
    this.state = {
      order: [
        {
          name: ' بيج بازوكا برجر',
          image: kresby_3,
          price: ' السعر : 70 ج',
        },
      ],
    };
  }

  delete(index) {
    let list = this.state.order;
    list.splice(index, 1);
    this.setState({order: list});
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
          <View
            style={{
              backgroundColor: Color.white,
              flexDirection: 'row',
              height: height * 0.11,
              padding: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Color.yellow,
                height: height * 0.04,
                width: width * 0.1,
                marginLeft: height * 0.02,
                borderRadius: height * 0.01,
                shadowColor: Color.fontColor,
                elevation: 16,
                justifyContent: 'center',
                marginTop: height * 0.02,
              }}
              activeOpacity={0.7}
              onPress={() => {}}>
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
                marginLeft: height * 0.1,
                color: Color.fontColor,
                fontFamily: 'Almarai-Bold',
                fontSize: height * 0.022,

                alignSelf: 'center',
              }}>
              سلة الشراء
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  marginLeft: height * 0.1,
                  color: Color.mintgreen,
                  fontFamily: 'Almarai-Bold',
                  fontSize: height * 0.022,
                  marginTop: height * 0.022,
                  alignSelf: 'center',
                }}>
                تريد مساعدة ؟
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: Color.White,
              flexDirection: 'row',
            //  height: height * 0.11,
            padding:6
             
            }}>
            <Text
              style={{
                // height: height * 0.05,
                // width: width * 0.4,
                marginLeft: height * 0.03,
                color:Color.fontColor,
                fontFamily: 'Almarai-Bold',
                fontSize: height * 0.024,
                justifyContent: 'center',
              //  marginTop: height * 0.04,
              }}>
              مطعم بازوكا
            </Text>
          </View>

          <FlatList
            data={this.state.order}
            
            renderItem={({item, index}) => (
              <View
                style={{
                 // height: height * 0.11,
                 padding: 10,
                  backgroundColor: Color.White,
                  
               //   width: width * 1,
                 // alignItems: 'center',
                //  flexDirection: 'row',
                //  marginTop: height * 0.02,
                 justifyContent:"space-between"
                }}>
                <View
                  style={{
                   // height: height * 0.11,
                    backgroundColor: Color.blue,
                    borderRadius:10,
                    padding:8,
                 //   width: width * 0.7,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent:"space-between"
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      height: height * 0.08,
                      width: width * 0.17,
                    //  marginLeft: height * 0.02,
                      borderRadius: height * 0.012,
                    }}
                  />

                  <View style={{
                 //   width: width * 0.5
                    }}>
                    <Text
                      style={{
                       marginLeft: height * -0.1,
                        color: Color.fontColor,
                        fontFamily: 'Almarai-Bold',
                        fontSize: height * 0.024,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        marginTop: height * 0.001,
                        marginLeft: height * -0.1,
                        color: Color.fontColor,
                        fontFamily: 'Almarai-Bold',
                        fontSize: height * 0.021,
                      }}>
                      {item.price}
                    </Text>
                  </View>

                  <View
                    style={{
                      // height: height * 0.07,
                      // width: width * 0.25,
                      // marginLeft: height * -0.04,
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                      //  height: height * 0.04,
                       // width: width * 0.3,
                       padding:10,

                        justifyContent: 'center',

                       // fontSize: height * 0.025,

                       // marginTop: height * 0.014,
                      //  paddingRight: height * 0.03,
                      }}>
                      <Icon
                        name={'edit'}
                        color={Color.fontColor}
                        size={20}
                        style={{textAlign: 'center'}}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        this.delete(index);
                      }}
                      style={{
                        // marginLeft: height * 0.26,
                        // borderRadius: height * 0.01,
                        // marginLeft: height * -0.05,
                        justifyContent: 'center',
                      }}
                      activeOpacity={0.7}>
                      <Image
                        style={{
                          height: height * 0.05,
                          width: height * 0.05
                        }}
                        source={trash}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />

          <View style={{
             height: height * 0.2,
                backgroundColor: Color.blue,
              //  width: height * 0.61,
                // flexDirection: 'row',
                padding: 10,
                // backgroundColor:"#0f0"
              }}>
            <View
              style={{
                // height: height * 0.22,
                // backgroundColor: Color.blue,
                // width: height * 0.61,
                flexDirection: 'row',
                padding: 5,
             
              }}>
              <View
                style={{
                  width: height * 0.48,
                  flexDirection: 'row',
                 
                }}>
                <Text
                  style={{
                    // marginTop: height * 0.001,
                    // marginLeft: height * 0.023,
                    color: Color.fontColor,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.024,
                  }}>
                  قيمة الشراء
                </Text>
                <Text
                  style={{
                    marginTop: height * 0.003,
                    marginLeft: height * 0.32,
                    color: Color.fontColor,
                    fontFamily: 'Almarai-Bold',
                    fontSize: height * 0.024,
                  }}>
                  70 ج
                </Text>
              </View>
      
            </View>




                    
            {/* <View style={{height: height * 0.03, width: height * 0.03}}> */}
                <TouchableOpacity
                  style={{
                    height: height * 0.06,
                    width: width * 0.9,
                    backgroundColor: Color.White,
                  //  marginRight: height * 0.05,
                    shadowColor: Color.fontColor,
                    elevation: 16,
                    marginTop: height * 0.035,
                    alignSelf: 'center',
                    fontSize: height * 0.025,
                    borderRadius: height * 0.02,
                    justifyContent: 'center',
                    backgroundColor: Color.yellow,
                  }}
                  onPress={() => {
  
                    this.props.navigation.navigate("paymentPage")
        
                        }}
                  >
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
          {/* </View> */}
        </View>
      </>
    );
  }
}
