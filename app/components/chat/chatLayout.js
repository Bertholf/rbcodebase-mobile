import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ListView
} from 'react-native';

class chatLayout extends component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      msgText: [],
      msgReceive:'message Receive'
    };
  }

  onSendMessage() {
    console.log(this.state.message);
    this.setState({message: ''});
  }

  onViewMsg(){
    // var msg = {msgText[] => this.state.message};
    this.state.msgText;
  }

  onReceiveMsg(){
    this.state.msgReceive
    console.log(this.state.msgReceive);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.containerImgMenu}>
          <Image
            style={styles.imgMenu}
            source={require('./app/images/ic_menu_black_48dp.png')} />
          </View>
          <View style={styles.avatarFriend}>
            <Image
              style={styles.avatarImg}
              source={require('./app/images/64x64.png')} />
            <Image
              style={styles.avatarImg}
              source={require('./app/images/64x64.png')} />
            <Image
              style={styles.avatarImg}
              source={require('./app/images/64x64.png')} />
              <Image
                style={styles.avatarImg}
                source={require('./app/images/64x64.png')} />
              <Image
                style={styles.avatarImg}
                source={require('./app/images/64x64.png')} />
              <Image
                style={styles.avatarImg}
                source={require('./app/images/64x64.png')} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentLeft}>
          <Image
            source={require('./app/images/img-buble.png')} />
            <Text>messga</Text>
          </View>
          <View style={styles.contentRight}>
          <Image
            source={require('./app/images/img-buble.png')} />
            <Text>{this.onViewMsg()}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            style={styles.inputChat}
            placeholder= "Write message..."
            value={this.state.message}
            onChangeText={(text) => this.setState({message: text})}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  containerImgMenu: {
    backgroundColor: '#2979FF',
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  imgMenu: {
    width: 30,
    height: 30,
  },
  avatarFriend: {
    flexDirection:'row',
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
  },
  contentLeft: {
  },
  contentRight: {
    alignItems: 'flex-end'
  },
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#2979FF',
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
  }

});

AppRegistry.registerComponent('ReactProject', () => ReactProject);
