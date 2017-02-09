import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const Deactivate = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.title}>Are You Sure?</Text>
      <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.deactivate}
        onPress={() => Alert.alert('Cofirmation',
                                 'Are You Sure', [
                                  { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                  { text: 'Yes', onPress: () => console.log('OK Pressed') },
                                 ])}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Deactivate</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Deactivate;
