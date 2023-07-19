
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomePage from './Screens/HomePage'
import orderPage from './Screens/orderPage'
import offers from './Screens/offersPage'
import editUserPage from './Screens/editUserPage'
import rest from './Screens/rest'
import pagechoosen from './Screens/pagechoosen'

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();


const RootStack = ()=> {
  return(
   <Stack.Navigator
   screenOptions={
    {
      headerShown: false, 
    }
    
  }
//  initialRouteName='Splash'
   
   >

    <Stack.Screen name="Home" component={HomePage}/>
    <Stack.Screen name="restaurant" component={rest}/>
    <Stack.Screen name="choosenfood" component={pagechoosen}/>
  
   </Stack.Navigator>
  )
}

export default function App() {

  return (
   <>
   <NavigationContainer>
   <Tab.Navigator
   screenOptions={{
    headerShown: false,
  
    tabBarStyle: {backgroundColor: '#AD40AF'},
    tabBarInactiveTintColor: '#fff',
    tabBarActiveTintColor: 'yellow',
  }}
   
   >
          <Tab.Screen 
       name='الرئيسية'
        component={RootStack}
       
        options={({route}) => ({

          tabBarStyle: {
        //    display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },

          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color}/>
          ),
        })
      
      }
       />

<Tab.Screen 
       name='طلباتي'
        component={orderPage}
       
        options={({route}) => ({

          tabBarStyle: {
        //    display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },

          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" size={size} color={color}/>
          ),
        })
      }
       />

<Tab.Screen 
       name='العروض'
        component={offers}
       
        options={({route}) => ({

          tabBarStyle: {
        //    display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },

          tabBarIcon: ({color, size}) => (
            <Icon name="percent" size={size} color={color}/>
          ),
        })}
       
       />
       
<Tab.Screen 
       name='المزيد'
        component={editUserPage}
       
        options={({route}) => ({

          tabBarStyle: {
        //    display: getTabBarVisibility(route),
            backgroundColor: '#AD40AF',
          },

          tabBarIcon: ({color, size}) => (
            <Icon name="ellipsis-h" color={color} size={size} />
          ),
        }) }
       />

  </Tab.Navigator>
   </NavigationContainer>
   </>
  );
  
}
