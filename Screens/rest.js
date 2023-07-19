import * as React from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const {height} = Dimensions.get('window');
import Color from '../constant/Color';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Kresby, kresby_1, kresby_2, kresby_3,} from '../constant/Image';
export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      Menu_data: [
        {
          id: 1,
          name: 'بازوكا جولدن لارج',
          price: '120 ج',
          image: Kresby,
          liked: true,
        },
        {
          id: 2,
          name: ' بازوكا جولدن سنابير بوكس',
          price: '160 ج',
          image: kresby_1,
          liked: true,
        },
        {
          id: 3,
          name: 'بازوكا جولدن بوكس',
          price: '210 خ',
          image: kresby_2,
          liked: true,
        },
        {
          id: 4,
          name: 'بازوكا جولدن بوكس',
          price: '210 خ',
          image: kresby_3,
          liked: true,
        },
        
       
      ],
      data: [
        {
          category_id: 1,
          category_name: 'الكل',
          category_check: true,
          category_items: [
            {
              id: 1,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 2,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 3,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 4,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_3,
              liked: true,
            },
            {
              id: 5,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 6,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 7,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 8,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_3,
              liked: true,
            },
          ],
        },
        {
          category_id: 2,
          category_name: 'وجبات عائلية',
          category_check: false,
          category_items: [
            {
              id: 1,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 2,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 3,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 4,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_3,
              liked: true,
            },
            {
              id: 5,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 6,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 7,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 8,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_3,
              liked: true,
            },
          ],
        },

        {
          category_id: 2,
          category_name: 'وجبات فردية',
          category_check: false,
          category_items: [
            {
              id: 1,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 2,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 3,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 4,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_3,
              liked: true,
            },
            {
              id: 5,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 6,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 7,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 8,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_3,
              liked: true,
            },
          ],
        },
        {
          category_id: 4,
          category_name: 'سندوتشات',
          category_check: false,
          category_items: [
            {
              id: 1,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 2,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 3,
              name: 'بازوكا جولدن بوكس',
              price: '210 ج',
              image: kresby_2,
              liked: true,
            },
            {
              id: 4,
              name: 'بازوكا جولدن بوكس',
              price: '210 ج',
              image: kresby_3,
              liked: true,
            },
            {
              id: 5,
              name: 'بازوكا جولدن لارج',
              price: '120 ج',
              image: Kresby,
              liked: true,
            },
            {
              id: 6,
              name: ' بازوكا جولدن سنابير بوكس',
              price: '160 ج',
              image: kresby_1,
              liked: true,
            },
            {
              id: 7,
              name: 'بازوكا جولدن بوكس',
              price: '210 خ',
              image: kresby_2,
              liked: true,
            },
            {
              id: 8,
              name: 'بازوكا جولدن بوكس',
              price: '210 ج',
              image: kresby_3,
              liked: true,
            },
          ],
        },
      ],
    };
  }
  choose_catogery(index) {
    let list = this.state.data;
    for (let i = 0; i < list.length; i++) {
      list[i].category_check = false;  
    }
    list[index].category_check = true;
    this.setState({data: list, Menu_data: list[index].category_items});
  }
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Color.yellow}
          barStyle="dark-content"></StatusBar>
        <View style={{flex: 1, backgroundColor: Color.White}}>

        
          <View
            style={{
              height: height * 0.1,
            //  width: height * 0.61,
             
              backgroundColor: Color.yellow,
              alignItems:"center",
              justifyContent:"center"
            }}>
            <View
              activeOpacity={0.7}
              style={{
                backgroundColor: Color.mintgreen,
                height: height * 0.07,
                width: height * 0.15,
                alignSelf: 'center',
                borderRadius: height * 0.02,
                marginTop: height * 0.09,
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
            </View>
          </View>
          <View style={{
            //  marginTop: height * 0.03,
            //  height:height/1,
          //   backgroundColor:"#0f0",
             padding:10
             
            
             }}>
            {this.state.data.length > 0 ? (
              <>
                <View style={{
                  flexDirection: 'row',
                   marginTop: height * 0.04,
               //    backgroundColor:"#0f0",
                  padding:10,
              //  height:height * 0.09
                   

                   }}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {this.state.data.map((category, category_index) => (
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: height * 0.04,
                          paddingVertical: height * 0.01,
                          marginHorizontal: height * 0.014,
                         // borderWidth: 2,
                          borderRadius: 12,
                          shadowColor: Color.fontColor,
                        //  elevation: 16,
                          backgroundColor: category.category_check
                            ? Color.mintgreen
                            : Color.blue
                        }}
                        activeOpacity={0.7}
                        onPress={() => {
                          this.choose_catogery(category_index);
                        }}>
                        <Text
                          style={{
                            fontSize: height * 0.024,
                            fontSize: height * 0.024,
                            textAlign: 'center',
                            fontFamily: 'Almarai-Bold',
                            color:"#000"
                          }}>
                          {category.category_name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                <ScrollView>
                  <View 
                  style={{
                 //   backgroundColor:"#0f0",
                    padding:10
                  }}
                  >
                  {this.state.Menu_data.map((menu, index) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        width: height * 0.61,
                         padding:5,
                       alignSelf:"center",
                        alignItems: 'center',
                        // marginTop: height * 0.03,
                        justifyContent:"center",
                      //  backgroundColor:"#0f0"
                      }}>
                      <View
                        style={{
                          height: height * 0.11,
                          backgroundColor: Color.White,
                          width: height * 0.6,
                          alignItems: 'center',
                          justifyContent:"center",
                          flexDirection: 'row',
                          marginTop: height * 0.02,
                        }}>
                        <View
                          style={{
                         ///   height: height * 0.11,
                         padding:10,
                            backgroundColor: Color.blue,
                            borderRadius:10,
                            alignSelf:"center",
                            justifyContent:"center",
                           width:"83%",
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={menu.image}
                            style={{
                              height: height * 0.08,
                              width: height * 0.1,
                             // marginLeft: height * 0.02,
                              borderRadius: height * 0.012,
                            }}
                          />





                          <View style={{width:height*0.38}}>
                            <Text
                              style={{
                                marginTop: height * 0.015,
                                marginLeft: height * 0.023,
                                color: Color.fontColor,
                                fontFamily: 'Almarai-Bold',
                                fontSize: height * 0.024,
                              }}>
                              {menu.name}
                            </Text>
                            <Text
                              style={{
                                marginTop: height * 0.001,
                                marginLeft: height * 0.023,
                                color: Color.fontColor,
                                fontFamily: 'Almarai-Bold',
                                fontSize: height * 0.021,
                              }}>
                              السعر : {menu.price}
                            </Text>
                          </View>

 
                          <View style={{
                            // height:height*0.03,
                            // width:height*0.03,
                            padding:3,
                           // backgroundColor:"#0f0",
                            marginLeft:-50
                            }}>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                              height: height * 0.04,
                              width: height * 0.06,
                              borderColor: Color.yellow,
                              borderWidth:3,
                              justifyContent: 'center',
                             
                              fontSize: height * 0.025,
                              borderRadius: height * 0.01,
                            }}
                            onPress={() => {
                              this.props.navigation.navigate("choosenfood")
                                  }}>
                            <Icon
                              name={'plus'}
                              color={Color.yellow}
                              size={18}
                              style={{textAlign: 'center'}}
                            />
                          </TouchableOpacity></View>
                        </View>
                      </View>
                    </View>
                  ))}
                  </View>
                </ScrollView>

              </>
            ) : (
              <View>
                <Image
                  source={Shawrma}
                  style={{
                    height: 300,
                    width: '40%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 120,
                  }}
                />
              </View>
            )}
          </View>
      
        </View>
      </>
    );
  }
}








