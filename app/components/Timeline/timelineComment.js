import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

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
    height: 32,
    margin: 16,
    fontSize: 13,
  },
});
export default class TimelineComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            Style={styles.comment}
            placeholder={'Your Comment...'}
            onChangeText={(text) => this.setState({ text })}
            multiline={true}
          />
          <Button
            title={'Post Comment'}
            color={'#009688'}
            accessibilityLabel={'Post Your Comment'}
          />
        </View>
      </View>
    );
  }
}
