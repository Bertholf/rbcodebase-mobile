import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  alertMessage,
} from 'react-native';

const { height, width } = Dimensions.get('window');
const backrow = require('./../../images/arrow.png');
const nxtrow = require('./../../images/ic_keyboard_arrow_right_black_24dp.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  textHeader: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: 'Arial',
    color: '#fff',
    fontWeight: 'bold',
  },
  imgMenu: {
    width: 30,
    height: 30,
    top: 15,
    left: 10,
  },
  title: {
    fontSize: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  name: {
    fontSize: 20,
    marginBottom: 3,
    color: '#000',
  },
  icon: {
    width: 25,
    height: 25,
  },
  setlist: {
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.3,
    margin: 5,
  },
});

const AccountSetting = () => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Name
        </Text>
        <TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.name}>
              Name
            </Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.setlist} />
      <View>
        <Text style={styles.title}>
          Email
        </Text>
        <TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.name}>
              Email
            </Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.setlist} />
      <View>
        <Text style={styles.title}>
          Change password
        </Text>
        <TouchableOpacity
          onPress={() => Alert.alert(
            'Change Password',
             alertMessage,
             [
               { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
               { text: 'OK', onPress: () => console.log('OK Pressed!') },
             ]
           )}>
          <View style={styles.content}>
            <Text style={styles.name}>
              Change password
            </Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.setlist} />
      <View>
        <Text style={styles.title}>
          Gender
        </Text>
        <TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.name}>
              Gender
            </Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.setlist} />
      <View>
        <TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.name}>
              About
            </Text>
            <Image
              style={styles.icon}
              source={nxtrow}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.setlist} />
    </View>
  );
};
module.exports = AccountSetting;
