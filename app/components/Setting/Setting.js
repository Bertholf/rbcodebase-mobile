import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';
import styles from './../../components/Setting/Style';
import auth from './../../services/auth';
import Logout from '../../services/logout';

const next = require('./../../images/ic_navigate_next_2x.png');

export default class Setting extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile: {},
      loading: true,
      nameslug: '',
      namef: '',
      email: '',
      namel: '',
      birthday: '',
      phone: '',
    };
  }
  componentDidMount() {
    auth.profile()
    .then((response) => {
      this.setState({ namef: response.data.name_first, namel: response.data.name_last, nameslug: response.data.name_slug, email: response.data.email, birthday: response.data.date_birth, phone: response.data.cell_number },  () => {
        AsyncStorage.multiSet([['userId', response.data.id.toString()],
         ['name_first', response.data.name_first.toString()],
         ['name_last', response.data.name_last.toString()],
         ['name_slug', response.data.name_slug.toString()],
         ['email', (response.data.email)],
         ['date_birth', response.data.date_birth.toString()],
         ['status', response.data.status.toString()], ['confirmed', response.data.confirmed.toString()],
         ['verified', response.data.verified.toString()],
         ['timeline_id', response.data.timeline_id.toString()],
         ['picture', response.data.picture.toString()],
         ['cell_number', response.data.cell_number.toString()],
        ])
         .then(() => {
           AsyncStorage.multiGet(['userId', 'name_first', 'name_last', 'name_slug', 'email', 'date_birth',
             'cell_number', 'status', 'confirmed', 'verified', 'language', 'timeline_id', 'img_avatar', 'img_background',
             'referring_user_id', 'current_team_id', 'picture', 'registered', 'message',
           ])
        .then(res => console.log('==RESPONSE STORAGE==', res))
          .catch(err => console.log('ERROR SAVE 1', err));
           console.log('SAVE USERDATA 2 ');
         })
         .catch(err => console.log('SAVE FAILED', err));
      });
    })
    .catch(Err => {AsyncStorage.getItem('email').then((res) => { this.setState({ email: res }); console.log('NAMAAAA KAMUUUUU=====',this.state.email); }).catch((res) => console.log('error ambil email-----'));
    AsyncStorage.getItem('name_slug').then((res) => { this.setState({ nameslug: res }); console.log('NAMAAAA KAMUUUUU=====',this.state.namaslug); }).catch((res) => console.log('error ambil nama username-----'));
    AsyncStorage.getItem('name_first').then((res) => { this.setState({ namef: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.namef); }).catch((res) => console.log('error ambil namalengkap-----'));
    AsyncStorage.getItem('name_last').then((res) => { this.setState({ namel: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.namel); }).catch((res) => console.log('error ambil namalengkap--- --'));
    AsyncStorage.getItem('date_birth').then((res) => { this.setState({ birthday: res }); console.log('BIRTHDAY KAMUUUUU=====', this.state.birthday); }).catch((res) => console.log('error ambil tanggal lahir--- --'));
    AsyncStorage.getItem('cell_number').then((res) => { this.setState({ phone: res }); console.log('PHONE KAMUUUUU=====', this.state.phone); }).catch((res) => console.log('error ambil tanggal lahir--- --'));

  });
  }

  reRender() {
    this.componentDidMount();
  }
  render() {
    return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>{strings.settings.account}</Text>
          <TouchableOpacity onPress={() => Actions.nameEdit({ reRender: () => this.reRender() })} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.name}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center' }}>{this.state.namef} {this.state.namel}</Text>
                {/* {this.state.profile.name_first} {this.state.profile.name_last} */}
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Actions.usernameEdit({ reRender: () => this.reRender() })}
          >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.user_name}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center' }}>{this.state.nameslug}</Text>
                {/* {this.state.profile.name_slug} */}
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.editbirthday({ reRender: () => this.reRender() })}>
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.birthday}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center' }}>{this.state.birthday}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.mobilephone({ reRender: () => this.reRender() })}>
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.mobile}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center'}}>{this.state.phone}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.emailEdit} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.email}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
              <Text style={{ alignSelf: 'center' }}>{this.state.email}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.passEdit}>
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.password}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center' }}>********</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.preference}</Text>
          <TouchableOpacity onPress={Actions.pp} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.privacy}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.notifications} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.notification}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.adpref} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.ad_Preference}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.more_info}</Text>
          <TouchableOpacity onPress={Actions.support} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.support}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.pp} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.Privacy_policy}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.tos} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.tos}</Text>
              </View>
              <View style={{ flexDirection : 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.license} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.licence}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.account_action}</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.clear_cache}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress=
             {() => Alert.alert(
            '',
            strings.logoutLocalization.AreYouSure,
               [
                 { text: strings.logoutLocalization.cancel, onPress:() => console.log('cancelled Pressed')},
                 { text: 'OK', onPress:  () => { Logout() ;
                 } },
               ]
          )}
          >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.log_out}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
  }
}
