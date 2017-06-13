import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  NetInfo,
  Dimensions,
} from 'react-native';
// import MessageBarAlert from 'react-native-message-bar';
// import MessageBarManager from 'react-native-message-bar';
import { Right, Left, Bottom, Top } from 'native-base';
const { width, height } = Dimensions.get('window');

const cloud = require('../images/cloud.png');
export default class WarningDisconnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
      hide: false,
    };
    this.timer = null;
  }
  componentDidMount() {
    // MessageBarManager.registerMessageBar(this.refs.alert);
    NetInfo.isConnected.addEventListener('change', this._handleConnectivityChange);

    NetInfo.isConnected.fetch().done(isConnected => {
      console.log('CONNECTION START', isConnected), this.setState({ isConnected });
    });
    // Get Profile Data From server
  }

  componentWillUnmount() {
    //  MessageBarManager.unregisterMessageBar();
    NetInfo.isConnected.removeEventListener('change', this._handleConnectivityChange);
  }

  _handleConnectivityChange = isConnected => {
    this.setState({
      isConnected,
    });
    console.log('CHANGE TO=====', isConnected);
  };

  reRender() {
    this.setState({ hide: false }, () => {
      this.componentDidMount();
    });
  }
  hidepopup() {
    clearTimeout(this.timer);
    this.setState({ hide: true });
    this.timer = setTimeout(() => this.reRender(), 9200);
    // if (this.state.requesting) {
    //   follows.cancelCaller().cancel('Cancel this operation');
    //   this.searchUpdate(value);
    // }
    // this.searchUpdate(value);
  }

  render() {
    console.log('isConnected ', this.state.isConnected, 'hide ', this.state.hide);
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {this.state.isConnected == false && this.state.hide == false
          ? <TouchableOpacity
              style={{ width: width * 1, height: 45, backgroundColor: '#ffa722' }}
              // onPress={() => {
              //   this.setState({ hide: true });
              // }}
              onPress={() => this.hidepopup()}
            >
              <Image
                style={{ width: 20, height: 20, position: 'absolute', left: 30, top: 10 }}
                source={cloud}
              />
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 14 }}>
                Network Information
              </Text>
              <Text style={{ color: 'white', textAlign: 'center' }}>Device is not connected</Text>
            </TouchableOpacity>
          : <View />}
      </View>
    );
  }
}
