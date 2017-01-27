'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './EmailSettingStyle';

const onButtonPress = () => {
  Alert.alert('Your change is save');
};

const EmailSetting = (props) => {
    return (
      <View style={styles.OuterView}>
        <Text style={styles.Text1}>
          EMAIL SETTING
        </Text>
        <View style={styles.View1}>
          <Text style={styles.Text2}>
            Enter your new email
          </Text>
          <TextInput style={styles.TextInput1} placeholder="Enter your new email" onChangeText={() => console.log('dummy')} multiline = {true}
          numberOfLines = {4} editable={true}
          />
          <Text style={styles.Text5}>
            Your current email
          </Text>
          <TextInput style={styles.TextInput2} placeholder="aaa_bbbbb@gmail.com" onChangeText={() => console.log('dummy')} multiline = {true}
          numberOfLines = {4} editable={true}
          />
          <Text style={styles.Text2}>
            Confirm change
          </Text>
          <TextInput style={styles.TextInput1} placeholder="Enter received code" onChangeText={() => console.log('dummy')} multiline = {true}
          numberOfLines = {4} editable={true}
          />
        </View>
        <TouchableOpacity onPress={() => console.log('dummy')}>
        <View style={styles.View2}>
            <Text style={styles.Button}>
              SAVE
            </Text>          
        </View>
        </TouchableOpacity>
      </View>
    );
  }


module.exports = EmailSetting;
