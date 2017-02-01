import React from 'react';
import { View, Text } from 'react-native';


const Welcome = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{props.text}</Text>
  </View>
);

Welcome.defaultProps = {
  text: 'Welcome',
};

export default Welcome;
