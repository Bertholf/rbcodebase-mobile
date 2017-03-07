import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

export default class IconClose extends Component {
  render() {
    const icon = require('./../images/ic_keyboard_arrow_left_black_24dp.png');
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={icon}
          style={{ width: 25, height: 25, marginTop: 16, marginLeft: 5 }}
        />
      </TouchableOpacity>
    );
  }
}
