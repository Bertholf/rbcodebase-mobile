import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast, {DURATION} from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import IconClose from './../../layouts/IconClose';

export default class EmailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      profile: {},
      email: '',
    };
  }

  componentDidMount() {
    // AsyncStorage.getItem('email').then((res) => { this.setState({ email: res }); console.log('NAMAAAA KAMUUUUU=====',this.state.email); }).catch((res) => console.log('error ambil email-----'));
    auth.profile()
    .then(response => this.setState({ profile: response.data, email: response.data.email }))
    .catch(() => {
      AsyncStorage.getItem('email').then((res) => { this.setState({ email: res }); console.log('NAMAAAA KAMUUUUU=====',this.state.email); }).catch((res) => console.log('error ambil email-----'));
    });
  }
  onClick(text, position, duration, withStyle) {
    this.setState({
     position: position,
    });
    if (withStyle){
      this.refs.toastWithStyle.show(text, duration);
    } else {
      this.refs.toast.show(text, duration);
    }
  }

  getButton(text, position, duration, withStyle) {
    return (
      <Text
        onPress={()=>this.onClick(text, position, duration, withStyle)}>
        <Text>{text}</Text>
      </Text>
    )
  }
  render() {
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => Actions.emailVarification(),
    };
    const leftButtonConfig = {
      title: 'Cancel',
      handler: () => Actions.pop(),
    };

    const titleConfig = {
      title: strings.EditEmail.title,
    };
    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailInput = this.state.email;
    const currentEmail = this.state.profile.email;
    const sameEmail = currentEmail !== emailInput;
    const validEmail = () => {
      if (emailValidator && emailInput && sameEmail) {
        // @TODO We need to fix it later thanks!!!
        // console.log('New Email==>', emailInput);
        // saveProfile(firstName, lastName, slug, emailInput, phone, birthday);
        this.onClick(strings.settings.saved, 'bottom', DURATION.LENGTH_LONG)
      } else {
        this.onClick(strings.settings.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };
    return (
      <View style={styles.OuterView}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={Actions.pop} />}
            style={{ height: 55 }}
          />
        </View>
        <ScrollView>
          
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.EditEmail.enter_new_mail}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.EditEmail.enter_new_email}
              onChangeText={newEmail => this.setState({ email: newEmail })}
              multiline
              numberOfLines={4}
              value={this.state.email}
            />
            {emailValidator && emailInput ?
              <Text /> : <Text style={styles.invalid}>
                {strings.EditEmail.error_invalid_email}
              </Text>}
            {/*{sameEmail ?
              <Text /> : <Text style={styles.invalid}>{strings.EditEmail.alert_same_email}</Text>}*/}
          </View>
        </ScrollView>
        <Toast
          ref="toast"
          style={{ backgroundColor: 'grey' }}
          fadeInDuration={300}
          fadeOutDuration={1000}
        />
      </View>
    );
  }
}
