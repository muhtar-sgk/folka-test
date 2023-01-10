// import { View, Text, FlatList, SafeAreaView } from 'react-native'
// import React from 'react'
// import ListItem from '../../components/ListItem'
// import styles from './styles'
// import Header from '../../components/Header'

// const data = 
// [
//   {
//     "id": 1,
//     "name": "Hamburger",
//     "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/250px-NCI_Visuals_Food_Hamburger.jpg",
//     "desc": "Hamburger (atau sering kali disebut dengan burger) adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombay. Sebagai sausnya, burger diberi berbagai jenis saus seperti mayones, saus tomat dan sambal serta mustard. Beberapa varian burger juga dilengkapi dengan keju, asinan, serta bahan pelengkap lain seperti sosis dan ham.",
//     "price": 25000
//   },
//   {
//     "id": 2,
//     "name": "Piza",
//     "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/250px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
//     "desc": "Piza (menurut KBBI) (atau pizza) adalah hidangan gurih dari Italia sejenis adonan bundar dan pipih, yang dipanggang di oven dan biasanya dilumuri saus tomat serta keju dengan bahan makanan tambahan lainnya yang bisa dipilih. Keju yang dipakai biasanya mozzarella atau 'keju pizza', bisa juga keju parmesan dan beberapa keju lainnya.",
//     "price": 50000
//   },
//   {
//     "id": 3,
//     "name": "Mi goreng",
//     "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mi_Goreng_GM.jpg/250px-Mi_Goreng_GM.jpg",
//     "desc": "Mi goreng berarti 'mi yang digoreng' adalah makanan yang berasal dari Indonesia yang populer dan juga digemari di Malaysia, dan Singapura. Mi goreng terbuat dari mi kuning yang digoreng dengan sedikit minyak goreng, dan ditambahkan bawang putih, bawang merah, udang serta daging ayam atau daging sapi, irisan bakso, cabai, sayuran, tomat, telur ayam, dan acar. Makanan ini sangat populer dan dapat ditemui di mana-mana di Indonesia, mulai dari pedagang pinggir jalan (kaki lima) sampai restoran mewah. Mi goreng juga dapat ditemukan di warung mamak di Malaysia dan Singapura. Versi mi instan dari mi goreng juga sangat populer, seperti Indomie Mi goreng.",
//     "price": 20000
//   },
//   {
//     "id": 4,
//     "name": "Nasi goreng",
//     "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nasi_Goreng_Sosis.jpg/250px-Nasi_Goreng_Sosis.jpg",
//     "desc": "Nasi goreng adalah sebuah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng, margarin, atau mentega. Biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya; seperti telur, ayam, dan kerupuk. Ada pula nasi goreng jenis lain yang dibuat bersama ikan asin yang juga populer di seluruh Indonesia.",
//     "price": 17000
//   }
// ]

// const HomeScreen = ({navigation}) => {
//   return (
//     <>
//       <SafeAreaView style={styles.top}/>
//      <View style={styles.container}>
//       <Header title={'List Product'}/>
//       <FlatList 
//         data={data}
//         renderItem={({item}) => (
//           <ListItem 
//             title={item.name}
//             onPressDetail={() => navigation.navigate('Detail')}
//           />
//         )}
//         horizontal={false}
//         numColumns={2}
//       />
//     </View>
//     </>
//   )
// }

// export default HomeScreen

import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler'

const HomeScreen = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['4%', '92%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default HomeScreen;