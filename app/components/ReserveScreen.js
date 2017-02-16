import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import { View, Image, TouchableOpacity } from 'react-native';

export default class ReserveScreen extends Component {
    render() {
    return (
        <View style={{ position:'absolute', paddingLeft: 150}}>
          <TouchableOpacity onPress={Actions.pop}>
            <Image source={require('../images/arrowtop.png')}/>
          </TouchableOpacity>
        </View>
    );
  }
}
