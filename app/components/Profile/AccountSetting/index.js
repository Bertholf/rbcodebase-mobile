import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './style'

const AccountSetting = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity onPress={Actions.nameEdit}>
            <Text style={styles.title}>
              Name
            </Text>
            <View style={styles.content}>
              <Text style={styles.name}>
                Edit Name
              </Text>
              <Image
                style={styles.icon}
                source={require('./../../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity onPress={Actions.usernameEdit}>
            <Text style={styles.title}>
              Username
            </Text>
            <View style={styles.content}>
              <Text style={styles.name}>
                Edit Username
              </Text>
              <Image
                style={styles.icon}
                source={require('./../../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity onPress={Actions.emailEdit}>
            <Text style={styles.title}>
              Email
            </Text>
            <View style={styles.content}>
              <Text style={styles.name}>
                Edit Email
              </Text>
              <Image
                style={styles.icon}
                source={require('./../../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity onPress={Actions.passEdit}>
            <Text style={styles.title}>
              Password
            </Text>
            <View style={styles.content}>
              <Text style={styles.name}>
                Edit Password
              </Text>
              <Image
                style={styles.icon}
                source={require('./../../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity onPress={Actions.genderEdit}>
            <Text style={styles.title}>
              Gender
            </Text>
            <View style={styles.content}>
              <Text style={styles.name}>
                Edit Gender
              </Text>
              <Image
                style={styles.icon}
                source={require('./../../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 15 }}>
          <TouchableOpacity onPress={Actions.about}>
            <Text style={styles.title}>
              About
            </Text>
            <View style={styles.content}>
              <Text style={styles.name}>
                Edit your bio
              </Text>
              <Image
                style={styles.icon}
                source={require('./../../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
module.exports = AccountSetting;
