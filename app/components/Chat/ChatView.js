import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

const alertMessage = 'Choose Image/Video';
export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      msgText: [],
      msgReceive: 'message Receive',
    };
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
      <View style={{ flex: 1 }}>
        <View
          style={styles.OuterLayer}
        >
          <View style={{ marginLeft: 16 }}>
            <TouchableOpacity onPress={Actions.timelineList}>
              <Image
                style={{
                  width: 55,
                  height: 55,
                }}
                source={require('./../../images/backbutton.png')
              }
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6 }}>
            <Text style={{ fontSize: 24, color: 'white' }}>
              Chat View
            </Text>
          </View>
          <View style={{ marginRight: 16 }}>
            <TouchableHighlight
              onPress={() => Alert.alert(
                  'Alert Title',
                  alertMessage,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
                )}
            >
              <Image
                style={{
                  width: 35,
                  height: 35,
                  marginTop: 6,
                }}
                source={require ('./../../images/ic_attach_file_white_24dp.png')}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ flex: 6 }} />
        <View style={styles.LayoutTextChat}>
          <View
            style={styles.LayoutInputText}
          >
            <TextInput
              style={styles.TextInput}
              multiline={true}
              numberOfLines={5}
              placeholder="Type a message..."
              underlineColorAndroid="#2196f3"
              placeholderTextColor="#2196f3"
              value={this.state.message}
              onChangeText={({ text }) => this.setState({ message: text })}
            />
            <View style={{ backgroundColor: '#2196f3', borderRadius: 2, paddingLeft: 4, paddingRight: 4, justifyContent: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.onSendMessage()}
              >
                <Text
                  style={styles.TextSend}
                >
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
