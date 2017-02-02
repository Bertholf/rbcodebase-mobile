import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Image,
  Picker,
  Switch,
} from 'react-native';
import styles from './../../components/Privacy/style.js';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

state = {
  trueSwitchIsOn: true,
  falseSwitchIsOn: false,
};

const privacy = () => {
  return (
    <View style= {styles.styleBackground}>
      <View style={{ height: 50, backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Privacy</Text>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
          <Text style={styles.styleText}>
            Comfirm request when someone follow
          </Text>
          <Switch
            onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
            value={this.state.trueSwitchIsOn}
            style={{ marginRight: 7 }}
            onTintColor="#2196F3"
            thumbTintColor="#2196F3"
            tintColor="#2196F3"
          />
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
          <Text style={styles.styleText}>
            Who can follow you
          </Text>
          <Switch
            onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
            value={this.state.trueSwitchIsOn}
            style={{ marginRight: 7 }}
            onTintColor="#2196F3"
            thumbTintColor="#2196F3"
            tintColor="#2196F3"
          />
        </View>
        <View style ={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
          <Text style={styles.styleText}>
            Who can comment on your posts
          </Text>
          <Switch
            onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
            value={this.state.trueSwitchIsOn}
            style={{ marginRight: 7 }}
            onTintColor="#2196F3"
            thumbTintColor="#2196F3"
            tintColor="#2196F3"
          />
        </View>
        <View style= {{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
          <Text style={styles.styleText}>
            Who can post on your timeline
          </Text>
          <Switch
            onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
            value={this.state.trueSwitchIsOn}
            style={{ marginRight: 7 }}
            onTintColor="#2196F3"
            thumbTintColor="#2196F3"
            tintColor="#2196F3"
          />
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
          <Text style={styles.styleText}>
            Comfirm request when someone follow
          </Text>
          <Switch
            onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
            value={this.state.trueSwitchIsOn}
            style={{ marginRight: 7 }}
            onTintColor="#2196F3"
            thumbTintColor="#2196F3"
            tintColor="#2196F3"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.8}
            onPress={onButtonPress}
          >
            <Text style={styles.txtButton}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default privacy ;
