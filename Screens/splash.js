import * as React from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import Color from '../constant/Color';
import {Logo,Delivery} from '../constant/Image';
export default class Splash extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={Color.yellow} barStyle="dark-content"></StatusBar>
        <View
          style={{
            flex: 1,
            backgroundColor: Color.yellow,
          }}>
          <Image
            source={Logo}
            style={{
              height: height * 0.15,
              width: height * 0.3,
              alignSelf: 'center',
              marginTop:height*0.4
            }}
          />
             <Image
            source={Delivery}
            style={{
              height: height * 0.11,
              width: height * 0.116,
              marginLeft:height*0.27,
              marginTop:height*0.26
            }}
          />
          <View style={{height:height*0.01,width:height*0.37,backgroundColor:Color.White,marginTop:height*0.01,marginLeft:height*0.26}}>

          </View>
        </View>
      </>
    );
  }
}