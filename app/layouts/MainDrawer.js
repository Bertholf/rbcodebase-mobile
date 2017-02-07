import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FacebookLogout from './../services/FacebookLogout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  drawerProfile: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
    padding: 10,
  },
  drawerMenu: {
    flex: 6,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderWidth: 1,
  },
  menu: {
    fontSize: 20,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  viewIcon: {
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    fontSize: 15,
    marginBottom: 5,
  },
});

const dashboard = require('./../images/ic_dashboard_black_24dp.png');
const profile = require('./../images/ic_perm_identity_black_24dp.png');
const notifications = require('./../images/ic_notifications_black_24dp.png');
const setting = require('./../images/ic_settings_black_24dp.png');
const logout = require('./../images/ic_directions_run_black_24dp.png');

const MainDrawer = () => {
  const navigationView = (
    <View style={styles.container}>
      <View style={styles.drawerProfile}>
        <View>
          <TouchableOpacity onPress={Actions.profile}>
          <Image
            style={styles.image}
            source={{ uri: 'https://s-media-cache-ak0.pinimg.com/736x/db/b7/4a/dbb74aa018b267e7e6e6bd251723881b.jpg' }}
          />
        </TouchableOpacity>
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
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.viewIcon}>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={dashboard}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={Actions.timelineList}>
                  <Text style={styles.menu}>
                    Dashboard
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.viewIcon}>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={profile}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text onPress={Actions.profile} style={styles.menu}>
                    My Profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.viewIcon}>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={notifications}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={Actions.notifications} >
                  <Text style={styles.menu}>
                    Notifications
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.viewIcon}>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={setting}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={Actions.setting} >
                  <Text style={styles.menu}>
                    Setting
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.viewIcon}>
                <TouchableOpacity>
                  <Image
                    style={styles.icon}
                    source={logout}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => FacebookLogout.getFacebookLogout()}>
                  <Text style={styles.menu}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#000000', opacity: 0.3 }} />
          </ScrollView>
        </View>
      </View>
    </View>
  );

  return (navigationView);
};

export default MainDrawer;
