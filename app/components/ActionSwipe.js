import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Dashboard from './Timeline/Dashboard';
import GestureRecognizer from 'react-native-swipe-gestures';
import UserPanel from './UserPanel/UserPanel';

const { height } = Dimensions.get('window');
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
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(-height),
    };
  }
  onSwipeDown() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0,
    });
  }

  render() {
    return (
      <GestureRecognizer
        onSwipeUp={() => Actions.actionSwipeTop()}
        onSwipeDown={() => this.onSwipeDown()}
        onSwipeLeft={() => Actions.actionSwipeLeft()}
        onSwipeRight={() => Actions.actionSwipeRight()}
        style={styles.container}
      >
        <Animated.View
          style={[styles.container, { backgroundColor: 'rgba(52,52,52,0.5)' },
                                      { transform: [{ translateY: this.state.offset }] }]}
        >
          <UserPanel />
        </Animated.View>
        <Dashboard />
      </GestureRecognizer>
    );
  }
}

export default ActionSwiper;
