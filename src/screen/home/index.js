import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useMemo, useCallback, useState } from 'react'
import ListItem from '../../components/ListItem'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getListProduct } from '../../redux/ListProductReducer'
import Separator from '../../components/Separator'
import BottomSheet from '@gorhom/bottom-sheet'
import 'react-native-gesture-handler'
import Icon from 'react-native-ionicons'
import Colors from "../../consts/Colors"

const HomeScreen = ({navigation}) => {
  const [index, setIndex] = useState(0)
  const listProduct = useSelector(state => state.listProductReducer?.data)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListProduct())
  }, [])

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['14%', '94%'], []);

  const handleSheetChanges = useCallback((index) => {
    setIndex(index)
  }, [])

  const renderMenu = () => {
    if(index === 1) {
      return (
        <View style={styles.contentContainer}>
          <View style={styles.containerMenu}>
            <View>
              <Icon name='map' size={30} color={Colors.red} style={styles.icon}/>
              <Text style={styles.textIcon}>Near Resto</Text>
            </View>
            <View>
              <Icon name='business' size={30} color={Colors.red} style={styles.icon}/>
              <Text style={styles.textIcon}>Mall</Text>
            </View>
            <View>
              <Icon name='train' size={30} color={Colors.red} style={styles.icon}/>
              <Text style={styles.textIcon}>Train</Text>
            </View>
            <View>
              <Icon name='school' size={30} color={Colors.red} style={styles.icon}/>
              <Text style={styles.textIcon}>Education</Text>
            </View>            
          </View>
          <View style={styles.containerMenu}>
            <View style={{marginLeft: 16}}>
              <Icon name='bed' size={30} color={Colors.blue} style={styles.icon}/>
              <Text style={styles.textIcon}>Hotel</Text>
            </View>
            <View style={{marginLeft: 16}}>
              <Icon name='book' size={30} color={Colors.blue} style={styles.icon}/>
              <Text style={styles.textIcon}>Library</Text>
            </View>
            <View style={{marginRight: 8}}>
              <Icon name='bus' size={30} color={Colors.blue} style={styles.icon}/>
              <Text style={styles.textIcon}>Travel</Text>
            </View>
            <View>
              <Icon name='pricetag' size={30} color={Colors.blue} style={styles.icon}/>
              <Text style={styles.textIcon}>Shopping</Text>
            </View>            
          </View>
          <View style={styles.containerMenu}>
            <View style={{marginLeft: 8}}>
              <Icon name='medkit' size={30} color={Colors.green} style={styles.icon}/>
              <Text style={styles.textIcon}>Hospital</Text>
            </View>
            <View style={{marginLeft: 16}}>
              <Icon name='settings' size={30} color={Colors.green} style={styles.icon}/>
              <Text style={styles.textIcon}>Setting</Text>
            </View>
            <View>
              <Icon name='notifications' size={30} color={Colors.green} style={styles.icon}/>
              <Text style={styles.textIcon}>Notification</Text>
            </View>
            <View style={{marginRight: 8}}>
              <Icon name='laptop' size={30} color={Colors.green} style={styles.icon}/>
              <Text style={styles.textIcon}>Gadget</Text>
            </View>            
          </View>
        </View>
      )
    } else {
      return <View />
    }
  }
    


  return (
    <>
      <SafeAreaView style={styles.top}/>
     <View style={styles.container}>
      <Header title={'List Product'}/>
      <FlatList 
        data={listProduct}
        columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
        style={{padding: 16}}
        renderItem={({item}) => (
          <ListItem 
            title={item.name}
            source={{uri: item.cover}}
            ItemSeparatorComponent={() => <Separator />}
            onPressDetail={() => navigation.navigate('DetailProduct', {
              name: item.name,
              cover: item.cover,
              desc: item.desc
            })}
          />
        )}
        horizontal={false}
        numColumns={2}
      />
    </View>
    <BottomSheet
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        {renderMenu()}
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  top: {
    flex: 0,
    backgroundColor: Colors.red
  },
  contentContainer: {
    flex: 1,
  },
  containerMenu: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', 
    alignSelf: 'center',
    marginTop: 16
  },
  textIcon: {
    fontWeight: '500',
    color: 'black',
    fontSize: 12
  },
  icon: {
    alignSelf: 'center'
  }
})

export default HomeScreen