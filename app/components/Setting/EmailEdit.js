import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './ChangeSetting/ChangeStyles';

const EmailEdit = () => {
  return (
    <View style={styles.OuterView}>
      <View style={{ flexDirection: 'row', backgroundColor: '#2196f3' }}>
        <TouchableOpacity onPress={Actions.account}>
          <Image
            style={{
              width: 40,
              height: 40,
              marginTop: 14,
            }}
            source={require('./../../images/backbutton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.Text1}>
          CHANGE EMAIL
        </Text>
      </View>
      <View style={styles.View1}>
        <Text style={styles.Text2}>
          Enter your new email
        </Text>
        <TextInput
          style={styles.TextInput1} underlineColorAndroid="#2196f3"
          placeholderTextColor="#2196f3" placeholder="Enter your new email" onChangeText={() => console.log('dummy')} multiline={true}
          numberOfLines={4} editable={true}
        />
        <Text style={styles.Text5}>
          Your current email
        </Text>
        <TextInput
          style={styles.TextInput1} placeholder="donny@gmail.com" underlineColorAndroid="#2196f3"
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


module.exports = EmailEdit;
