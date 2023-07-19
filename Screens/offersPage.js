import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../constant/Color.js';
import {pasta3,pasta2,pasta1,pizza1,sweet1,sweet2,downarrow} from '../constant/Image';
import { ColorSpace, color } from 'react-native-reanimated';
const { width, height } = Dimensions.get("screen");
export default class items_to_order extends React.Component {
  constructor() {
    super();
    this.state = {
      productsArr: [

        {
          item_id: 1,
          item_name: "مكرونه بالماشروم",
          price_befor: 85,
          price_after: 75,
          item_Image:pasta3
        },
        {
          item_id: 1,
          item_name: 'مكرونه بالصلصه',
          price_befor: 70,
          price_after: 60,
          item_Image: pasta2
        },
        {
          item_id: 1,
          item_name: 'مكرونه بالجمبرى',
          price_befor: 90,
          price_after: 75,
          item_Image:pasta1
        },
        {
          item_id: 1,
          item_name: 'بيتزا مارجريتا',
          price_befor: 75,
          price_after: 60,
          item_Image:pizza1
        },
        {
          item_id: 1,
          item_name: "بيتزا نوتيلا",
          price_befor: 55,
          price_after: 50,
          item_Image:sweet2
        },
        {
          item_id: 1,
          item_name: 'كوكيز',
          price_befor: 30,
          price_after: 25,
          item_Image: sweet1
        },
      ],

    };
  }

  render() {
    return (
      <>

        <View style={{

          width: width,
          backgroundColor: '#fff',
        }}>
          <View style={{
            height: height * 0.1,
            width: '100%',
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

          }}>
            <TouchableOpacity style={{
             // height: '50%',
             // width: width * 0.1,
              // backgroundColor: '#000',
              padding:20,
              rotation: 270,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={downarrow}></Image>
            </TouchableOpacity>
            <Text style={{
              fontSize: height * 0.03,
              fontFamily: 'Almarai-Bold',
              color: Color.fontColor
            }}>مطعم فودفى</Text>

            <View style={{
              height: '100%',
              width: width * 0.1,
              // backgroundColor: '#000'
            }}>
            </View>

          </View>

          {/* اول الماب */}
          <ScrollView>
            <View style={{
              width: width,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              padding: 20,
              marginBottom: height * 0.1
              // backgroundColor:'#f0f'
            }}>


              {this.state.productsArr.map((item, index) =>
                <>
                  <View style={{
                    padding: 5,
                    width: '45%',
                    backgroundColor: '#fff',
                    borderRadius: height * 0.02,
                    marginBottom: height * 0.03,
                    shadowColor: '#000',
                    elevation: 16
                  }}>
                    <Image source={item.item_Image} style={{
                      height: height * 0.22,
                      borderRadius: height * 0.02,
                      width: '100%',
                    }}></Image>

                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',

                    }}>
                      <View>
                        <Text style={{
                          fontSize: height * 0.018,
                          fontFamily: 'Almarai-Bold',
                          color: '#000',
                        }}>{item.item_name}

                        </Text>

                        <Text style={{
                          fontSize: height * 0.018,
                          fontFamily: 'Almarai-Light',
                          color: Color.mintgreen,
                          textDecorationLine: 'line-through'
                        }}>{item.price_befor}ج.م

                        </Text>
                        <Text style={{
                          fontSize: height * 0.018,
                          fontFamily: 'Almarai-Bold',
                          color: Color.mintgreen,
                        }}>{item.price_after}ج.م

                        </Text>
                      </View>

                      <TouchableOpacity style={{
                        height: height * 0.04,
                        width: height * 0.04,
                        backgroundColor: '#fff',
                        borderRadius: height * 0.01,
                        borderWidth: 1,
                        borderColor: Color.yellow,
                        alignItems: 'center',
                        justifyContent: 'center',

                      }}>
                        <Text style={{
                          marginTop: height * -0.006,
                          fontSize: height * 0.02,
                          color: Color.yellow
                        }}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>

                  </View>
                </>
              )}

            </View>
          </ScrollView>


        </View>

      </>
    );
  };
};

