import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Keyboard, AsyncStorage } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import { Actions } from 'react-native-router-flux';
import styles from './../StyleSetting/style';
import IconClose from './../../../layouts/IconClose';
import auth from './../../../services/auth';
import saveProfile from '../../../services/updateProfile';
import strings from '../../../localizations';
import { bindActionsCreators } from 'redux';
import { connect } from 'react-redux';
import { getNetworkStatus, changeNetworkStatus } from '../../../actions/networkStatus';

// Initial State of Change Name
export default class NameEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      namedisplay: '',
      profile: {},
      namef: '',
      namel: '',
      gender: '',
      named: '',
      style: {},
      position: 'bottom',
      netstate: this.props.network,
    };
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

  // Mount Component with Value in auth.profile
  componentDidMount() {
    // check condiotion if CONNECTION or no CONNECTION
    // NetInfo.isConnected.addEventListener(
    //     'change',
    //     this._handleConnectivityChange
    // );
    // NetInfo.isConnected.fetch().done(
    //     (isConnected) => {
    //         console.log('CONNECTION', isConnected),
    //         this.setState({isConnected});
    //        }
    // );
    // const {dispatch, networkState } = this.props
    // dispatch(getNetworkStatus)
    console.log('===============', this.props.network);
    auth
      .profile()
      .then(res =>
        this.setState(
          {
            profile: res.data,
            firstName: res.data.name_first,
            lastName: res.data.name_last,
            namedisplay: res.data.name_display,
          },
          () => console.log(this.state),
        ))
      .catch(() => {
        AsyncStorage.getItem('name_first')
          .then((resp) => {
            this.setState({ namef: resp });
          })
          .catch(resp => console.log('error ambil namalengkap-----'));
        AsyncStorage.getItem('name_last')
          .then((resp) => {
            this.setState({ namel: resp });
          })
          .catch(resp => console.log('error ambil namalengkap--- --'));
        AsyncStorage.getItem('name_display')
          .then((resp) => {
            this.setState({ named: resp });
          })
          .catch(resp => console.log('error ambil namalengkap--- --'));
      });
  }
  componentWillUnmount() {
    //   NetInfo.isConnected.removeEventListener(
    //       'change',
    //       this._handleConnectivityChange
    //   );
    // }
    // _handleConnectivityChange = (isConnected) => {
    //   this.setState({
    //     isConnected,
    //   });
  }

  componentWillReceiveProps(NextProps) {
    console.log('NOW IS ONLINE = ', NextProps.network);
    this.setState({ netstate: NextProps.network });
  }

  // Initial onPress for show Toast
  getButton(text, position, duration, withStyle) {
    return (
      <Text onPress={() => this.onClick(text, position, duration, withStyle)}>
        <Text>{text}</Text>
      </Text>
    );
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    // regex name validation
    const value = /^[a-zA-Z ]+$/;
    const id = this.state.profile.id;
    const firstNameValidator = value.test(this.state.firstName);
    const lastNameValidator = value.test(this.state.lastName);
    const firstNameInput = this.state.firstName;
    const lastNameInput = this.state.lastName;
    const namedisplayInput = this.state.namedisplay;
    const currentFirstName = this.state.profile.first_name;
    const currentLastName = this.state.profile.last_name;
    const gender = this.state.profile.gender;
    const slug = this.state.profile.name_slug;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;
    // Validate Name Input
    const validateName = () => {
      if (firstNameInput && firstNameValidator && lastNameInput && lastNameValidator) {
        if (firstNameInput === currentFirstName) {
          if (lastNameInput === currentLastName) {
          } else if (lastNameInput !== currentLastName && firstNameInput === currentFirstName) {
          }
        } else if (firstNameInput !== currentFirstName && lastNameInput === currentLastName) {
        } else {
          saveProfile(
            id,
            firstNameInput,
            lastNameInput,
            namedisplayInput,
            slug,
            gender,
            phone,
            birthday,
          );
          Keyboard.dismiss();
          auth
            .profile()
            .then(response => {
              console.log("WOIIWOIWOIOWIOIOW", response);
              this.setState({ profile: response.data, loading: false }, () => {
                this.onClick(strings.ChangeName.saved, 'bottom', DURATION.LENGTH_LONG);
              });
            })
            .catch();
          Keyboard.dismiss();
          Actions.refresh();
        }
      } else {
        this.onClick(strings.ChangeName.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };

    const color = this.state.netstate ? 'blue' : '#c0c0c0';
    const handlerState = this.state.netstate ? () => validateName() : () => console.log('Disable');
    // Create Save Button on Navigation
    const rightButtonConfig = {
      title: strings.settings.save,
      tintColor: color,
      handler: handlerState,
    };

    // title of screen
    const titleConfig = {
      title: strings.ChangeName.title,
    };
    return (
      <View style={styles.OuterView}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          {/* --- Declaration Navigation Bar ---- */}
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={
              <IconClose onPress={() => Actions.pop(this.props.reRender({ type: 'refresh' }))} />
            }
            style={[{ height: 55, backgroundColor: '#f0f0f0' }]}
          />
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.TextInput5}>{strings.ChangeName.text1}</Text>
        </View>
        <ScrollView>
          <View style={styles.View1}>

            {/* -----Chance name Screen------ */}
            <Text style={styles.Text2}>
              {strings.ChangeName.first_name}
            </Text>
            <TextInput
              ref={'textInput1'}
              style={styles.TextInput1}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.ChangeName.first_name}
              maxLength={25}
              onChangeText={firstName => this.setState({ firstName })}
              multiline={false}
              numberOfLines={1}
              editable
              value={this.state.firstName}
            />
            {firstNameValidator || !firstNameInput
              ? <Text />
              : <Text style={styles.invalid}>{strings.ChangeName.alert_name}</Text>}

            <Text style={styles.Text2}>
              {strings.ChangeName.last_name}
            </Text>
            {/* ---- Text Input for Last Name ----*/}
            <TextInput
              ref={'textInput2'}
              style={styles.TextInput1}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.ChangeName.last_name}
              maxLength={25}
              onChangeText={lastName => this.setState({ lastName })}
              multiline={false}
              numberOfLines={1}
              editable
              value={this.state.lastName}
            />
            {lastNameValidator || !lastNameInput
              ? <Text />
              : <Text style={styles.invalid}>{strings.ChangeName.alert_name}</Text>}
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                marginTop: 30,
                marginBottom: 10,
                justifyContent: 'space-between',
              }}
            >
              <View
                style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 165, height: 1 }}
              />
              <View
                style={{ borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.5)', width: 165, height: 1 }}
              />
            </View>

            <Text style={styles.Text2}>
              {strings.ChangeName.display_name}
            </Text>

            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'transparent'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.ChangeName.display_name}
              onChangeText={namedisplay => this.setState({ namedisplay })}
              numberOfLines={1}
              editable
              multiline={false}
              autoCorrect
              value={this.state.namedisplay}
            />
          </View>
          <View style={{ elevation: 5 }}>
            <Text style={styles.TextInput3}>{strings.ChangeName.text2}</Text>
          </View>
        </ScrollView>
        {/* ------- component's render method, use Toast, MUST add in Bottom of the root View --------- */}
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
