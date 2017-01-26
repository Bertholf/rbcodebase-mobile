import React, { Component } from 'react';
import {
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

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {email: ''}
  }

  static propTypes = { url: React.PropTypes.string };

  render() {
    const changeMe = () => {Alert.alert('Tombol Button di Tekan!')}
    return (
      <View style={styles.container}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
          source={require('./../../images/logo.png')} style={styles.image} />
        </View>
        <TextInput
            style={{height: 40}} onChangeText={(email) => this.setState({email})}
            placeholder="Email or Phone"
          />
        <TouchableHighlight style={styles.button} onPress={changeMe} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    flex: 1,
    backgroundColor: '#dddddd',
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
  image: {
    marginBottom : 100,
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  button: {
    height: 36,
    backgroundColor: '#009688',
    borderColor: '#26A69A',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
