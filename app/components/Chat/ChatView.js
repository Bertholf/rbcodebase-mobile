import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
const search1 = require('./../../images/search1.png');
import styles from './styles';
const alertMessage = 'Choose Image/Video';
const alertMessage1 = 'You will chat with Mr/Ms';

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      msgText: [],
      text: '',
      msgReceive: 'message Receive',
    };
  }

  onSearch() {
    console.log(this.state.text);
    this.setState({ text: '' });
  }

  onSendMessage() {
    console.log(this.state.message);
    this.setState({ message: '' });
  }

  onReceiveMsg() {
    this.state.msgReceive;
    console.log(this.state.msgReceive);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <TextInput
            style={styles.inputChat}
            placeholder="Search Anything..."
            value={this.state.text}
            onChangeText={(text) => this.setState({ text: text })}
          />
          <TouchableHighlight
            onPress={() => this.onSearch()}
          >
            <Image style={styles.searchBtn} source={search1}/>
          </TouchableHighlight>
        </View>
        <View>
          <Text>
            hellow
          </Text>
        </View>
        <View style={styles.footer}>
          <TextInput
            style={styles.inputChat}
            placeholder="Type a message..."
            value={this.state.message}
            onChangeText={(text) => this.setState({ message: text })}
          />
          <TouchableHighlight
            onPress={() => this.onSendMessage()}
          >
            <Text style={styles.sendBtn}>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
