import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  Alert,
  ListView,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const logo = require('./../../images/RegisterScreen/user.png');
const google = require('./../../images/google-plus.png');
const facebook = require('./../../images/facebook.png');
const twitter = require('./../../images/twitter.png');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  logo: {
    margin: 20,
    height: 100,
    width: 100,
  },
  textInput: {
    width: width * 0.9,
    height: 50,
  },
  btnReg: {
    width: width * 0.9,
    height: 50,
    backgroundColor: '#2196f3',
    padding: 8,
    borderRadius: 3,
    bottom: 10,
  },
  textReg: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonGroup: {
    top: 10,
    width: width * 0.8,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    alignSelf: 'stretch',
  },
  separatorText: {
    fontSize: 20,
  }

});

export default class Register extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      name: '',
      email: '',
      username: '',
      gender: '',
      password: '',
      dataSource: ds.cloneWithRows(['Male', 'Female']),
    };
  }
  register(){
    Alert.alert('Button pressed');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          placeholder={'Name'}
          style={styles.textInput}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          placeholder={'Email'}
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder={'Username'}
          style={styles.textInput}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholder={'Gender'}
          style={styles.textInput}
          onChangeText={gender => this.setState({ gender })}
        />
        <TextInput
          placeholder={'Password'}
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.btnReg}
          onPress={this.register}
        >
          <Text style={styles.textReg}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={this.register} >
            <Image source={google} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.register} >
            <Image source={facebook} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.register}>
            <Image source={twitter} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
