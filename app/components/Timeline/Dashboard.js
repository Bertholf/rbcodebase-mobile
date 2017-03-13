import React, { Component } from 'react';
import {
   Text,
   View,
   Image,
   TouchableOpacity,
   AsyncStorage,
} from 'react-native';
import auth from './../../services/auth';
import styles from './DashboardStyle';
import PushController from '../Notification/PushController';
import { Actions } from 'react-native-router-flux';
import Logout from '../../services/logout';

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
    };

  }
  componentDidMount() {
    // auth.changeemail()
    // then((response) => {
    //   this.setState({ changeemail: response.data}, () => {
    //     console.log('=====emailnew endpoint=======', this.state.changeemail);
    //     console.log('========== RESPONSE SERVER =========', response);
    //     AsyncStorage.setItem('email', response.data.email())
    //   })
    //   .then(() => {
    //     console.log('SAVE email');
    // })
    auth.profile()
    .then((response) => {
        this.setState({ profile: response.data, namefirst: response.data.name_first, namelast: response.data.name_last }, () => {
        console.log('===== profile result =====', this.state.profile);
        console.log('========== RESPONSE SERVER =========', response);
        AsyncStorage.multiSet([['userId', response.data.id.toString()], ['name_first', response.data.name_first.toString()],
         ['name_last', response.data.name_last.toString()], ['name_slug', response.data.name_slug.toString()], ['email', (response.data.email)],
         ['status', response.data.status.toString()], ['confirmed', response.data.confirmed.toString()],
         ['verified', response.data.verified.toString()],
         ['timeline_id', response.data.timeline_id.toString()],
        //  ['img_avatar', response.data.img_avatar.toString()],
        // ['referring_user_id', response.data.referring_user_id.toString()],
        // ['current_team_id', response.data.curresnt_team_id.toString()],
        ['picture', response.data.picture.toString()],
        ])
         .then(() => {
           console.log('SAVE USERDATA 1');
          //  AsyncStorage.multiGet(['name_first', 'name_last'])
           AsyncStorage.multiGet(['userId', 'name_first', 'name_last', 'name_slug', 'email',
             'status', 'confirmed', 'verified', 'language', 'timeline_id', 'img_avatar', 'img_background',
             'referring_user_id', 'current_team_id', 'picture', 'registered', 'message',
           ])
        .then(res => console.log('==RESPONSE STORAGE==', res))
          .catch(err => console.log('ERROR SAVE 1', err));
           console.log('SAVE USERDATA 2 ');
         })
         .catch(err => console.log('SAVE FAILED', err));
      });
    })
    .catch((err) =>{
      if (err.response.data.error === 'Unauthenticated'){
        Logout()
      } else{
        AsyncStorage.getItem('name_first').then((res) => { this.setState({ namafirst: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.namafirst); }).catch(res => console.log('error ambil nama-----', res));
        AsyncStorage.getItem('name_last').then((res) => { this.setState({ namalast: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.namalast); }).catch(res => console.log('error ambil nama-----', res));
      }
      });
  }

  reRender() {
    this.componentDidMount();
  }

  render() {
    // {this.nama(); }
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
