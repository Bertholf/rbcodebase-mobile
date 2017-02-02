import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

import CheckBox from './CheckBox';
import styles from './styles';

const alertMessage = 'Saved';

const EmailNotif = () => (
  <View>
    <View style={{ backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center', paddingBottom: 16, paddingLeft: 16, elevation: 2 }}>
      <Text style={{ fontSize: 20, color: 'white', paddingTop: 16 }}>Email Notifications</Text>
    </View>
    <ScrollView>
      <View style={styles.listNotifContainer}>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone follows me</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone likes my post</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone share my post</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone comments my post</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone likes my comment</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone replies to my comment</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone joins my group</Text>
          <CheckBox />
        </View>
        <View style={styles.textListContainer}>
          <Text style={styles.textListNotif}>When someone likes my page</Text>
          <CheckBox />
        </View>
        <View style={{ paddingBottom: 16, marginRight: 16, paddingTop: 16 }}>
          <TouchableOpacity
            style={styles.saveBtn}
            activeOpacity={0.7}
            onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
              [
                { text: 'OK', onPress: () => console.log('OK Pressed!') },
              ],
            )}
          >
            <Text style={styles.txtBtn}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </View>
);

export default EmailNotif;
