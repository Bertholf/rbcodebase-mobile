import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
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
    }
  }
  componentDidMount() {
    auth.profile()
    .then(response => this.setState({ profile: response.data }))
    .catch(Err => Err);
  }
  reRender() {
    this.componentDidMount();
    console.log('RERENDER TRIGGERD');
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
                <Text style={{ alignSelf: 'center'}}>{this.state.profile.name_first} {this.state.profile.name_last}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.usernameEdit({ reRender: () => this.reRender() })}>
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.user_name}</Text>
              </View>
              <View style={{ flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center' }}>{this.state.profile.name_slug}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.editbirthday}>
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.birthday}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center' }}>{this.state.profile.date_birth}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.mobilephone} >
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>{strings.settings.mobile}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center'}}>+621293823</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.emailEdit} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.email}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>{this.state.profile.email}</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.passEdit}>
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
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
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.privacy}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.notifications} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.notification}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.adpref} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.ad_Preference}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.more_info}</Text>
          <TouchableOpacity onPress={Actions.support} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.support}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.pp} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.Privacy_policy}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.tos} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.tos}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.license} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.licence}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.account_action}</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.clear_cache}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
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
              console.log('OK Pressed')}},
            ]
          ) }
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
