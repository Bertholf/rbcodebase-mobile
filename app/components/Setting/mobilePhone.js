import React, { Component } from 'react';
import {
   Text,
   View,
   TextInput,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
    marginTop: 10,
    height: 40,
  },
  heading: {
    fontSize: 30,
    margin: 10,
    marginTop: 50,
  },
  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 0,
    color: '#48BBEC',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default class MobilePhone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}></Text>
        <View style={styles.textinputWrapperStyle}>
          <TextInput
            placeholder="Old Phone Number"
            placeholderTextColor="silver"
            selectionColor="silver"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.textinputStyle}
            />
        </View>
        <View style={styles.textinputWrapperStyle}>
          <TextInput
            placeholder=" New Phone Number"
            placeholderTextColor="silver"
            selectionColor="silver"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.textinputStyle}
            />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
       );
     }
}
