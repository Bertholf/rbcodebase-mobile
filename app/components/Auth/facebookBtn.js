import React, { Component } from 'react';
import {
   View,
   Image,
   Text,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';

const facebookLogo = require('../../images/facebook-square.png');
const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  btnLogo: {
    flex: 1,
  },
  textContainer: {
    flex: 4,
    backgroundColor: '#3B5998',
  },
});

export default class facebookBtn extends Component {

  render() {
    return (
      <TouchableOpacity onclick={() => this.props.loginWithFacebook()}>
        <View style={styles.btnContainer}>
          <Image
            style={styles.btnLogo}
            source={facebookLogo}
          />
          <View style={styles.textContainer}>
            <Text>Sign in with facebook</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
 }
