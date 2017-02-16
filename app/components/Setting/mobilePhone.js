import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   TextInput,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 6,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
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
        color: '#48BBEC'
    },
    button: {
      backgroundColor: '#2196F3',
      borderRadius: 2,
      elevation: 2,
      paddingTop: 10,
      paddingBottom: 10,
      height: 50,
      marginBottom: 40,
      marginRight: 16,
      marginLeft: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
        justifyContent: 'center',
    },
});

 export default class MobilePhone extends Component {
   render() {
     return (
           <View style={styles.container}>
             <Text style={styles.heading}>Mobile Phone</Text>
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
                     <TouchableOpacity  style={styles.button}>
                   <Text style={styles.buttonText}>Save</Text>
               </TouchableOpacity>
           </View>


       );
     }
}
