import React, { Component } from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   StyleSheet,
   Alert,
   Linking,
   Image,
   Dimensions
 } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = require('./styles');
console.log("you will die",styles);

const pressChange = () => {
  Alert.alert("Press Save Button")
}

const ChangePassword = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.title}>Password</Text>
      <TextInput placeholder="Current Password" onChangeText={() => console.log("current password")} secureTextEntry={true}/>
      <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Text style={styles.link}>
            Forgot Password?
          </Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center', top: 20, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={[styles.middle_line, { marginLeft: 5 }]}/>
        <Text style={styles.middle_text}> New Password </Text>
        <View style={[styles.middle_line, { marginRight: 5 }]}/>
      </View>
      <TextInput placeholder="New Password" style={styles.new_password} onChangeText={() => console.log("current password")} secureTextEntry={true}/>
      <TextInput placeholder="Repeat New Password" onChangeText={() => console.log("Repeat new password")} secureTextEntry={true}/>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={pressChange} style={styles.button_save}>
          <Text style={{color: 'white'}}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)
export default ChangePassword;
