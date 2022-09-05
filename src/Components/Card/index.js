import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View , Text, StyleSheet, Image} from 'react-native';
import MyButton from '../Button';
import Global from '../../Global';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCard = ({title , subTitle , uri, time}) => (
  <View style={styles.card} elevation={5}>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <View>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
      <Text>{time}</Text>
    </View>
     <View>
      <Image source={uri} style={styles.imageStyle}/>
     </View>
    <View style={{flexDirection:'row',justifyContent:'flex-end', margin:10 }}>
       <MyButton
       title={'Cancel'}
       onClick={()=> console.log('cancel')}
       />
       <View style={{margin:10}}/>
        <MyButton
       title={'Ok'}
       onClick={()=> console.log('OK')}
       styleBtn={styles.btn_style}
       titleStyle={styles.titleStyle}
       />
    </View>
    {/* <Card.Actions>
      <Button onClick>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </View>
);

export default MyCard;

const styles = StyleSheet.create({
  card:{
    borderRadius:10,
    padding:10,
    backgroundColor:Global.white,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  btn_style:{
    borderWidth:1,
    borderColor:Global.main_color,
    borderRadius:15,
    backgroundColor:Global.main_color,

  },
  titleStyle:{
    fontWeight:'bold',
    color:Global.white
  },
  imageStyle:{
    resizeMode:'cover',
    height:150,
    width:'100%'
  }
})