import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({title, onPressDetail}) => {
  return (
    <TouchableOpacity onPress={onPressDetail}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 8
  }
})

export default ListItem