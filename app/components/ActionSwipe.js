import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  PanResponder,
  Animated,
  TouchableOpacity,
} from 'react-native';
import SimpleGesture from 'react-native-simple-gesture';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    height,
    width: width*3,
  },
  scene: {
    height,
    width,
    backgroundColor: '#aac',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  }
});

class ActionSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
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
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (e, gs) => {
        let sgs = new SimpleGesture(e, gs);
        console.log('Swiped ', sgs.relativeGestureDistance.x*100, '% of the screen horizontally');
        console.log('Swiped ', sgs.relativeGestureDistance.y*100, '% of the screen vertically');
        // Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y }]);
        if (sgs.isSwipeUp()) {
          this.setState({ top: height, right: 0, left: 0, bottom: 0 });
        }
        if (sgs.isSwipeLeft()) {
          this.setState({ left: width, right: 0, top: 0, bottom: 0 });
        }
        if (sgs.isSwipeUp()) {
          this.setState({ bottom: height, right: 0, left: 0, top: 0 });
        }
        if (sgs.isSwipeRight()) {
          this.setState({ right: width, top: 0, left: 0, bottom: 0 });
        }
      },
      onPanResponderRelease: (e, { vx, vy }) => {
      },
    });
  }
  render() {
    const {pan} = this.state;
    const [translateX, translateY] = [pan.x, pan.y];
    const animatedStyle = {transform: [{translateX}, {translateY}]}
    return (
      <View {...this.panResponder.panHandlers}>
        <View style={[styles.scene,{ zIndex:1 }]}>
          <TouchableOpacity onPress={() => this.setState({ right: width })}>
            <Text style={{ fontSize: 30 }}>Goto Right</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ left: width })}>
            <Text style={{ fontSize: 30 }}>Goto Left</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ top: height })}>
            <Text style={{ fontSize: 30 }}>Goto Top</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ bottom: height })}>
            <Text style={{ fontSize: 30 }}>Goto Bottom</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.scene, { zIndex:2, top: -height + this.state.top }]}>
          <Text style={{ fontSize: 30 }}>TOP</Text>
        </View>
        <View style={[styles.scene, { zIndex:2, left: -width +  this.state.left }]}>
          <Text style={{ fontSize: 30 }}>LEFT</Text>
        </View>
        <View style={[styles.scene, { zIndex:2, right: -width + this.state.right }]}>
          <Text style={{ fontSize: 30 }}>RIGHT</Text>
        </View>
        <View style={[styles.scene, { zIndex:2, bottom: 0 - this.state.bottom }]}>
          <Text style={{ fontSize: 30 }}>BOTTOM</Text>
        </View>
      </View>
    );
  }
}

export default ActionSwiper;
