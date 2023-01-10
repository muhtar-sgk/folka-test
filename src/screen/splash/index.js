import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Animated} from 'react-native'
import Colors from '../../consts/Colors'

const Splash = ({navigation}) => {
  const fadeAnim = new Animated.Value(0)

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false
      }
    ).start(async () => {
      navigation.reset({ index: 0, routes: [{ name: 'FolkaTab' }] })
    })
  }, [])

  return (
    <Animated.View 
      style={{flex: 1, opacity: fadeAnim}}
    >
      <View style={styles.container}>
        <Text style={styles.title}>FolkaTest</Text>
      </View>     
    </Animated.View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: Colors.red
  },
  title: {
    color: 'white', 
    fontSize: 48,
    fontWeight: 'bold' 
  }
})

export default Splash
