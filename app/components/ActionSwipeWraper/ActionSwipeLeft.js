import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import GestureRecognizer from 'react-native-swipe-gestures';
import Timeline from '../Timeline/TimelineComp';

const arrowLeft = require('../../images/arrowLeft.png');

const { height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  arrowLeft: {
    position: 'absolute',
    left: 0,
    top: height / 2,
    zIndex: 10,
  },
});

const ActionSwiperLeft = () => {
  return (
    <GestureRecognizer
      onSwipeRight={() => Actions.pop()}
      style={styles.container}
    >
      <View>
        <TouchableOpacity
          onPress={() => Actions.pop()}
          activeOpacity={0.7}
          style={styles.arrowLeft}
        >
          <Image
            source={arrowLeft}
          />
        </TouchableOpacity>
        <Timeline />
      </View>
    </GestureRecognizer>
  );
}

export default ActionSwiperLeft;
