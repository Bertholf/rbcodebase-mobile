import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  PanResponder,
} from 'react-native';
import SimpleGesture from 'react-native-simple-gesture';
import { Actions } from 'react-native-router-flux';
import Dashboard from './Timeline/Dashboard';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    color: '#fff',
  },
});

class ActionSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
  }
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
      },
      onPanResponderMove: (e, gs) => {
        let sgs = new SimpleGesture(e, gs);
        console.log('Swiped ', sgs.relativeGestureDistance.x*100, '% of the screen horizontally');
        console.log('Swiped ', sgs.relativeGestureDistance.y*100, '% of the screen vertically');
        // Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y }]);
        if (sgs.isSwipeUp()) {
          Actions.profile();
        }
        if (sgs.isSwipeLeft()) {
          Actions.leftdashboard();
        }
        if (sgs.isSwipeDown()) {
          Actions.timelineList();
        }
        if (sgs.isSwipeRight()) {
          Actions.chatlist();
        }
      },
      onPanResponderRelease: (e, { vx, vy }) => {
      },
    });
  }
  render() {
    return (
      <View {...this.panResponder.panHandlers} style={styles.container} >
        <Dashboard />
      </View>
    );
  }
}

export default ActionSwiper;
