import { Image
  , Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../consts/Colors'

const ListItem = ({title, onPressDetail, source}) => {
  return (
    <TouchableOpacity style={styles.container}
    onPress={onPressDetail}>
      <Image 
        source={source}
        style={styles.img}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0, 
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderRadius: 10
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8
  },
  img: {
    width: 170,
    height: 150
  }
})

export default ListItem