import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const UpdateName = () => {
  return (
    <View>
      <View>
        <Text>First Name</Text>
      </View>
      <View>
        <Text>Text First Name</Text>
      </View>
      <View>
        <Text>Last Name</Text>
        <Text>Text Last Name</Text>
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
