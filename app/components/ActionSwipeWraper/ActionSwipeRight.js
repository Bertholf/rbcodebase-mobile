import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppListing from '../Listing/listing';
import GestureRecognizer from 'react-native-swipe-gestures';

const arrowRight = require('../../images/arrowRight.png');

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  arrowRight: {
    position: 'absolute',
    right: 0,
    top: height / 2,
    zIndex: 10,
  },
});

const ActionSwiperRight = () => {
  return (
    <GestureRecognizer
      onSwipeLeft={() => Actions.pop()}
      style={styles.container}
    >
      <View>
        <TouchableOpacity
          onPress={() => Actions.pop()}
          activeOpacity={0.7}
          style={styles.arrowRight}
        >
          <Image
            source={arrowRight}
          />
        </TouchableOpacity>
        <AppListing />
      </View>
    </GestureRecognizer>
  );
}

export default ActionSwiperRight;
