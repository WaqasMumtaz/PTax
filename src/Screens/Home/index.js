import React, {useState , useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView , FlatList} from 'react-native'
import Components from '../../Components'
import Global from '../../Global'

const Home = () => {
    const [authObj, setAuthObj] = useState({
        search: ''
    })

    function handleChange(name, value) {
        console.log('Name >>>>>>', name, 'Value >>>>>>', value);
        setAuthObj({
            ...authObj,
            [name]: value,
        });
    }

    const DATA = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Aafreen Khan",
        timeStamp: "12:47 PM",
        subTitle: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        subTitle: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
      }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Anci Barroco",
        timeStamp: "6:22 PM",
        subTitle: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
      }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        title: "Aniket Kumar",
        timeStamp: "8:56 PM",
        subTitle: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        title: "Kiara",
        timeStamp: "12:47 PM",
        subTitle: "I Will Call Today !",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
      }
    ]

    const renderItem = ({ item }) => (
        <Components.MyCard
         title={item.title}
         subTitle={item.subTitle}
         uri={item.avatarUrl}
        />
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
                <Components.InputField
                    placeholder="Search"
                    icon="search"
                    name={'search'}
                    handleChange={(name, value) => handleChange(name, value)}
                    value={authObj.search}
                // keyboardType={'email-address'}
                />
            </View>
            <View style={{flex:1,marginHorizontal:16}}>
            <FlatList
                data={DATA.filter(v => v.title.toLowerCase().includes(authObj.search.toLowerCase()) ||
                    v?.subTitle?.toLowerCase().includes(authObj.search.toLowerCase()))}
                renderItem={renderItem}
                keyExtractor={item => `item_${item.id}`}
            />

            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})