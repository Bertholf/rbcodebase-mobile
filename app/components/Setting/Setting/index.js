import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import strings from '../../../localizations';
import styles from './../../../style/SettingStyle';
import auth from './../../../services/auth';
import Logout from '../../../services/logout';
import connectionInfo from '../../../services/connectionInfo';

const moment = require('moment');
const next = require('./../../../images/ic_navigate_next_2x.png');

import { connect } from 'react-redux';
import { getNetworkStatus } from '../../../actions/networkStatus';
export default class Setting extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      profile: {},
      loading: true,
      nameslug: '',
      namef: '',
      email: '',
      namel: '',
      birthday: '',
      phone: '',
      gender: '',
      gendersncy: '',
      isConnected: true,
      netstate: this.props.network,
    };
  }

  // Save dan get Item AsyncStorage from Api/me
  componentDidMount() {
    console.log('STATE REDUX', this.state.handler);
    // connectionInfo.checkInfo();
    auth
      .profile()
      .then((response) => {
        console.log('EMAIL CHANGE====', response);
        if (response.data.date_birth === null) {
          this.setState({
            namef: response.data.name_first,
            namel: response.data.name_last,
            nameslug: response.data.name_slug,
            email: response.data.email,
            gender: response.data.gender,
            phone: response.data.cell_number,
            birthday: 'Jan 1st 1992',
          });
        } else {
          this.setState({
            namef: response.data.name_first,
            namel: response.data.name_last,
            nameslug: response.data.name_slug,
            email: response.data.email,
            gender: response.data.gender,
            phone: response.data.cell_number,
            birthday: moment(response.data.date_birth, 'YYYY-MM-DD').format('MMM Do YYYY'),
          });
        }
      })
      .catch(() => {
        AsyncStorage.getItem('email')
          .then((res) => {
            this.setState({ email: res });
          })
          .catch(err => console.log('error ambil email-----', err));
        AsyncStorage.getItem('name_slug')
          .then((res) => {
            this.setState({ nameslug: res });
          })
          .catch(err => console.log('error ambil nama username-----', err));
        AsyncStorage.getItem('name_first')
          .then((res) => {
            this.setState({ namef: res });
          })
          .catch(err => console.log('error ambil namalengkap-----', err));
        AsyncStorage.getItem('name_last')
          .then((res) => {
            this.setState({ namel: res });
          })
          .catch(err => console.log('error ambil namalengkap--- --', err));
        AsyncStorage.getItem('date_birth')
          .then((res) => {
            this.setState({ birthday: res });
          })
          .catch(err => console.log('error ambil tanggal lahir--- --', err));
        AsyncStorage.getItem('cell_number')
          .then((res) => {
            this.setState({ phone: res });
          })
          .catch(err => console.log('error ambil tanggal lahir--- --', err));
        AsyncStorage.getItem('gender')
          .then((res) => {
            this.setState({ gender: res });
          })
          .catch(err => console.log('error ambil tanggal lahir--- --', err));
      });
  }

  componentWillReceiveProps(NextProps) {
    console.log('NETWORK STATE =', NextProps.network);
    this.setState({ netstate: NextProps.network });
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
            <TouchableOpacity onPress={() => Actions.nameEdit({ reRender: () => this.reRender() })}>
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ alignSelf: 'center' }}>{this.state.namef} {this.state.namel}</Text>
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
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.genderEdit({ reRender: () => this.reRender() })}
            >
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.gender}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ alignSelf: 'center' }}>{this.state.gender}</Text>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.editbirthday({ reRender: () => this.reRender() })}
            >
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
            <TouchableOpacity
              onPress={() => Actions.mobilephone({ reRender: () => this.reRender() })}
            >
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.mobile}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ alignSelf: 'center' }}>{this.state.phone}</Text>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.emailEdit}>
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
            <TouchableOpacity onPress={Actions.adpref}>
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.privacysetting}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.EmailSetting}>
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.emailsetting}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.titleText}>{strings.settings.more_info}</Text>
            <TouchableOpacity
              onPress={this.state.netstate ? Actions.support : () => console.log('Disabled')}
            >
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.support}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.state.netstate ? Actions.pp : () => console.log('Disabled')}
            >
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.Privacy_policy}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.state.netstate ? Actions.tos : console.log('Disabled')}>
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.tos}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.state.netstate ? Actions.license : () => console.log('Disabled')}
            >
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
            <TouchableOpacity onPress={Actions.account}>
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.clear_cache}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={next} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('', strings.logoutLocalization.AreYouSure, [
                  {
                    text: strings.logoutLocalization.cancel,
                    onPress: () => console.log('cancelled Pressed'),
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      Logout();
                    },
                  },
                ])}
            >
              <View style={styles.list}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={styles.text}>{strings.settings.log_out}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
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
