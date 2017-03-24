import React, {} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// change select gender
const Gender = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 40 }}>
        <TouchableOpacity style={{ width: 100, height: 100, marginLeft: 70 }}>
          <Image source={require('./../../images/male.png')} />
          <Text style={{ fontSize: 20 }}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, marginLeft: 70 }}>
          <Image source={require('./../../images/female.png')} />
          <Text style={{ fontSize: 20 }}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

module.exports = Gender;
