
import React, { Component } from 'react'
import styles from './style';
import {
   View,
   Image,
   TouchableOpacity,
   TextInput,
   StyleSheet,
   Button,
   Keyboard
} from 'react-native';
// @flow
const icon = require('./../../../images/ic_send_white_24dp.png')

export default CommentPost = (props:Object) => (
      <View style = {styles.inputContainer}>
        <View style={styles.box}>
          <TextInput
            style={styles.comment}
            placeholder = 'Comment'
            autoCapitalize = 'none'
            onChangeText = {props.updateText}
            multiline = {true}
            underlineColorAndroid = "rgba(0,0,0,0)" />
            <TouchableOpacity onPress = { () => {
              props.postComment(props.updateText)
            }}>
                <Image
                  style={styles.icon}
                  source={icon}
                />
            </TouchableOpacity>
        </View>
      </View>
);
