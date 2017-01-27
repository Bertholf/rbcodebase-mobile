import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196f3',
  },
  imagesLeft: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  list: {
    marginTop: 10,
    alignItems : 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
  },
  list1: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 20,
    padding: 15,
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  deactive: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 10,
  },
})

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.list}>
          <Image style={styles.imagesLeft} source={require('../../images/ic_account_box_black_24dp.png')} />
            <Text style={styles.text}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.list}>
          <Image style={styles.imagesLeft} source={require('../../images/ic_build_black_24dp.png')} />
            <Text style={styles.text}>Privacy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
    )
  }
}
