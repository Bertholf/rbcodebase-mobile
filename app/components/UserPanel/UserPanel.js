import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './../../components/UserPanel/style';

const settingIcon = require('./../../images/ic_settings_black_24dp.png');
const userImage = require('./../../images/profile-pic.jpg');
const followImage = require('./../../images/ic_attach_file_white_24dp.png');
const contactImage = require('./../../images/facebook-square.png');
const addFriendImage = require('./../../images/friend.png');


const userPanel = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <TouchableOpacity activeOpacity={0.7}>
        <Image source={settingIcon} style={{ margin: 15, width: 25, height: 25 }} />
      </TouchableOpacity>
    </View>
    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }} >
      <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <Image source={userImage} style={{ width: 130, height: 130, borderRadius: 130 }} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', marginTop: 20 }}>
        <TouchableOpacity activeOpacity={0.7} style={styles.imgLinksContainer}>
          <Image source={followImage} style={styles.imgLinks} />
          <Text style={styles.textLinks}>Following Me </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.imgLinksContainer}>
          <Image source={contactImage} style={styles.imgLinks} />
          <Text style={styles.textLinks}>My Friends </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.imgLinksContainer}>
          <Image source={addFriendImage} style={styles.imgLinks} />
          <Text style={styles.textLinks}>Add Friends </Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <TouchableOpacity activeOpacity={0.7}>
        <Image source={settingIcon} style={{ margin: 15, width: 25, height: 25 }} />
      </TouchableOpacity>
    </View>

  </View>
);

module.exports = userPanel;
