import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import DetailScreen from '../screen/detail';

function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function FolkaTab() {
  
  return (
      <Tab.Navigator
      screenOptions={{          // This gives us the ability to add addtional
        tabBarShowLabel: false,       // options when we create the bottom tab
        tabBarStyle: {               // most importantly the style component
          position: 'absolute',
          bottom: 25, 
          left: 20,
          right: 20,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          ...style.shadow,
          paddingBottom: 5
        }
      }}      
      >
        <Tab.Screen name="Home" component={TestScreen}/>
        <Tab.Screen name="Homes"
          options={{
            tabBarStyle: {
              width: 10
            },
            tabBarButton: () => <HomeScreen />
          }} 
          component={DetailScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0, 
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});