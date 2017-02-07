import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';

const PassEdit = () => {
  return (
    <View style={styles.OuterView}>
      <View style={styles.View1}>
        <Text style={styles.Text2}>
          Enter your new password
        </Text>
        <TextInput
          style={styles.TextInput1} underlineColorAndroid="#2196f3"
          placeholderTextColor="#2196f3" placeholder="Enter your new password" onChangeText={() => console.log('dummy')} multiline={true}
          numberOfLines={4} editable={true}
        />
        <Text style={styles.Text5}>
          Your current password
        </Text>
        <TextInput
          style={styles.TextInput1} placeholder="@ndr3w$3t!@w@n" underlineColorAndroid="#2196f3"
          placeholderTextColor="#2196f3" onChangeText={() => console.log('dummy')} multiline={true}
          numberOfLines={4} editable={false}
        />
        <Text style={styles.Text2}>
          Confirm change
        </Text>
        <TextInput
          style={styles.TextInput1} underlineColorAndroid="#2196f3"
          placeholderTextColor="#2196f3" placeholder="Enter received code" onChangeText={() => console.log('dummy')} multiline={true}
          numberOfLines={4} editable={true}
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
};


module.exports = PassEdit;
