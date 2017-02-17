import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import UserPanel from '../UserPanel/UserPanel';
import GestureRecognizer from 'react-native-swipe-gestures';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});

const ActionSwiperBottom = () => {
  return (
    <GestureRecognizer
      onSwipeUp={() => Actions.pop()}
      style={styles.container}
    >
      <UserPanel />
    </GestureRecognizer>
  );
}

export default ActionSwiperBottom;
