import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Colors from '../../consts/Colors'
import Header from '../../components/HeaderDetail'

const DetailProductScreen = ({route, navigation}) => {
  const {cover, name, desc} = route.params
  return (
    <>
      <SafeAreaView style={styles.topArea}/>
      <View style={styles.container}>
        <Header 
          title='Product Detail'
          onPress={() => navigation.goBack()}
        />
        <Image 
          source={{uri: cover}}
          style={{height: 200}}
          resizeMode='cover'
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topArea: {
    backgroundColor: Colors.red,
    flex: 0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    alignSelf: 'center'
  },
  desc: {
    fontSize: 16,
    marginHorizontal: 16,
  }
})

export default DetailProductScreen