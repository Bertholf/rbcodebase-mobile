import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
};


const test = () => {
  return (
    <Swiper showsButtons={true} loop={false} showsPagination={false}>
      <View style={styles.slide1} >
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
    </Swiper>
  );
};
module.exports = test;
