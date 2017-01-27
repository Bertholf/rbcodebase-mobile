import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import styles from './../../components/Privacy/style.js';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const privacy = () => {
  return (
    <View style= {styles.styleBackground}>
      <View>
      <TouchableOpacity>
        <Text style={styles.styleText}>
          Who can follow you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.styleText}>
          Who can see your posts
        </Text>
      </TouchableOpacity>
      </View>
      <View style= {styles.borderTextT}>
      <TouchableOpacity>
        <Text style={styles.textCenter}>
          Who can contact me?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textCenter}>
          How do i stop someone from bothering me?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textCenter}>
          who can see my stuff ?
        </Text>
      </TouchableOpacity>
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
export default privacy;
