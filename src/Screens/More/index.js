import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState , useEffect} from 'react'
import { Divider } from 'react-native-paper';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Global from '../../Global';


const More = () => {
   const navigation = useNavigation();
  const DATA = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Revenu Detail",
    icon: 'chatbox-ellipses'
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Profile",
    icon: 'person'
    //avatarUrl: "https://www.google.com/search?q=fbr+tax+collection+images&rlz=1C1ONGR_enPK976PK976&sxsrf=ALiCzsbp0_n_n92v8yIfya4WhFIWUOPjEQ:1662404600891&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj229Xdq_75AhWpMlkFHUMMDf8Q_AUoAnoECAEQBA&biw=1280&bih=577&dpr=1.5#imgrc=by_xKEh1YSq2WM"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Licence",
    icon: "logo-usd"
    //avatarUrl: "https://www.google.com/search?q=fbr+tax+collection+images&rlz=1C1ONGR_enPK976PK976&sxsrf=ALiCzsbp0_n_n92v8yIfya4WhFIWUOPjEQ:1662404600891&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj229Xdq_75AhWpMlkFHUMMDf8Q_AUoAnoECAEQBA&biw=1280&bih=577&dpr=1.5#imgrc=4_ezFtQMlDkR1M"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Setting",
    icon: 'settings'

    // avatarUrl: "https://www.google.com/search?q=fbr+tax+collection+images&rlz=1C1ONGR_enPK976PK976&sxsrf=ALiCzsbp0_n_n92v8yIfya4WhFIWUOPjEQ:1662404600891&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj229Xdq_75AhWpMlkFHUMMDf8Q_AUoAnoECAEQBA&biw=1280&bih=577&dpr=1.5#imgrc=4_ezFtQMlDkR1M"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "About",
    icon: "information-circle"

    // avatarUrl: "https://www.google.com/search?q=fbr+tax+collection+images&rlz=1C1ONGR_enPK976PK976&sxsrf=ALiCzsbp0_n_n92v8yIfya4WhFIWUOPjEQ:1662404600891&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj229Xdq_75AhWpMlkFHUMMDf8Q_AUoAnoECAEQBA&biw=1280&bih=577&dpr=1.5#imgrc=B_pNo7CE4kUZmM"
  }
  ]

 function handleNavigate(titel){
  navigation.navigate('Detail', {title : titel});
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardList} onPress={()=> handleNavigate(item.title)}>
      <View style={{marginLeft:10}}>
        <IonicIcon name={item.icon} color={Global.main_color} size={30} />
      </View>
      <View style={{marginLeft:20}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => `item_${item.id}`}
          ItemSeparatorComponent={() => (<View style={{ borderWidth: 1.5, borderColor: Global.gray_clr }}></View>)}
        />
      </View>
    </SafeAreaView>
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Global.white,
    padding: 10,
    height: 70
  }
})