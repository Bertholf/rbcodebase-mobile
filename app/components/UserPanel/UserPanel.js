import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './../../components/UserPanel/style';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const settingIcon = require('./../../images/ic_settings_black_24dp.png');
const userImage = require('./../../images/profile-pic.jpg');
const verifyImage = require('./../../images/ic_check_circle_black_24dp.png');
const followIcon = require('./../../images/people.png');
const contactIcon = require('./../../images/ic_contacts_black_24dp.png');
const addFriendIcon = require('./../../images/ic_person_add_black_24dp.png');
const bottomArrowIcon = require('./../../images/ic_expand_more_black_24dp.png');

const alertMessage = 'Press OK';


const userPanel = () => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.btnSettingContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => Alert.alert(
            'Alert Title',
            alertMessage,
            [
              { text: 'Cancel' },
              { text: 'OK' },
            ],
          )}
        >
          <Image source={settingIcon} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer} >
        <TouchableOpacity activeOpacity={0.7} style={styles.userButton}>
          <Image source={userImage} style={styles.userImage} />
        </TouchableOpacity>
        <Image source={verifyImage} tintColor={'#0f0'} style={{ position: 'absolute', right: 115, width: 30, height: 30 }} />

        <View style={styles.linksContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imgLinksContainer}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage,
              [
                { text: 'Cancel' },
                { text: 'OK' },
              ],
            )}
          >
            <Image source={followIcon} style={styles.imgLinks} />
            <Text style={styles.textLinks}>Following Me </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imgLinksContainer}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage,
              [
                { text: 'Cancel' },
                { text: 'OK' },
              ],
            )}
          >
            <Image source={contactIcon} style={styles.imgLinks} />
            <Text style={styles.textLinks}>My Friends </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.imgLinksContainer}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage,
              [
                { text: 'Cancel' },
                { text: 'OK' },
              ],
            )}
          >
            <Image source={addFriendIcon} style={styles.imgLinks} />
            <Text style={styles.textLinks}>Add Friends </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    <View style={styles.swapContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <Image source={bottomArrowIcon} style={styles.swapImage} />
      </TouchableOpacity>
    </View>
  </View>
);

module.exports = userPanel;
