import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

import DrawerLayout from 'react-native-drawer-layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
  },
  drawerProfile: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 40,
    padding: 10,
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

export default class MainDrawer extends Component {
  render() {
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
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_dashboard_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      Dashboard
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2 }} />
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_perm_identity_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      My Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2 }} />
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_notifications_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      Notifications
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2 }} />
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_settings_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      Setting
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2 }} />
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.viewIcon}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_directions_run_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      Logout
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ height: 1, backgroundColor: 'black', opacity: 0.2 }} />
            </ScrollView>
          </View>
        </View>
      </View>
    );

    return (
      <DrawerLayout
        drawerWidth={300}
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>MAIN PAGE</Text>
        </View>
      </DrawerLayout>
    );
  }
}
