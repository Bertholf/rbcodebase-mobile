import React from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';

const Loader = ({ message, onPress }) => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
      <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 20 }}>
        <ActivityIndicator />
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
Loader.propTypes = {
  message: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};
export default Loader;
