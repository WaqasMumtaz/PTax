import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../../Components/TopBar'

const DetailsPage = ({ route, navigation}) => {
    const { title } = route.params;
  return (
    <>
    <TopBar title={title}/>
    <View style={styles.container}>
      <Text>DetailsPage</Text>
    
    </View>
    </>
  )
}

export default DetailsPage

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})