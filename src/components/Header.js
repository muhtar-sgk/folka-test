import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../consts/Colors'

const Header = ({title}) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    height: 48,
    justifyContent: 'center'
  },
  text:  {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 24
  }
})
export default Header