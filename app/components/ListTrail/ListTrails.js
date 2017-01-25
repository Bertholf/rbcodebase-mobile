import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ListView, Dimensions } from 'react-native';

const imageMenu = require('./../../images/menu.png');
const accessible = require('./../../images/accessible.png');
const eye = require('./../../images/eye.png');
const gps = require('./../../images/gps.png');
const search = require('./../../images/search.png');
const morepert = require('./../../images/morepert.png');
const arrow = require('./../../images/arrow.png');
const image = require('./../../images/mountain.jpg');

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  header: {
    width,
    height: 60,
    backgroundColor: '#009688',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgMenu: {
    width: 30,
    height: 30,
    top: 15,
    left: 15,
  },
  menubar: {
    width: width * 0.8,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuBtn: {
    width: 30,
    height: 30,
    top: 15,
  },
  arrow: {
    width: 20,
    height: 30,
  },
  imageSide: {
    width: 100,
    height: 100,
  },
  listTrail: {
    flexDirection: 'row',
    top: 5,
    justifyContent: 'center',
  },
  menupert: {
    width: 25,
    height: 25,
  },
  list: {
    flexDirection: 'row',
    backgroundColor: '#00BFA5',
    justifyContent: 'space-between',
    width: width * 0.93,
  },
  text: {
    color: '#FFFFFF',
  },
  row: {
  },
});
export default class ListTrails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.imgMenu} source={imageMenu} />
          <View style={styles.menubar}>
            <View style={{ height: 40, width: 40 }} />
            <Image style={styles.menuBtn} source={eye} />
            <Image style={styles.menuBtn} source={accessible} />
            <Image style={styles.menuBtn} source={gps} />
            <Image style={styles.menuBtn} source={search} />
            <Image style={styles.menuBtn} source={morepert} />
          </View>
        </View>
        <View style={styles.listTrail} >
          <Image style={styles.arrow} source={arrow} />
          <View style={styles.row} >
            <View style={styles.list}>
              <Image style={styles.imageSide} source={image} />
              <Text style={styles.text}>Longmire</Text>
              <Text style={styles.text}>S8511.02mi</Text>
              <Image style={styles.menupert} source={morepert} />
              <Text style={styles.text}>On Trail</Text>
              <Text style={styles.text}>WT mi-89</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
