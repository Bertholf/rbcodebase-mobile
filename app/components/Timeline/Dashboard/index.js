import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   AsyncStorage,
} from 'react-native';
import auth from '../../../services/auth';
import styles from './style';
import PushController from '../../Notification/PushController';
import Logout from '../../../services/logout';
import runDb from '../../../db/FollowingSchema';
import runDbFollower from '../../../db/FollowerSchema';

const chat = require('../../../images/dashboard/chat.png');
const home = require('../../../images/dashboard/home.png');
const modul = require('../../../images/dashboard/panel.png');

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loading: true,
      namafirst: '',
      namalast: '',
      email: '',
      isConnected: null,
    };
  }
  componentDidMount() {
    // Get Profile Data From server
    runDb();
    runDbFollower();
    auth.profile()
    .then((response) => {
      // All response Should Saved into AsyncStorage
      this.setState({ profile: response.data, namefirst: response.data.name_first, namelast: response.data.name_last }, () => {
        AsyncStorage.multiSet([
         ['userId', response.data.id.toString()],
         ['name_first', response.data.name_first.toString()],
         ['name_last', response.data.name_last.toString()],
         ['name_slug', response.data.name_slug.toString()],
         ['email', (response.data.email)],
         ['status', response.data.status.toString()],
         ['confirmed', response.data.confirmed.toString()],
         ['verified', response.data.verified.toString()],
         ['gender', response.data.gender.toString()],
         ['timeline_id', response.data.timeline_id.toString()],
         ['picture', response.data.picture.toString()],
        ]);
      });
    })
    .catch((err) => {
      if (err.message === 'Unauthenticated') {
        Logout();
      } else {
        AsyncStorage.getItem('name_first').then((res) => { this.setState({ namafirst: res }); });
        AsyncStorage.getItem('name_last').then((res) => { this.setState({ namalast: res }); });
      }
    });
  }


  reRender() {
    // This is going to re-run componentDidMount()
    this.componentDidMount();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.goUp()}>
          <View style={{ justifyContent: 'flex-end' }}>
            {this.state.profile.picture == null ?
              <Image style={styles.account} source={require('../../../images/user.png')} /> : <Image source={{ uri: this.state.profile.picture }} style={styles.account} />
          }
          </View>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', marginTop: 100, fontSize: 18 }} >
          {this.state.namafirst} {this.state.namalast}
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => this.props.goLeft()}>
                <Image
                  style={styles.icon}
                  source={modul}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => this.props.goDown()}>
              <Image
                style={styles.icon}
                source={home}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.goRight()}>
              <Image
                style={styles.icon}
                source={chat}
              />
            </TouchableOpacity>
          </View>
        </View>
        <PushController />
      </View>
    );
  }
}
