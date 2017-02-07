import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FacebookLogout from './../services/FacebookLogout';

const { width,height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
  },
  drawerProfile: {
    paddingTop: 14,
    paddingLeft: 16,
    flexDirection: 'row',
    width: width * 0.4,
    height: height * 0.2,
  },
  drawerMenu: {
    flex: 6,
    backgroundColor: 'white',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 40,
  },
  menu: {
    fontSize: 20,
    padding: 20,
    color: '#2196F3',
  },
  icon: {
    width: 20,
    height: 20,
    padding: 20,
  },
  viewIcon: {
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2196F3',
    paddingLeft: 10,
  },
  location: {
    fontSize: 15,
    marginBottom: 10,
    color: '#9091ac',
    paddingLeft: 10,
  },
});

const dashboard = require('./../images/ic_dashboard_black_24dp.png');
const inbox2 = require('./../images/ic_question_answer_black_24dp.png');
const listfriend = require('./../images/plainicon.com-39373-79e6-24px.png');
const profile = require('./../images/ic_perm_identity_black_24dp.png');
const notifications = require('./../images/ic_notifications_black_24dp.png');
const setting = require('./../images/ic_settings_black_24dp.png');
const logout = require('./../images/ic_directions_run_black_24dp.png');


const MainDrawer = () => {
  const navigationView = (
    <View style={styles.container}>
      <View style={styles.drawerProfile}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: 'https://s-media-cache-ak0.pinimg.com/736x/db/b7/4a/dbb74aa018b267e7e6e6bd251723881b.jpg' }}
          />
        </View>
        <View>
          <Text style={styles.name}>
            Name
          </Text>
          <Text style={styles.location}>
            Location
          </Text>
        </View>
      </View>
      <View style={styles.drawerMenu}>
        <View>
          <ScrollView>
            <TouchableOpacity onPress={Actions.timelineList}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={dashboard}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    Dashboard
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <TouchableOpacity onPress={Actions.inbox}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={inbox2}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    Inbox
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <TouchableOpacity onPress={Actions.chatfriend}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={listfriend}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    My FriendList
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <TouchableOpacity onPress={Actions.profile}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={profile}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    My Profile
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <TouchableOpacity onPress={Actions.notifications}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={notifications}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    Notifications
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <TouchableOpacity onPress={Actions.setting}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={setting}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    Setting
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <TouchableOpacity onPress={() => FacebookLogout.getFacebookLogout()}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <Image
                    style={styles.icon}
                    source={logout}
                  />
                </View>
                <View>
                  <Text style={styles.menu}>
                    Logout
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
          </ScrollView>
        </View>
      </View>
    </View>
  );

  return (navigationView);
};

export default MainDrawer;
