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


  componentDidMount() {
    auth.profile()
    .then((response) => {
       this.setState({ profile: response }, () => {
         console.log('profile', this.state.profile);
         AsyncStorage.multiSet([['userId', JSON.stringify(response.data.id)], ['name_first',(response.data.name_first)],
         ['name_last', (response.data.name_last)], ['name_slug', (response.data.name_slug)], ['email', (response.data.email)],
         ['status',JSON.stringify(response.data.status)], ['confirmed',JSON.stringify(response.data.confirmed)],
         ['verified', JSON.stringify(response.data.verified)], ['language',(response.data.language)],
         ['timezone',(response.data.timezone)], ['timeline_id', JSON.stringify(response.data.timeline_id)],
         ['img_avatar', JSON.stringify(response.data.img_avatar)], ['img_background', JSON.stringify(response.data.img_background)],
        ['referring_user_id', JSON.stringify(response.data.referring_user_id)], ['created_at', JSON.stringify(response.data.created_at)],
        ['updated_at', JSON.stringify(response.data.updated_at)], ['deleted_at', JSON.stringify(response.data.deleted_at)],
        ['current_team_id', JSON.stringify(response.data.current_team_id)],
        ['picture', JSON.stringify(response.data.picture)], ['registered', JSON.stringify(response.data.registered)], ['message', (response.message)]
          ] )
         .then(() => {
           AsyncStorage.multiGet(['userId', 'name_first', 'name_last', 'name_slug', 'email',
             'status', 'confirmed', 'verified', 'language', 'timezone', 'timeline_id', 'img_avatar', 'img_background',
             'referring_user_id', 'created_at', 'updated_at', 'deleted_at', 'current_team_id', 'picture', 'registered', 'message'
          ])
        .then((id) => console.log('==USER ID==', id));
           console.log('SAVE USERDATA SUKSES')})
         .catch((err) => console.log('SAVE FAILED', err));
       });

     })
    .catch(Err => console.log('err,Err'));
  }
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
