import React, { Component } from 'react';
import { View, TextInput, Text, ScrollView, Keyboard, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import styles from './../StyleSetting/style';
import auth from './../../../services/auth';
import strings from '../../../localizations';
import saveProfile from '../../../services/updateProfile';
import IconClose from './../../../layouts/IconClose';

export default class ChangeUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      newUsername: '',
      currentUserName: '',
      namaslug: '',
      position: 'bottom',
      style: {},
      netstate: this.props.network,
    };
  }

  // Mount Component with Value in auth.profile
  componentDidMount() {
    // @TODO When get profile request is failed
    // make it load value from AsyncStorage
    auth
      .profile()
      .then(response =>
        this.setState({
          newUsername: response.data.name_slug,
          profile: response.data,
          loading: false,
        }))
      .catch(() => {
        AsyncStorage.getItem('name_slug').then(res => this.setState({ namaslug: res })).catch();
      });
  }

  componentWillReceiveProps(NextProps) {
    console.log('CONNECTED IS ', NextProps.network);
    this.setState({ netstate: NextProps.network });
  }

  // Add action of Toast
  onClick(text, position, duration, withStyle) {
    this.setState({
      position,
    });
    if (withStyle) {
      this.refs.toastWithStyle.show(text, duration);
    } else {
      this.refs.toast.show(text, duration);
    }
  }

  // Initial onPress for show Toast
  getButton(text, position, duration, withStyle) {
    return (
      <Text onPress={() => this.onClick(text, position, duration, withStyle)}>
        <Text>{text}</Text>
      </Text>
    );
  }

  forceToLower() {
    /**
     * This function is force the username to LowerCase
     * and called when onBlur
     */
    const val = this.state.newUsername;
    this.setState({ newUsername: val.toLowerCase(), failregister: false });
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    // validation with regex
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const displayName = this.state.profile.name_display;
    const name_slug = this.state.profile.name_slug;
    const gender = this.state.profile.gender;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;
    const img_avatar = this.state.profile.img_avatar;
    const emptyUsername = this.state.newUsername;
    const newUsernames = this.state.newUsername.toLowerCase();
    const regex = /^[a-zA-Z0-9_.-]{6,25}$/;
    const validRegex = regex.test(this.state.newUsername);
    const validUsername = this.state.profile.name_slug !== this.state.newUsername;
    const onSave = () => {
      if (validRegex && validUsername) {
        saveProfile(id, name_first, name_last, displayName, newUsernames, img_avatar, gender, phone, birthday);
        auth
          .profile()
          .then((response) => {
            this.setState({ profile: response.data, loading: false }, () => {
              // --- show toast ----
              this.onClick(strings.changeUname.saved, 'bottom', DURATION.LENGTH_LONG);
            });
          })
          .catch(Err => Err);
        Keyboard.dismiss();
        this.props.reRender();
      } else {
        // ----- show toast -----
        this.onClick(strings.changeUname.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };

    const color = this.state.netstate ? 'blue' : '#c0c0c0';
    const handlerState = this.state.netstate ? () => onSave() : () => console.log('Disable');

    const rightButtonConfig = {
      title: strings.settings.save,
      tintColor: color,
      handler: handlerState,
    };

    const titleConfig = {
      title: strings.changeUname.title,
    };
    return (
      <View style={styles.OuterView}>
        {/* ---------------------------------------------------------
            *
            * Add Custom NavigationBar With Save Button
            *
            * --------------------------------------------------------- */}
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={
              <IconClose onPress={() => Actions.pop(this.props.reRender({ type: 'refresh' }))} />
            }
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        </View>

        {/* ---- ScrollView Screen ----*/}
        <ScrollView>
          <View style={styles.View1}>

            {/* ----- Add Title textInput ----- */}
            <Text style={styles.Text2}>
              {strings.changeUname.new_name}
            </Text>

            {/* ---------------------------------------------------------
              *
              * Add textInput that have default value is current username / name_slug
              *
              * --------------------------------------------------------- */}
            <TextInput
              ref={'textInput'}
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.changeUname.placeholder}
              maxLength={25}
              onChangeText={newUsername => this.setState({ newUsername })}
              onBlur={() => this.forceToLower()}
              multiline={false}
              numberOfLines={4}
              editable
              value={this.state.newUsername}
            />
            {/* ---------------------------------------------------------
              *
              * Give Validation if Regex is valid or username is not empty or not
              *
              * --------------------------------------------------------- */}
            {validRegex || !emptyUsername
              ? <Text />
              : <Text style={styles.invalid}>{strings.changeUname.error_length}</Text>}

          </View>

          {/* ----- Add Note About change username -----*/}
          <Text style={{ marginLeft: 20, marginTop: 10 }}>
            {strings.changeUname.uniquename}
          </Text>

        </ScrollView>

        {/* ---------------------------------------------------------
          *
          * component's render method, use Toast, MUST add in Bottom of the root View
          *
          * --------------------------------------------------------- */}
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
