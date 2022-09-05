import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Global from '../../Global'

const MyButton = ({title , onClick , styleBtn, titleStyle}) => {
 
    const btnStyle = {
        borderWidth:1,
        borderColor:Global.main_color,
        borderRadius:15,
        backgroundColor:Global.white,
        padding:10,
        paddingHorizontal:20
    }
    const _titleStyle = {
        fontWeight:'bold',
      }

  return (
    <TouchableOpacity 
    onPress={()=> onClick()}
    style={{...btnStyle, ...styleBtn}}
    >
      <Text style={{..._titleStyle, ...titleStyle}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
   
})