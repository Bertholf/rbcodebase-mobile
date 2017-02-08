import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './../../components/Setting/Style';
import { Actions } from 'react-native-router-flux';

const Setting = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={Actions.account} >
          <View style={styles.list}>
          <Image style={styles.imagesLeft} source={require('../../images/ic_account_box_black_24dp.png')} />
            <Text style={styles.text}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.privacy}>
          <View style={styles.list}>
          <Image style={styles.imagesLeft} source={require('../../images/ic_build_black_24dp.png')} />
            <Text style={styles.text}>Privacy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.email}>
          <View style={styles.list}>
          <Image style={styles.imagesLeft} source={require('../../images/ic_contact_mail_black_24dp.png')} />
            <Text style={styles.text}>Email</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.list1}>
          <TouchableOpacity>
              <Text style={styles.deactive}>Deactive</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};
export default Setting;
