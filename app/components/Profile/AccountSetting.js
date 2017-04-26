import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './../../style/StyleGlobal';

const AccountSetting = () => (
  <View style={{ flex: 1 }}>
    <ScrollView>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={Actions.nameEdit}>
          <Text style={styles.titleAccount}>
            Name
          </Text>
          <View style={styles.content}>
            <Text style={styles.nameAccount}>
              Edit Name
            </Text>
            <Image
              style={styles.iconAccount}
              source={require('./../../images/backbuttonblue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={Actions.usernameEdit}>
          <Text style={styles.titleAccount}>
            Username
          </Text>
          <View style={styles.content}>
            <Text style={styles.nameAccount}>
              Edit Username
            </Text>
            <Image
              style={styles.iconAccount}
              source={require('./../../images/backbuttonblue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={Actions.emailEdit}>
          <Text style={styles.titleAccount}>
            Email
          </Text>
          <View style={styles.content}>
            <Text style={styles.nameAccount}>
              Edit Email
            </Text>
            <Image
              style={styles.iconAccount}
              source={require('./../../images/backbuttonblue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={Actions.passEdit}>
          <Text style={styles.titleAccount}>
            Password
          </Text>
          <View style={styles.content}>
            <Text style={styles.nameAccount}>
              Edit Password
            </Text>
            <Image
              style={styles.iconAccount}
              source={require('./../../images/backbuttonblue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={Actions.genderEdit}>
          <Text style={styles.titleAccount}>
            Gender
          </Text>
          <View style={styles.content}>
            <Text style={styles.nameAccount}>
              Edit Gender
            </Text>
            <Image
              style={styles.iconAccount}
              source={require('./../../images/backbuttonblue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 15 }}>
        <TouchableOpacity onPress={Actions.about}>
          <Text style={styles.titleAccount}>
            About
          </Text>
          <View style={styles.content}>
            <Text style={styles.nameAccount}>
              Edit your bio
            </Text>
            <Image
              style={styles.iconAccount}
              source={require('./../../images/backbuttonblue.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);
module.exports = AccountSetting;
