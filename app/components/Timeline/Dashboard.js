import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   Dimensions,
   ActivityIndicator,
} from 'react-native';
import auth from './../../services/auth';
import { Actions } from 'react-native-router-flux';
import styles from './DashboardStyle';
import { AsyncStorage } from 'react-native';

const { width, height } = Dimensions.get('window');
const chat = require('../../images/dashboard/chat.png');
const home = require('../../images/dashboard/home.png');
const account = require('../../images/dashboard/account.png');
const modul = require('../../images/dashboard/panel.png');



export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile:{},
      loading: true,
    };
  }

  // componentDidMount() {
  //   auth.profile()
  //   .then(response => this.setState({ profile: response.data }, ()=> console.log(this.state)))
  //   .catch(Err => console.log('err,Err'));
  // }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.goUp()}>
          <View style={{ justifyContent: 'flex-end' }}>
            <Image source={{uri:this.state.profile.picture}} style={styles.account} />
          </View>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop : 100, fontSize : 18 }} > {this.state.profile.name_first} {this.state.profile.name_last} </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => this.props.goLeft()}>
                <Image
                  style={styles.icon}
                  source={modul} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => this.props.goDown()}>
              <Image
                style={styles.icon}
                source={home}     />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.goRight()}>
              <Image
                style={styles.icon}
                source={chat} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
