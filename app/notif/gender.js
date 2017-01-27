import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 2,
    fontSize: 40,
    fontWeight: 'bold',

  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ff5722',
    fontWeight: 'bold',
    marginLeft: 50,
    marginRight: 50,
    height: 30,
  },
  picker: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },
});
 const onButtonPress = () =>{
   Alert.alert('Please choosee gender');
 }
export default Gender = (props) => {
    return (
      <View style={{elevation: 12}}>
        <Text style={styles.container}>Gender</Text>
        <Text style={styles.text}>{'\n'}</Text>
        <View >
        <Picker selectedValue ={props.language} onValueChange = {props.updateLanguage} style={styles.picker}>
         <Picker.Item label = "Male" value = "Male" />
         <Picker.Item label = "Female" value = "Female" />
      </Picker>
    </View>
    <View style={{marginLeft:100, marginRight: 100 }}>
      <Text>{'\n'}</Text>
      <Button onPress={onButtonPress}
        title="   OK    "  />
    </View>
  </View>
   );
 }
