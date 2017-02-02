import React, { Component } from 'react';
import {
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
const privacy = (props) => {
  console.log(props);
  return (
    <View style={styles.styleBackground}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styles.styleText}>
          Comfirm request when someone follow
        </Text>
        <Switch
          style={{ margin: 8}}
          onTintColor={'#1C64C8'}
          value={props.confirmFollow}
        />
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styles.styleText}>
          Who can follow you
        </Text>
        <Switch
          style={{ margin: 8}}
          onTintColor={'#1C64C8'}
          value={props.whoCanFollow}
        />
      </View>
      <View style ={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styles.styleText}>
          Who can comment on your posts
        </Text>
        <Switch
          style={{ margin: 8}}
          onTintColor={'#1C64C8'}
          value={props.shareMyPost}
        />
      </View>
      <View style= {{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styles.styleText}>
          Who can post on your timeline
        </Text>
        <Switch
          style={{ margin: 8}}
          onTintColor={'#1C64C8'}
          value={props.whoCanCommnet}
        />
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
        <Text style={styles.styleText}>
          Comfirm request when someone follow
        </Text>
        <Switch
          style={{ margin: 8}}
          onTintColor={'#1C64C8'}
          value={props.whoCanPost}
        />
      </View>
      <View>
        <Button
          title="SAVE"
          onPress={onButtonPress}
          color="#08bcde"
        />
      </View>
    </View>
  );
};
export default privacy ;
