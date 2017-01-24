import React, { Component } from 'react';
import {
  View,
  Text,
  DrawerLayoutAndroid,
  StyleSheet,
  Image,
  TouchableOpcaity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  header: {
    fontSize: 40,
    flexDirection: 'row',
    fontWeight: 'bold',
    color: 'white',
    padding: '10',
    marginBottom: '10',
  },
  profile: {
    margin: 10,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  menu: {
    margin: 10,
    fontSize: 20,
    color: 'black',
  },
  logout: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  button: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'skyblue',
  },
});

export default class DrawerLayout extends Component {
  render() {
    const navigationView = (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/a230c855-7adf-415a-bb1c-289f27304563/icon/237aff7c-ea68-4e74-9026-2ccce4512117' }}
          />
          <Text style={styles.profile}>
            Name : fullname
            Username : email
            Status : status
          </Text>
        </View>
        <View style={styles.content}>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <Text style={styles.menu}>Timeline</Text>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <Text style={styles.menu}>Status</Text>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <Text style={styles.menu}>Setting</Text>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <Text style={styles.menu}>Report</Text>
          <View style={{ width: 300, height: 1, backgroundColor: 'white', opacity: 0.5 }} />
          <Text style={styles.menu}>Help</Text>
          <View style={styles.logout}>
            <TouchableOpcaity>
              <Text style={styles.button}>
                Logout
              </Text>
            </TouchableOpcaity>
          </View>
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
        <View style={{ flex: 1, backgroundColor: 'steeblue', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.image}
            source={{ uri: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwizy5qf1NfRAhXGsI8KHVVZA_IQjBwIBA&url=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsmart-phone-woman-texting-using-app-smartphone-sms-touchscreen-gloves-happy-hiker-mobile-outside-nature-48369685.jpg&psig=AFQjCNHPJ7dFrmQ8M8vYFII5-reGIOkRaw&ust=1485239960973104' }}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
