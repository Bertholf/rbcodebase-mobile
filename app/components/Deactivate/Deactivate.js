import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

const Deactivate = () => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.title}>Are You Sure?</Text>
      <Text style={styles.content}>Deactivate if you are deactivate.</Text>
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
