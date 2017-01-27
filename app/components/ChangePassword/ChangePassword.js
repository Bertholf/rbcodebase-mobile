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

export default class ChangePassword extends Component{
  constructor(props){
    super(props);
    this.state = {
      current_password: '',
      new_password: '',
      repeat_new_password: '',
      current_secured: true,
      button_opacity: 0.5
    }
  }
  pressChange() {
    Alert.alert("Press Save Button")
  }
  showPassword(visibility) {
    this.setState({current_secured: visibility})
    if (visibility == false) {
        this.setState({button_opacity: 1})
    }
    else if (visibility == true) {
        this.setState({button_opacity: 0.5})
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>Password</Text>
          <TextInput placeholder="Current Password" onChangeText={current_password => this.setState({current_password})} secureTextEntry={this.state.current_secured}/>
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
          <TextInput placeholder="New Password" style={styles.new_password} onChangeText={new_password => this.setState({new_password})} secureTextEntry={this.state.new_secured}/>
          <TextInput placeholder="Repeat New Password" onChangeText={current_password => this.setState({repeat_new_password})} secureTextEntry={this.state.repeat_secured}/>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={this.pressChange} style={styles.button_save}>
              <Text style={{color: 'white'}}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
