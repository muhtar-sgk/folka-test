import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import ListItem from '../../components/ListItem'
import styles from './styles'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getListProduct } from '../../redux/ListProductReducer'
import Separator from '../../components/Separator'

const HomeScreen = ({navigation}) => {
  const listProduct = useSelector(state => state.listProductReducer?.data)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListProduct())
  }, [])

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
            onPressDetail={() => navigation.navigate('Detail')}
          />
        )}
        horizontal={false}
        numColumns={2}
      />
    </View>
    </>
  )
}

export default HomeScreen

// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import 'react-native-gesture-handler'

// const HomeScreen = () => {
//   // ref
//   const bottomSheetRef = useRef(null);

//   // variables
//   const snapPoints = useMemo(() => ['4%', '92%'], []);

//   // callbacks
//   const handleSheetChanges = useCallback((index) => {
//     console.log('handleSheetChanges', index);
//   }, []);

//   // renders
//   return (
//     <View style={styles.container}>
//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1}
//         snapPoints={snapPoints}
//         onChange={handleSheetChanges}
//       >
//         <View style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </View>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;