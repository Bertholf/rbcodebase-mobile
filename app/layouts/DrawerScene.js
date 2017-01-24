import React, { Component } from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  StyleSheet,
  Image,
  AppRegistry,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  profile: {
    flexDirection: 'column',
    margin: 5,
    fontSize: 15,
  },
  menu: {
    margin: 10,
    fontSize: 20,
  },
  logout: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#009688',
  },
});

export default class DrawerScene extends Component {
  render() {
    const navigationView = (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image
              style={{ width: 100, height: 100, marginRight: 20 }}
              source={{ uri: 'https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/a230c855-7adf-415a-bb1c-289f27304563/icon/237aff7c-ea68-4e74-9026-2ccce4512117' }}
            />
          </View>
          <View>
            <Text style={styles.profile}>
            Name : fullname
            </Text>
            <Text style={styles.profile}>
            Username : email
            </Text>
            <Text style={styles.profile}>
            Status : status
            </Text>
          </View>
        </View>
        <View>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <TouchableOpacity>
            <Text style={styles.menu}>Timeline</Text>
          </TouchableOpacity>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <TouchableOpacity>
            <Text style={styles.menu}>Status</Text>
          </TouchableOpacity>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <TouchableOpacity>
            <Text style={styles.menu}>Setting</Text>
          </TouchableOpacity>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <TouchableOpacity>
            <Text style={styles.menu}>Report</Text>
          </TouchableOpacity>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <TouchableOpacity>
            <Text style={styles.menu}>Help</Text>
          </TouchableOpacity>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <TouchableOpacity>
            <Text style={styles.menu}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerBackgroundColor="skyblue"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >
        <View style={{ flex: 1, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.image}
            source={{ uri: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwizy5qf1NfRAhXGsI8KHVVZA_IQjBwIBA&url=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsmart-phone-woman-texting-using-app-smartphone-sms-touchscreen-gloves-happy-hiker-mobile-outside-nature-48369685.jpg&psig=AFQjCNHPJ7dFrmQ8M8vYFII5-reGIOkRaw&ust=1485239960973104' }}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

AppRegistry.registerComponent('ReactProject', () => DrawerScene);
