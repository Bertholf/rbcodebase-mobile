import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';
import styles from './Email Setting Style/EmailSettingStyle';

const EmailSetting = () => {
  return (
    <View style={styles.OuterView}>
      <Text style={styles.Text1}>
        EMAIL SETTING
      </Text>
      <View style={styles.View1}>
        <Text style={styles.Text2}>
            Enter your new email
        </Text>
        <TextInput style={styles.TextInput1} placeholder="Enter your new email" onChangeText={() => console.log('dummy')} />
        <Text style={styles.Text5}>
          Your current email
        </Text>
        <TextInput style={styles.TextInput2} placeholder="aaa_bbbbb@gmail.com" onChangeText={() => console.log('dummy')} />
        <Text style={styles.Text2}>
          Confirm change
        </Text>
        <TextInput style={styles.TextInput1} placeholder="Enter received code" onChangeText={() => console.log('dummy')} />
      </View>
      <View style={styles.View2}>
        <Text style={styles.Text4}>
          Save
        </Text>
      </View>
    </View>
  );
};


module.exports = EmailSetting;
