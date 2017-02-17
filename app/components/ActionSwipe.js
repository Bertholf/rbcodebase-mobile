import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, Text, PanResponder, View, Easing } from 'react-native';
import { Actions } from 'react-native-router-flux';
import clamp from 'clamp';
import Dashboard from './Timeline/Dashboard';
import GestureRecognizer from 'react-native-swipe-gestures';
import UserPanel from './UserPanel/UserPanel';
const {width, height} = Dimensions.get('window');
const screenWidth = width * 3;
const screenHeight = height * 3;
const SWIPE_X_THRESHOLD = width/4;
const SWIPE_Y_THRESHOLD = height/4;
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
    this.pan = new Animated.ValueXY();
    this.lastX = null;
    this.lastY = null;
    this.currentX = 0;
    this.currentY = 0;
    this.state = {
      offset: new Animated.Value(-height),
    };
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        return gestureState.dx !== 0 && gestureState.dy !== 0;
      },

      onPanResponderGrant: () => {
        this.pan.setOffset({x: this.pan.x._value, y: this.pan.y._value});
        this.pan.setValue({x: 0, y: 0});
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.pan.x, dy: this.pan.y}
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.pan.flattenOffset();
        let velocity;

        if (vx >= 0) {
          velocity = clamp(vx, 3, 5);
        } else if (vx < 0) {
          velocity = clamp(vx * -1, 3, 5) * -1;
        }
        // console.log(this.pan.x._value);
        // console.log(this.pan.y._value);
        if(Math.abs(this.pan.x._value) > Math.abs(this.pan.y._value)) {
          if (this.currentX < this.pan.x._value) {
            if ((this.currentX + (width+20)) >= ((width) * 2)){
              Animated.spring(this.pan, {
                toValue: {x: this.currentX, y: 0},
                friction: 4
              }).start(()=>{
                this.currentX = this.pan.x._value;
                  // this.pan.setValue({x: this.currentX, y: 0});
              });
              return;
            }
            // this.props.cardRemoved
            //   ? this.props.cardRemoved(this.props.cards.indexOf(this.state.card))
            //   : null
            Animated.spring(this.pan, {
              toValue: {x: (this.currentX + width), y: this.currentY},
              friction: 4
            }).start(()=>{
              this.currentX = this.pan.x._value;
              // this.pan.setValue({x: this.currentX, y: 0});
            });
          } else {
            if ((this.currentX - (width-20)) <= (-(width) * 2)) {
              console.log('out of reach');
              Animated.spring(this.pan, {
                toValue: {x: this.currentX, y: this.currentY},
                friction: 4
              }).start(()=>{
                this.currentX = this.pan.x._value;
                  // this.pan.setValue({x: this.currentX, y: 0});
              });
              return;
            }
            console.log('trigger me to go back', this.pan.x._value);
            Animated.spring(this.pan, {
              toValue: {x: this.currentX - width, y: this.currentY},
              friction: 4
            }).start(()=>{
              this.currentX = this.pan.x._value;
                // this.pan.setValue({x: this.currentX, y: 0});
            });
          }
        }
        else {
          // ========
          if (this.currentY < this.pan.y._value) {
            if ((this.currentY + (height+20)) >= ((height) * 2)){
              Animated.spring(this.pan, {
                toValue: {y: this.currentY, x: this.currentX},
                friction: 4
              }).start(()=>{
                this.currentY = this.pan.y._value;
                  // this.pan.setValue({x: this.currentX, y: 0});
              });
              return;
            }
            // this.props.cardRemoved
            //   ? this.props.cardRemoved(this.props.cards.indexOf(this.state.card))
            //   : null
            Animated.spring(this.pan, {
              toValue: {y: (this.currentY + height), x: this.currentX},
              friction: 4
            }).start(()=>{
              this.currentY = this.pan.y._value;
              // this.pan.setValue({x: this.currentX, y: 0});
            });
          } else {
            if ((this.currentY - (height-20)) <= (-(height) * 2)) {
              console.log('out of reach');
              Animated.spring(this.pan, {
                toValue: {y: this.currentY, x: this.currentX},
                friction: 4
              }).start(()=>{
                this.currentY = this.pan.y._value;
                  // this.pan.setValue({x: this.currentX, y: 0});
              });
              return;
            }
            console.log('trigger me to go back', this.pan.y._value);
            Animated.spring(this.pan, {
              toValue: {y: this.currentY - height, x: this.currentX},
              friction: 4
            }).start(()=>{
              this.currentY = this.pan.y._value;
                // this.pan.setValue({x: this.currentX, y: 0});
            });
          }
        }
      }
    });
  }

  render() {
    console.log('trigger me');
    const { pan } = this;
    let [translateX, translateY] = [pan.x, pan.y];

    let animatedCardstyles = {transform: [{translateX}, {translateY}]};
    return (
      <View style={{flex: 1}}>
      <Animated.View style={[{ width: screenWidth, height: screenHeight, position: 'absolute', top: -height, left: -width }, animatedCardstyles]} {...this.panResponder.panHandlers}>
        <View style={{flexDirection: 'row'}}>
          <View style={{ width, height, backgroundColor: '#f60', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test 2</Text>
          </View>
          <View style={{ width, height, backgroundColor: '#f00', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Top</Text>
          </View>
          <View style={{ width, height, backgroundColor: '#c00', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test 1</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{ width, height, backgroundColor: '#d00', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Left</Text>
          </View>
          <View style={{ width, height, backgroundColor: '#a00', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Center</Text>
          </View>
          <View style={{ width, height, backgroundColor: '#900', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Right</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{ width, height, backgroundColor: '#909', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Blewah</Text>
          </View>
          <View style={{ width, height, backgroundColor: '#0a0', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Bottom</Text>
          </View>
          <View style={{ width, height, backgroundColor: '#aa0', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test</Text>
          </View>
        </View>
      </Animated.View>
    </View>
    );
  }
}

export default ActionSwiper;
