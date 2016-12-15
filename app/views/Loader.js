'use strict';

import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default class Loader extends Component {
  state: { animating: false };
  _timer: 0;

  constructor(props) {
    super(props);
    this.state = {
      animating: true
    };
  }

  componentDidMount() {
    this.setToggleTimeout();
  }

  componentWillMount() {
    clearTimeout(this._timer);
  }

  setToggleTimeout() {
    this._timer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 2000)
  }

  render() {
    return (
      <View style={styles.overlay}>
        <ActivityIndicator
          size="large"
          style={[styles.centering, {backgroundColor: '#eeeeee'}]}
          />
      </View>
    )
  }
}

var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  centering: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    width: width,
    height: height,
    backgroundColor: 'black'
  }
});
