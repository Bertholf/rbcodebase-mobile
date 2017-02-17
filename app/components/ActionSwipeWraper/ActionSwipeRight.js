import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AppListing from '../Listing/listing';
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
        onSwipeLeft={() => Actions.pop()}
        style={styles.container}
      >
        <AppListing />
      </GestureRecognizer>
    );
  }
}

export default ActionSwiper;
