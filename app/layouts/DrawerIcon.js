import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

export default class DrawerIcon extends Component {
  render() {
    const icon = require('./../images/ic_menu_black_48dp.png');
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={icon}
          style={{ width: 30, height: 30, marginTop: 10, marginLeft: 5 }}
        />
      </TouchableOpacity>
    );
  }
}
