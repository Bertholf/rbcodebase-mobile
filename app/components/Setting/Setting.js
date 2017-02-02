import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './../../components/Setting/Style';
import setting from '../../services/setting';

export default class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: {},
      loading: true,
    };
  }

  componentDidMount() {
    setting.getSetting()
    .then(data => (
      this.setState({ setting: data, loading: false })
    ));
  }

  render() {
    if (!this.state.loading){
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => Actions.account(this.state.setting.account)} >
            <View style={styles.list}>
              <Image style={styles.imagesLeft} source={require('../../images/ic_account_box_black_24dp.png')} />
              <Text style={styles.text}>Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.privacy(this.state.setting.privacy)}>
            <View style={styles.list}>
              <Image style={styles.imagesLeft} source={require('../../images/ic_build_black_24dp.png')} />
              <Text style={styles.text}>Privacy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.email(this.state.setting.emailNotification)}>
            <View style={styles.list}>
              <Image style={styles.imagesLeft} source={require('../../images/ic_contact_mail_black_24dp.png')} />
              <Text style={styles.text}>Email</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.list1}>
            <TouchableOpacity onPress={() => Actions.deactive()}>
              <Text style={styles.deactive}>Deactive</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (<ActivityIndicator />);
    }
  }
}
