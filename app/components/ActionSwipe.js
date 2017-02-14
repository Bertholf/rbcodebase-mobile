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
import Swiper from 'react-native-swiper';
import SlidingUpPanel from 'react-native-sliding-up-panel';
import Dashboard from './Timeline/Dashboard';
import LeftDashboard from './Timeline/LeftDashboard';
import Profile from './Profile/Profile'

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
      containerHeight: 0,
      height:0,
    };
    this.getContainerHeight = this.getContainerHeight.bind(this);
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
        // if (sgs.isSwipeUp()) {
        //   Actions.chatlist();
        // }
        // if (sgs.isSwipeLeft()) {
        //   Actions.timelineList();
        // }
        // if (sgs.isSwipeDown()) {
        //   Actions.profile();
        // }
        // if (sgs.isSwipeRight()) {
        //   Actions.leftdashboard();
        // }
      },
      onPanResponderRelease: (e, { vx, vy }) => {
      },
    });
  }

  getContainerHeight(h){
    this.setState({
      containerHeight : h,
    });
  }

  render() {
    return (
      <View style={styles.container} >
        <Swiper
          loop={false}
          showsPagination={false}
          index={0}
          height={height-10}
          showsButtons={true}
        >
          <View style={styles.container}>
            <Dashboard />
            <SlidingUpPanel
              ref={panel => { this.panel = panel; }}
              containerMaximumHeight={height}
              handlerHeight={30}
              allowStayMiddle
              handlerDefaultView={<View style={{backgroundColor: 'rgba(0,0,0,0)', width, height: 30}}/>}
              getContainerHeight={this.getContainerHeight}
            >
              <LeftDashboard />
            </SlidingUpPanel>
          </View>
          <LeftDashboard />
        </Swiper>
      </View>
    );
  }
}

export default ActionSwiper;
