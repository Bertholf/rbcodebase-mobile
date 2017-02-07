import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
  },
});


const Loader = () => {
  const dismissModal = () => {
    Actions.pop();
  };

  return (
    <View style={styles.container} >
      <TouchableHighlight style={styles.container} onPress={() => dismissModal()}>
        <View><ActivityIndicator size={'large'} /></View>
      </TouchableHighlight>
    </View>
  );
};


export default Loader;
