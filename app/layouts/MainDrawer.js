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
    marginBottom: 40,
    padding: 10,
  },
  drawerMenu: {
    flex: 3,
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius: 40,
    borderWidth: 1,
  },
  menu: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10,
  },
  submenu: {
    fontSize: 15,
    margin: 10,
  },
  icon: {
    width: 25,
    height: 25,
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
  time: {
    fontSize: 10,
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
            <Text style={styles.time}>
              Time
            </Text>
          </View>
        </View>
        <View style={styles.drawerMenu}>
          <View>
            <ScrollView>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_place_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      Map
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_list_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      List
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View>
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
                      Elevation Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={require('./../images/ic_new_releases_black_24dp.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.menu}>
                      What's New
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ margin: 10, height: 2, backgroundColor: 'black', opacity: 0.2 }} />
              <TouchableOpacity>
                <Text style={styles.submenu}>
                Office Map
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.submenu}>
                Trail Wiki
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.submenu}>
                Settings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.submenu}>
                Compass
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.submenu}>
                Help
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.submenu}>
                About/feedback
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.submenu}>
                Logout
                </Text>
              </TouchableOpacity>
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
          <Text style={styles.welcome}>Content!</Text>
          <Text>Open drawer</Text>
        </View>
      </DrawerLayout>
    );
  }
}
