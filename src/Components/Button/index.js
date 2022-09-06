import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Global from '../../Global'

const MyButton = ({title , onClick , styleBtn, titleStyle}) => {
 
    const btnStyle = {
        borderWidth:2,
        borderColor:Global.main_color,
        borderRadius:20,
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
      <Text style={{..._titleStyle, ...titleStyle}}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
   
})