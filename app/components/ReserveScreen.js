import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ReserveScreen extends Component {
    render() {
    return (
      <View style={{ position:'absolute', paddingLeft: 150}}>
          <Image source={require('../../images/arrowtop.png')}/>
      </View>

    );
  }
}
