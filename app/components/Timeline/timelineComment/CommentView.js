
import React, { Component } from 'react'
import styles from './style';
import {
   View,
   Text,
   TouchableHighlight,
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
           
         /> 
         <Button
            style = {styles.Button}
            onPress = { () => props.postComment(props.updateText)}
            title="Submit Comment"
            />

      </View>
);


