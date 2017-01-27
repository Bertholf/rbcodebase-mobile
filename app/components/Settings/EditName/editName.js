import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import styles from './../../../components/Settings/EditName/style';

const UpdateName = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 50 }}>
        <Text style={{ fontSize: 32, color: '#757575' }}>Change Name</Text>
      </View>
      <View style={styles.inputMargin}>
        <View>
          <Text style={styles.title}>First Name</Text>
        </View>
        <View>
          <TextInput
            placeholder={'First Name'}
            placeholderTextColor="#BDBDBD"
          />
        </View>
      </View>
      <View>
        <Text style={styles.title}>Last Name</Text>
        <TextInput
          placeholder={'Last Name'}
          placeholderTextColor="#BDBDBD"
        />
      </View>
      <View style={styles.button}>
        <Button
          title={'Save'}
        />
      </View>
    </View>
  );
};

module.exports = UpdateName;
