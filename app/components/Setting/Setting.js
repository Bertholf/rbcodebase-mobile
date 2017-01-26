import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

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
        <TouchableOpacity>
          <View style={styles.list1}>
            <Text style={styles.text}>Deactive</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'grey',
  },
  imagesLeft: {
    marginRight: 15,
  },
  list: {
    margin: 5,
    alignItems : 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  list1: {
    margin: 5,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 20,
  }
})
