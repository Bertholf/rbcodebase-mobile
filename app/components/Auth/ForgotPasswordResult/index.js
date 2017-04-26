import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../../../style/StyleGlobal';
import stylescomp from './style';
import auth from '../../../services/auth';
import strings from '../../../localizations';
const { width } = Dimensions.get('window');
const image = require('../../../../app/images/user.png');

export default class ResultForgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      loading: false,
      submit: false,
    };
  }
  sendLink() {
    this.setState({ loading: true });
    auth
      .sendlink(this.state.email)
      .then((res) => {
        Alert.alert('Success', res.message);
        Actions.loginscreenemail();
        // loading will stop when succes sendlink email
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({ fail: false, loading: false });
      })
      .catch();
  }

  render() {
    return (
      <View style={stylescomp.container}>
        <View style={stylescomp.topContent}>
          <Image style={stylescomp.image} source={image} />
          <Text style={stylescomp.name}>
            {this.state.name}
          </Text>
          <Text style={stylescomp.email}>
            {this.state.email}
          </Text>
        </View>
        <View style={{ marginTop: 20, justifyContent: 'center', flex: 1.5 }}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Text style={{ fontSize: 15, alignSelf: 'center' }}>{strings.ForgotPass.notme}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.5, backgroundColor: '#039be5', width, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => this.sendLink()}>
            <View>
              {this.state.loading
                ? <ActivityIndicator color={'#fff'} />
                : <Text style={styles.buttonText}>{strings.ForgotPass.sendLink}</Text>}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
