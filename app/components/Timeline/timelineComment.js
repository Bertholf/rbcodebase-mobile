import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator,StyleSheet, BackAndroid, TextInput, Button } from 'react-native';

export default class TimelineComment extends Component {
  state: {
    text: ''
  }
  render() {
    return(
      <View style={styles.inputContainer}>
        <TextInput
          Style={styles.comment}
          placeholder="Your Comment"
          onChangeText={(text) => this.setState({text})}
          multiline={true}
        />
        <Button
          title='Post Comment'
          color='#2196F3'
          accessibilityLabel= 'Post Your Comment'
          onPress={() => console.log('OK Pressed!')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 2,
    paddingTop: 16,
    paddingBottom: 16
  },
  comment: {
    paddingTop: 16,
    borderWidth: 1,
    paddingBottom: 16,
  },
})
