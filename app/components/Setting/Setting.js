import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, Image, TouchableOpacity, Dimensions, Button } from 'react-native';
import styles from './../../components/Setting/Style';
import { Actions } from 'react-native-router-flux';
import setting from '../../services/setting';
const { width } = Dimensions.get('window');

const nxtrow = require('./../../images/ic_keyboard_arrow_right_black_24dp.png');
const { width } = Dimensions.get('window');
const Setting = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.kotakView}>
        <TouchableOpacity onPress={Actions.account} >
          <View style={styles.list}>
            <Image style={styles.imagesLeft} source={require('../../images/ic_account_box_black_24dp.png')} />
            <Text style={styles.text}>
              Account
            </Text>
              <Image
                style={styles.icon}
                source={nxtrow}
              />
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.privacy}>
          <View style={styles.list}>
            <Image style={styles.imagesLeft} source={require('../../images/ic_build_black_24dp.png')} />
            <Text style={styles.text}>
              Privacy
            </Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.email}>
          <View style={styles.list}>
          <Image style={styles.imagesLeft} source={require('../../images/ic_contact_mail_black_24dp.png')} />
            <Text style={styles.text}>Email</Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
      </View>
        <TouchableOpacity>
          <View style={styles.list1}>
            <Text style={styles.deactive}>Deactive</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default setting;
