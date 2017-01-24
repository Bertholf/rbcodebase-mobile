import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator,StyleSheet, BackAndroid, TextInput, Button } from 'react-native';

export default class TimelineComment extends Component {
  state: {
    text: ''
  }
  render() {
    return(
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            Style={styles.comment}
            placeholder="Your Comment..."
            onChangeText={(text) => this.setState({text})}
            multiline={true}
          />
          <Button
            title='Post Comment'
            color='#009688'
            accessibilityLabel= 'Post Your Comment'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 2,
    paddingTop: 16,
    paddingBottom: 16,
    margin: 16,
  },
  comment: {
    paddingTop: 16,
    borderWidth: 1,
    paddingBottom: 16,
  },
  button: {
    borderRadius: 2,
    height:32,
    margin: 16,
    fontSize: 13,
  }
})
