import { View, Text } from 'react-native'
import React from 'react'
import Main from './src/navigation/Main'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  )
}

export default App