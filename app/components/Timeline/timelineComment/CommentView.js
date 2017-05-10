
import React, { Component } from 'react'
import styles from './style';
import {
   View,
   Text,
   TouchableOpacity,
   TextInput,
   StyleSheet,
   Button,
   Keyboard
} from 'react-native';
// @flow
export default CommentPost = (props:Object) => (
      <View style = {styles.inputContainer}>
         <TextInput
            style={styles.comment}
            placeholder = 'Comment'
            autoCapitalize = 'none'
            onChangeText = {props.updateText}
            multiline = {true}
            underlineColorAndroid = "rgba(0,0,0,0)" 
         /> 
         <TouchableOpacity onPress = { () => props.postComment(props.updateText)}>
            <Text style={styles.Button}>Send</Text>
         </TouchableOpacity>

      </View>
);


