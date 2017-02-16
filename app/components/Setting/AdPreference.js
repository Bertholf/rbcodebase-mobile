import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AdPref extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>
          Ad Preference
        </Text>
      </View>
    );
  }
}
