import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import styles from './styles';

const alertMessage = 'Choose Image/Video';
const alertMessage1 = 'You will chat with Mr/Ms';
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
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.containerImgMenu}>
            <Image
              style={styles.imgMenu}
              source={require('./../../images/ic_menu_white_24dp.png')}
            />
            <TextInput
              style={styles.inputSearch}
              placeholder="Find Friends"
              placeholderTextColor="white"
              // value={this.state.message}
              // onChangeText={(text) => this.setState({message: text})}
            />
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                  'Alert Title',
                  alertMessage,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
                )}
            >
              <Image
                style={styles.attachFile}
                source={require('./../../images/ic_attach_file_white_24dp.png')}
              />
            </TouchableHighlight>

          </View>
          <View style={styles.avatarFriend}>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.wrapper}
              onPress={() => Alert.alert(
                'Alert Title',
                alertMessage1,
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed!') },
                ],
              )}
            >
              <Image
                style={styles.avatarImg}
                source={require('./../../images/64x64.png')}
              />
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentLeft}>
            <Text style={styles.chatText}>Receive Message</Text>
          </View>
          <View style={styles.contentRight}>
            <Text style={styles.chatText}>Send Message</Text>
          </View>
        </View>
      </View>
    <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
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
    </View>
    );
  }
}
