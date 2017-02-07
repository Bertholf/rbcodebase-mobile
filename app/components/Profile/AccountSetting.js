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

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: 'Arial',
    color: '#fff',
    fontWeight: 'bold',
  },
  imgMenu: {
    width: 30,
    height: 30,
    top: 15,
    left: 10,
  },
  title: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderColor: '#2196f3',
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 3,
    color: '#2196f3',
  },
  icon: {
    width: 25,
    height: 25,
  },
  setlist: {
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.3,
    margin: 5,
  },
  Text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 10,
  },
});

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
                source={require('./../../images/backbuttonblue.png')}
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
                source={require('./../../images/backbuttonblue.png')}
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
                source={require('./../../images/backbuttonblue.png')}
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
                source={require('./../../images/backbuttonblue.png')}
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
                source={require('./../../images/backbuttonblue.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
module.exports = AccountSetting;
