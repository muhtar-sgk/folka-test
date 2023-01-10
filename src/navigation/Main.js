import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/home'
import SplashScreen from '../screen/splash'
import DetailScreen from '../screen/detail'
import FolkaTab from './FolkaTab'

const Stack = createNativeStackNavigator()

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Splash' 
          component={SplashScreen} 
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='FolkaTab' 
          component={FolkaTab} 
          options={{headerShown: false}}
        />
        <Stack.Screen name='Detail' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;