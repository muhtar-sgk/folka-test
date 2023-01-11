import * as React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screen/home/'
import Icon from 'react-native-ionicons'
import Colors from '../consts/Colors'
import WalletScreen from '../screen/wallet'
import AccountScreen from '../screen/account'
import CartScreen from '../screen/cart'

const Tab = createBottomTabNavigator()

export default function FolkaTab() {
  
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.gray,     
        tabBarLabelStyle: {
          marginBottoms: 16,
        },
        tabBarIconStyle: {
          marginTop: 16
        },
        tabBarStyle: {      
          position: 'absolute',
          bottom: 20, 
          left: 20,
          right: 20,
          backgroundColor: '#ffffff',
          borderRadius: 50,
          ...style.shadow,
          paddingBottom: 16
        },
        headerShown: false
      }}      
      >
        <Tab.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (              
              <Icon name='home' size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name='Cart' 
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (              
              <Icon name='cart' size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name='Wallet' 
          component={WalletScreen} 
          options={{
            tabBarLabel: 'E-Wallet',
            tabBarIcon: ({color}) => (              
              <Icon name='wallet' size={30} color={color} />
            )
          }}  
        />
        <Tab.Screen 
          name='Account' 
          component={AccountScreen} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (              
              <Icon name='person' size={30} color={color} />
            )
          }}
        />
      </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0, 
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})