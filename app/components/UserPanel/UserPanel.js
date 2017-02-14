import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const settingIcon = require('./../../images/ic_settings_black_24dp.png');
const userImage = require('./../../images/profile-pic.jpg');

const userPanel = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <TouchableOpacity>
        <Image source={settingIcon} style={{ margin: 15, width: 25, height: 25 }} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Image source={userImage} style={{ width: 130, height: 130, borderRadius: 130 }} />
      </View>
      <View style={{ flexDirection: 'column', backgroundColor: 'blue', marginTop: 20 }}>
        <View>
          <Image />
          <Text>Following Me </Text>
        </View>
        <View>
          <Image />
          <Text>My Friends </Text>
        </View>
        <View>
          <Image />
          <Text>Add Friends </Text>
        </View>
      </View>
    </View>

  </View>
);

module.exports = userPanel;
