import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import GestureRecognizer from 'react-native-swipe-gestures';
import Timeline from '../Timeline/TimelineComp';

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
        onSwipeRight={() => Actions.pop()}
        style={styles.container}
      >
        <Timeline />
      </GestureRecognizer>
    );
  }
}

export default ActionSwiper;
