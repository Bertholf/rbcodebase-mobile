import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   AsyncStorage,
   NetInfo,
} from 'react-native';
import moment from 'moment';
import auth from './../../services/auth';
import styles from './DashboardStyle';
import PushController from '../Notification/PushController';
import Logout from '../../services/logout';
import FollowingScheduler from '../../services/createFollowingListScheduler';

const chat = require('../../images/dashboard/chat.png');
const home = require('../../images/dashboard/home.png');
const modul = require('../../images/dashboard/panel.png');


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
    // Run FollowingScheduler
    FollowingScheduler();
    this.getTime();
    // Get Profile Data From server
    auth.profile()
    .then((response) => {
      // All response Should Saved into AsyncStorage
      this.setState({ profile: response.data, namefirst: response.data.name_first, namelast: response.data.name_last }, () => {
        AsyncStorage.multiSet([['userId', response.data.id.toString()], ['name_first', response.data.name_first.toString()],
         ['name_last', response.data.name_last.toString()], ['name_slug', response.data.name_slug.toString()], ['email', (response.data.email)],
         ['status', response.data.status.toString()], ['confirmed', response.data.confirmed.toString()],
         ['verified', response.data.verified.toString()],
         ['gender', response.data.gender.toString()],
         ['timeline_id', response.data.timeline_id.toString()],
        ['picture', response.data.picture.toString()],
        ])
         .then(() => {
           AsyncStorage.multiGet(['userId', 'name_first', 'name_last', 'name_slug', 'email',
             'status', 'confirmed', 'gender', 'verified', 'language', 'timeline_id', 'img_avatar', 'img_background',
             'referring_user_id', 'current_team_id', 'picture', 'registered', 'message',
           ])
        .then(res => console.log('==RESPONSE STORAGE==', res))
          .catch(err => console.log('ERROR SAVE 1', err));
         });
      });
    })
    .catch((err) => {
      if (err.response.data.error === 'Unauthenticated') {
        Logout();
      } else {
        AsyncStorage.getItem('name_first').then((res) => { this.setState({ namafirst: res }); });
        AsyncStorage.getItem('name_last').then((res) => { this.setState({ namalast: res }); });
      }
    });
  }

  syncWithServer(lastSave, now) {
    /** get Time Diff */
    // const now = moment(new Date());
    // const end = moment('2017-04-02');
    // const duration = moment.duration(now.diff(end));
    // const hours = duration.asHours();
    // console.log('Difference Hours', hours);
    const duration = moment.duration(moment(now).diff(lastSave));
    const durationHours = duration.asHours();

    /** Check if durationHours >= 2 */
    if (durationHours >= '2') {
      // Place all save data method Here

      /**
       * getFollowingData();
       * getFollowerData();
       */
      FollowingScheduler(); // Get and save Following data list

      console.log('Data is udpated'); // Log all method has running
    } else {
      console.log('Data up to date'); // Log data is up to date
    }
  }

  getTime() {
    // Get time Difference
    // Check in AsyncStorage if there is a last sync data time
    const end = moment(new Date()).toISOString();
    AsyncStorage.getItem('lastSyncData')
    .then((res) => {
      if (res === 'null' || typeof res === 'undefined') {
        const now = moment(new Date());
        AsyncStorage.setItem('lastSyncData', now.toString())
        .then(resp => console.log('SAVED TIME', resp));
      }
      console.log('TIME ==========', res);
      this.syncWithServer(res, end);
    }).catch(err => console.log('==== ERROR TIME =====', err));
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
              <Image style={styles.account} source={require('../../images/user.png')} /> : <Image source={{ uri: this.state.profile.picture }} style={styles.account} />
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
