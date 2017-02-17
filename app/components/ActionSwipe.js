import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dashboard from './Timeline/Dashboard';
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

class ActionSwiper extends Component {
  render() {
    return (
      <GestureRecognizer
        onSwipeUp={() => Actions.actionSwipeTop()}
        onSwipeDown={() => Actions.actionSwipeBottom()}
        onSwipeLeft={() => Actions.actionSwipeLeft()}
        onSwipeRight={() => Actions.actionSwipeRight()}
        style={styles.container}
      >
        <Dashboard />
      </GestureRecognizer>
    );
  }
}

export default ActionSwiper;
