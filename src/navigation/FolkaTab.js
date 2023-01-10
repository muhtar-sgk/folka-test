import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DetailScreen from '../screen/detail'
import HomeScreen from '../screen/home/'
import Icon from 'react-native-ionicons'
import Colors from '../consts/Colors'

function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function FolkaTab() {
  
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.gray,     
        tabBarLabelStyle: {
          marginBottoms: 16,
        } ,
        tabBarIconStyle: {
          marginTop: 16
        } ,
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
          name="Home" 
          component={TestScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (              
              <Icon name='home' size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color}) => (              
              <Icon name='cart' size={30} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{
            tabBarLabel: 'E-Wallet',
            tabBarIcon: ({color}) => (              
              <Icon name='wallet' size={30} color={color} />
            )
          }}  
        />
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
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
    elevation: 5,
  }
});