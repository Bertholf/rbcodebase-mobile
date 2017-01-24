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

const alertMessage = 'Choose Image/Video';
const alertMessage1 = 'You will chat with Mr/Ms';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  containerImgMenu: {
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  imgMenu: {
    width: 30,
    height: 30,
    marginTop: 3,
  },
  inputSearch: {
    width: 300,
    height: 35,
    color: 'white',
    borderRadius: 3,
  },
  attachFile: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  avatarFriend: {
    flexDirection: 'row',
  },
  avatarImg: {
    width: 40,
    height: 40,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 3,
  },
  content: {
    flex: 1,
    backgroundColor: '#E8EAF6',
  },
  contentLeft: {
    marginLeft: 10,
  },
  contentRight: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  chatText: {
    fontSize: 15,
    color: '#263238',
  },
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    marginBottom: 5,
    height: 45,
  },
  inputChat: {
    width: 295,
    height: 35,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 5,
    borderRadius: 3,
  },
  sendBtn: {
    fontSize: 15,
    fontWeight: '100',
    backgroundColor: '#fff',
    color: '#2979FF',
    height: 35,
    width: 50,
    borderRadius: 3,
    marginBottom: 5,
    marginLeft: 5,
    paddingLeft: 7,
    paddingTop: 5,
  },

});

class chatLayout extends component {
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

  onViewMsg() {
    // var msg = {msgText[] => this.state.message};
    this.state.msgText;
  }

  onReceiveMsg() {
    this.state.msgReceive;
    console.log(this.state.msgReceive);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.containerImgMenu}>
            <Image
              style={styles.imgMenu}
              source={require('./app/images/ic_menu_white_24dp.png')}
            />
            <TextInput
              style={styles.inputSearch}
              placeholder="Find Friends"
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
                source={require('./app/images/ic_attach_file_white_24dp.png')} />
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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
                source={require('./app/images/64x64.png')}
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

AppRegistry.registerComponent('chatLayout', () => chatLayout);
