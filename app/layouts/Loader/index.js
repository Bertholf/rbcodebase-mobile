import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  View,
  Dimensions,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './style';

const { width, height } = Dimensions.get('window');
const Loader = (message) => {
  const dismissModal = () => {
    Actions.pop();
  };

  return (
    <View style={styles.container} >
      <TouchableHighlight style={styles.container} onPress={() => dismissModal()}>
        <View><ActivityIndicator size={'large'} />
        <Text>{message}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Loader;
