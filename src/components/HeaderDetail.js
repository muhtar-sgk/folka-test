import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../consts/Colors'
import Icon from 'react-native-ionicons'

const HeaderDetail = ({title, onPress}) => {
  return (
    <View style={styles.container}> 
      <Icon 
        name='arrow-round-back' 
        size={40} 
        onPress={onPress}
        style={{color: 'white'}} />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    height: 48,
    flexDirection: 'row',
    paddingHorizontal: 8
  },
  text:  {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 16,
    fontSize: 24,
    marginTop: 4
  }
})
export default HeaderDetail