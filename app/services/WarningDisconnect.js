import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   AsyncStorage,
   NetInfo,
} from 'react-native';
// import MessageBarAlert from 'react-native-message-bar';
// import MessageBarManager from 'react-native-message-bar';

export default class WarningDisconnect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null,
    };
  }
  componentDidMount() {
   // MessageBarManager.registerMessageBar(this.refs.alert);
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { 
            console.log('CONNECTION', isConnected),
            this.setState({isConnected});
           }
    );
    // Get Profile Data From server
  }

   

  componentWillUnmount() {
  //  MessageBarManager.unregisterMessageBar();
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };



  render() {
    return (

          <View  style={{    flex: 1, position:'absolute'}}>{!this.state.isConnected ?
           <View style={{width: 400, height: 45, backgroundColor: '#ffa722'}} >
              <Text style={{color:'white', textAlign:'center', fontSize: 14}}>Network Information</Text>
              <Text style={{color:'white', textAlign:'center'}}>Device is not connected</Text>
            </View> : <View />}
          </View>
    
    );
  }
}
