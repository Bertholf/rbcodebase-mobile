import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = props => (
  <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Hello World</Text>
    <ActivityIndicator />
  </View>
);
export default SplashScreen;
