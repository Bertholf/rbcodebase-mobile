import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, PanResponder, View, Image, TouchableOpacity } from 'react-native';
import clamp from 'clamp';
import Dashboard from './Timeline/Dashboard';
import UserPanel from './UserPanel/UserPanel';
import ReserveScreen from './ReserveScreen';
import Timeline from './Timeline/TimelineComp';
import Listing from './Listing/listing';

const arrowRight = require('../images/arrowRight.png');
const arrowLeft = require('../images/arrowLeft.png');

const { width, height } = Dimensions.get('window');
const screenWidth = width * 3;
const screenHeight = height * 3;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  card: {
    width,
    height,
    padding: 15,
  },
  arrowLeft: {
    position: 'absolute',
    top: height / 2,
    left: 0,
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    top: height / 2,
    right: 0,
    zIndex: 10,
  },
});

class ActionSwiper extends Component {
  constructor(props) {
    super(props);
    this.pan = new Animated.ValueXY();
    this.currentX = 0;
    this.currentY = 0;
    this.onHorizontalSwipe = this.onHorizontalSwipe.bind(this);
    this.onVerticalSwipe = this.onVerticalSwipe.bind(this);
    // Initial panResponder
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => gestureState.dx !== 0 && gestureState.dy !== 0,
      onPanResponderGrant: () => {
        this.pan.setOffset({ x: this.pan.x._value, y: this.pan.y._value });
        this.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderRequestTermination: (evt, gestureState) => true,

      // Disable onPanresponderMove from infinite pull
      //
      // onPanResponderMove: Animated.event([
      //   null, { dx: this.pan.x, dy: this.pan.y },
      // ]),

      onPanResponderRelease: (e, { vx, vy, dx, dy }) => {
        // The user release all touches or all gesture are success
        this.pan.flattenOffset();
        let velocity;
        if (vx >= 0) {
          // set velocity for running animations if VX >= 0
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          // set velocity for running animations if VX < 0
          velocity = clamp(vx * -1, 3, 5) * -1;
        }
        if (Math.abs(dx) > Math.abs(dy)) {
          this.onHorizontalSwipe(dx);
        } else {
          this.onVerticalSwipe(dy);
        }
      },
    });
  }

  onHorizontalSwipe(dx) {
    // Condition on HorizontalSwipe
    console.log('dx dan currentY :', dx , ' == ', this.currentY);
    if (dx > 0 && this.currentY === 0) {
      if (this.currentX >= width) {
        Animated.spring(this.pan, {
          toValue: { x: this.currentX, y: 0 },
          friction: 6,
        }).start(() => {
          console.log(' out of reach LEFT currentX: ', this.currentX, 'dan', dx);
        });
        return;
      }

      Animated.spring(this.pan, {
        toValue: { x: this.currentX + width, y: 0 },
        friction: 6,
      }).start(() => {
        this.currentX = this.currentX + width;
        console.log('if currentX: ', this.currentX);
      });
    } else if (dx < 0 && this.currentY === 0) {
      if (this.currentX <= -width) {
        Animated.spring(this.pan, {
          toValue: { x: this.currentX, y: 0 },
          friction: 6,
        }).start(() => {
          console.log(' out of reach RIGHT currentX: ', this.currentX);
        });
        return;
      }
      Animated.spring(this.pan, {
        toValue: { x: this.currentX - width, y: 0 },
        friction: 6,
      }).start(() => {
        this.currentX = this.currentX - width;
        console.log(' else currentX: ', this.currentX);
      });
    } else {
      Animated.spring(this.pan, {
        toValue: { x: this.currentX, y: this.currentY },
        friction: 6,
      }).start();
    }
  }

  onVerticalSwipe(dy) {
    // Condition on Vertical swipe gesture
    if (dy > 0 && this.currentX === 0) {
      if (this.currentY >= height) {
        Animated.spring(this.pan, {
          toValue: { y: this.currentY, x: 0 },
          friction: 8,
        }).start(() => {
          this.currentX = Math.floor(this.pan.x._value);
          console.log(' out of reach TOP currentY: ', this.currentY);
        });
        return;
      }

      Animated.spring(this.pan, {
        toValue: { y: this.currentY + height, x: 0 },
        friction: 8,
      }).start(() => {
        this.currentY = this.currentY + height;
        console.log('if currentY: ', this.currentY);
      });
    } else if (dy < 0 && this.currentX === 0) {
      if (this.currentY <= -width) {
        Animated.spring(this.pan, {
          toValue: { y: this.currentY, x: 0 },
          friction: 8,
        }).start(() => {
          // this.currentX = Math.floor(this.pan.x._value);
          console.log(' out of reach BOTTOM currentY: ', this.currentY);
        });
        return;
      }
      Animated.spring(this.pan, {
        toValue: { y: this.currentY - height, x: 0 },
        friction: 10,
      }).start(() => {
        this.currentY = this.currentY - height;
        console.log(' else currentY: ', this.currentY);
      });
    } else {
      Animated.spring(this.pan, {
        toValue: { x: this.currentX, y: this.currentY },
        friction: 10,
      }).start();
    }
  }

  gotoCenter() {
    // Animated when go to Center Screen
    Animated.spring(this.pan, {
      toValue: { x: 0, y: 0 },
      friction: 6,
    }).start(() => {
      this.currentX = 0;
      this.currentY = 0;
    });
  }

  gotoLeft() {
    // Animated when go left
    Animated.spring(this.pan, {
      toValue: { x: width, y: 0 },
      friction: 6,
    }).start(() => {
      this.currentX = width;
      this.currentY = 0;
    });
  }

  gotoRight() {
    Animated.spring(this.pan, {
      toValue: { x: -width, y: 0 },
      friction: 6,
    }).start(() => {
      this.currentX = -(width);
      this.currentY = 0;
    });
  }

  gotoUp() {
    // Animation when going to upper screen
    Animated.spring(this.pan, {
      toValue: { x: 0, y: height },
      friction: 6,
    }).start(() => {
      this.currentX = 0;
      this.currentY = height;
    });
  }

  gotoDown() {
    // Animation when going to bottom screen
    Animated.spring(this.pan, {
      toValue: { x: 0, y: -height },
      friction: 6,
    }).start(() => {
      this.currentX = 0;
      this.currentY = -(height);
    });
  }

  render() {
    const props = {
      goLeft: () => this.gotoLeft(),
      goRight: () => this.gotoRight(),
      goUp: () => this.gotoUp(),
      goDown: () => this.gotoDown(),
      goCenter: () => this.gotoCenter(),
    };

    console.log('render', height, '  ', width);
    const { pan } = this;
    const [translateX, translateY] = [pan.x, pan.y];

    const animatedCardstyles = { transform: [{ translateX }, { translateY }] };
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[{ width: screenWidth, height: screenHeight, position: 'absolute', top: -height, left: -width }, animatedCardstyles]}
          {...this.panResponder.panHandlers}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.card} />
            <View style={styles.card}>
              <UserPanel {...props} />
            </View>
            <View style={styles.card} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => this.gotoCenter()}
                style={styles.arrowRight}
              >
                <Image source={arrowRight} />
              </TouchableOpacity>
              <Listing />
            </View>
            <View style={styles.card}>
              <Dashboard {...props} />
            </View>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => this.gotoCenter()}
                style={styles.arrowLeft}
              >
                <Image source={arrowLeft} />
              </TouchableOpacity>
              <Timeline />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.card} />
            <View style={styles.card}>
              <ReserveScreen {...props} />
            </View>
            <View style={styles.card} />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default ActionSwiper;
