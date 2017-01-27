import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import CheckBox from './CheckBox';

const alertMessage = 'Saved';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listNotifContainer: {
    flex: 1,
  },
  textListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    height: 40,
  },
  textListNotif: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 15,
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 35,
    width: 100,
    borderRadius: 3,
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
  },
});


const EmailNotif = () =>(
      <View style={styles.container}>
        <View style={{ height: 50, backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Email Notifications</Text>
        </View>
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
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 20 }}>
            <TouchableOpacity
              style={styles.saveBtn}
              activeOpacity={0.8}
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
      </View>
    );

export default EmailNotif;
