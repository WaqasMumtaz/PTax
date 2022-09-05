import React from 'react';
import { TextInput, StyleSheet, View, Platform , TouchableOpacity} from 'react-native';
import Global from './../../Global';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import IonicIcon from 'react-native-vector-icons/Ionicons';


export default function InputField({
  placeholder,
  error,
  icon,
  secureTextEntry = false,
  handleChange,
  name,
  value,
  multiple,
  editable,
  inputStyle,
  styleInputs,
  inputPlaceholderStyle,
  keyboardType,
  onPress,
  maxLength,
  disabled
}) {
  //  console.log('TextField *****>>>>>', editable);
  return (
    <View style={inputStyle ? inputStyle : styles.searchSection}>
        {placeholder === 'Search' && (
      <TouchableOpacity >
        <IonicIcon name='search' color={Global.inputFieldPlaceHolder} size={20}/>
      </TouchableOpacity>
      )}
      <TextInput
        style={[styleInputs ? styleInputs : styles.input, !multiple ? { maxHeight : Platform.OS=="ios" ? 0 : 40,minHeight:Platform.OS=="android" ? 0 : 40 } : { minHeight: 80 }]}
        placeholder={placeholder}
        onChangeText={(searchString) => handleChange(name, searchString)}
        underlineColorAndroid="transparent"
        placeholderTextColor={inputPlaceholderStyle ? 'gray' : Global.lightGray}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        value={value}
        multiple={multiple}
        noOfLines={4}
        editable={editable}
        maxLength={maxLength}
      />
      {(placeholder === 'Password' || placeholder === 'Old Password' || placeholder === 'New Password' || placeholder === 'Confirm New Password') && (
      <TouchableOpacity onPress={()=>onPress()} style={styles.passEye}>
        <Icon5 name={secureTextEntry == true ? 'eye-slash' : 'eye'} color={Global.inputFieldPlaceHolder} size={20}/>
      </TouchableOpacity>
      )}
    </View>
  );
}

let styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: Global.iconBackground,
    borderRadius: 5,
    paddingLeft: 5,
  },

  input: {
    flex: 1,
    marginTop: 5,
    paddingLeft: 5,
     borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    color: '#424242',
  },
  passEye:{
    margin: 10,
    color: Global.inputFieldPlaceHolder,
    
  },
});
