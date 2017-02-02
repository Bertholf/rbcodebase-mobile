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


const EmailNotif = ( props ) => (
  <View style={styles.container1}>
    <View style={{ height: 50, backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Email Notifications</Text>
    </View>
    <View style={styles.listNotifContainer}>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone follows me</Text>
        <CheckBox value={props.followMe} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone likes my post</Text>
        <CheckBox value={props.likeMyPost} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone share my post</Text>
        <CheckBox value={props.shareMyPost} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone comments my post</Text>
        <CheckBox value={props.commentMyPost} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone likes my comment</Text>
        <CheckBox value={props.likeMyComment} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone replies to my comment</Text>
        <CheckBox value={props.repliesMyComment} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone joins my group</Text>
        <CheckBox value={props.joinMyGroup} />
      </View>
      <View style={styles.textListContainer}>
        <Text style={styles.textListNotif}>When someone likes my page</Text>
        <CheckBox value={props.likeMyPage} />
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
