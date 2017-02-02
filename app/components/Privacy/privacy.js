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
} from 'react-native';
import styles from './../../components/Privacy/style.js';
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const privacy = () => {
  return (
    <View style= {styles.styleBackground}>
      <View style={{ height: 50, backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Privacy</Text>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa' }}>
          <Text style={styles.styleText}>
            Comfirm request when someone follow
          </Text>
          <Picker style= {{width: 70}}>
            <Picker.Item label = "Yes" value="ys"/>
            <Picker.Item label = "No" value= "no"/>
          </Picker>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa' }}>
          <Text style={styles.styleText}>
            Who can follow you
          </Text>
          <Picker style = {{width: 70}}>
            <Picker.Item label = "Yes" value="ys"/>
            <Picker.Item label = "No" value= "no"/>
          </Picker>
        </View>
        <View style ={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa'}}>
          <Text style={styles.styleText}>
            Who can comment on your posts
          </Text>
          <Picker style = {{width: 70}}>
            <Picker.Item label = "Yes" value="ys"/>
            <Picker.Item label = "No" value= "no"/>
          </Picker>
        </View>
        <View style= {{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa' }}>
          <Text style={styles.styleText}>
            Who can post on your timeline
          </Text>
          <Picker style = {{width: 70}}>
            <Picker.Item label = "Yes" value="ys"/>
            <Picker.Item label = "No" value= "no"/>
          </Picker>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa' }}>
          <Text style={styles.styleText}>
            Comfirm request when someone follow
          </Text>
          <Picker style= {{width: 70}}>
            <Picker.Item label = "Yes" value="ys"/>
            <Picker.Item label = "No" value= "no"/>
          </Picker>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.8}
          onPress={onButtonPress}
        >
          <Text style={styles.txtButton}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default privacy ;
