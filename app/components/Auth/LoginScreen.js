import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TextInput,
  Linking,
  Alert

} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  password: '',
                    }
  }

  static propTypes = {
    url: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    const changeMe = () => {Alert.alert('Tombol Button di Tekan!')}
    return (
      <View style={styles.container}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={{uri: 'http://icons.iconarchive.com/icons/thegirltyler/brand-camp/256/Hiking-Backpack-icon.png'}}
       style={{width: 100, height: 100, resizeMode: 'cover'}} />
        </View>
        <TextInput
            style={{height: 40}} onChangeText={(username) => this.setState({username})}
            placeholder="Username"
          />
          <TextInput
            secureTextEntry={true} style={{height: 40}} onChangeText={(password) => this.setState({password})}
            placeholder="Password"
            />
        <TouchableHighlight style={styles.button} onPress={changeMe} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <Text style={{color : 'blue', margin : 10, textAlign :'right' }}
                onPress={() => Linking.openURL('http://google.com')}>
            Forgot Password
          </Text>
        <TouchableHighlight style={styles.google} onPress={changeMe} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.facebook} onPress={changeMe} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#E65100',
    borderColor: '#EF6C00',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  facebook: {
    height: 36,
    backgroundColor: '#0D47A1',
    borderColor: '#1565C0',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  google: {
    height: 36,
    backgroundColor: '#E53935',
    borderColor: '#F44336',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
AppRegistry.registerComponent('TestDrive', () => TestDrive);
