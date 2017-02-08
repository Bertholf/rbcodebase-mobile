import React from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';

const PassEdit = () => {
  return (
    <View style={styles.OuterView}>
      <ScrollView>
        <View style={styles.View1}>
          <Text style={styles.Text2}>
            Your current password
          </Text>
          <TextInput
            style={styles.TextInput1} placeholder="Enter your password" underlineColorAndroid={'rgba(0,0,0,0)'}
            placeholderTextColor={'#2196f3'} onChangeText={() => console.log('dummy')} multiline={true}
            numberOfLines={4}
          />
          <Text style={styles.Text2}>
            Enter your new password
          </Text>
          <TextInput
            style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
            placeholderTextColor={'#2196f3'} placeholder="Enter your new password" onChangeText={() => console.log('dummy')} multiline={true}
            numberOfLines={4} editable={true}
          />
          <Text style={styles.Text2}>
            Confirm change
          </Text>
          <TextInput
            style={styles.TextInput1} underlineColorAndroid={'#2196f3'}
            placeholderTextColor={'#2196f3'} placeholder="Enter received code" onChangeText={() => console.log('dummy')} multiline={true}
            numberOfLines={4} editable={true}
          />
        </View>
      </ScrollView>
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
