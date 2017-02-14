import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './../../components/Setting/Style';


const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
            <Text>Account</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Name</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.privacy}>
            <View style={styles.list}>
              <Text style={styles.text}>Username</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.email}>
            <View style={styles.list}>
              <Text style={styles.text}>Birthday</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Mobile Number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Text style={styles.text}>Password</Text>
            </View>
          </TouchableOpacity>
          <Text>Preference</Text>
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
          <Text>More Information</Text>
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
          <Text>Account Actions</Text>
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
