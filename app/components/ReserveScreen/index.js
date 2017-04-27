import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class ReserveScreen extends Component {
  render() {
    return (
      <View style={{ alignSelf: 'center' }}>
        <TouchableOpacity onPress={() => this.props.goCenter()}>
          <Image source={require('../../images/arrowtop.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
