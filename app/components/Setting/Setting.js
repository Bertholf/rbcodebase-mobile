import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './../../components/Setting/Style';


const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titleText}>Account</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View>
                <Text style={styles.text}>Name</Text>
              </View>
              <View>
                <Text>My Name</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.privacy}>
            <View style={styles.list}>
              <View>
                <Text style={styles.text}>Username</Text>
              </View>
              <View>
                <Text>@tester</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.email}>
            <View style={styles.list}>
              <View>
                <Text style={styles.text}>Birthday</Text>
              </View>
              <View>
                <Text> Jan, 1 2017</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View>
                <Text style={styles.text}>Mobile Number</Text>
              </View>
              <View>
                <Text>(085) 21873918</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View>
                <Text style={styles.text}>Email</Text>
              </View>
              <View>
                <Text>email@domain.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View>
                <Text style={styles.text}>Password</Text>
              </View>
              <View>
                <Text>email@domain.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>Preference</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Privacy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Notifications</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Ad Preference</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>More Information</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Support</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Privacy Police</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Term of Service</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Licenses</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>Account Actions</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Clear Cache</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Log Out</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.deactive}>
            <View style={styles.list1}>
              <Text style={styles.deactive}>Deactive</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Setting;
