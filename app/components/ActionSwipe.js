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
        if (sgs.isSwipeUp()) {
          Actions.profile();
        }
        if (sgs.isSwipeDown()) {
          Actions.userpanel();
        }
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
      <View style={styles.container}>
        <Swiper
          loop={false}
          showsPagination={false}
          index={1}
          height={height-30}
          showsButtons={true}
        >
          <View style={[styles.container,{justifyContent: 'center', alignItems: 'center', backgroundColor: '#cbc'}]}>
            <Text style={styles.text}>LEFT</Text>
          </View>
          <View style={styles.container}  {...this.panResponder.panHandlers}>
            <Dashboard />
          </View>
          <LeftDashboard />
        </Swiper>
      </View>
    );
  }
}

export default ActionSwiper;
