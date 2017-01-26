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
      <View>
        <Text>First Name</Text>
      </View>
      <View>
        <TextInput
          placeholder={'First Name'}
        />
      </View>
      <View>
        <Text>Last Name</Text>
        <TextInput
          placeholder={'Last Name'}
        />
      </View>
      <View>
        <Button
          title={'Save'}
        />
      </View>
    </View>
  );
};

module.exports = UpdateName;
