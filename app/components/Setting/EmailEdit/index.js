import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import styles from './../StyleSetting/style';
import auth from './../../../services/auth';
import strings from '../../../localizations';
import IconClose from './../../../layouts/IconClose';

export default class EmailEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      profile: {},
      email: '',
      submit: false,
      netstate: this.props.network,
    };
  }

  componentDidMount() {
    // respon data profile
    auth
      .profile()
      .then(response => this.setState({ profile: response.data, email: response.data.email }))
      .catch(() => {
        AsyncStorage.getItem('email')
          .then((res) => {
            this.setState({ email: res });
          })
          .catch(res => console.log('error ambil email-----'));
      });
  }
  componentWillReceiveProps(NextProps) {
    console.log('NETWORK STATE EMAIL');
    this.setState({ netstate: NextProps.network });
  }

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

  getButton(text, position, duration, withStyle) {
    return (
      <Text onPress={() => this.onClick(text, position, duration, withStyle)}>
        <Text>{text}</Text>
      </Text>
    );
  }
  validation() {
    auth
      .changeemail(this.state.email)
      .then((res) => {
        console.log('EMAIL REQUEST=====', res);
        Actions.emailVarification();
        // after get res (response) from auth.changeemail()
        // user  will direct to Actions.emailVarification()
        // loading will stop when succes submit forgot password
        this.setState({ submit: false });
        this.onClick(strings.EditEmail.saved, 'bottom', DURATION.LENGTH_LONG);
      })
      .catch(() => this.onClick('Woops Error!! Please Try Again', 'bottom', DURATION.LENGTH_LONG));
  }

  render() {
    const color = this.state.netstate ? 'blue' : '#c0c0c0';
    const handlerState = this.state.netstate ? () => validEmail() : () => console.log('Disable');
    const rightButtonConfig = {
      title: strings.settings.save,
      tintColor: color,
      handler: handlerState,
    };

    const titleConfig = {
      title: strings.EditEmail.title,
    };

    const value = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValidator = value.test(this.state.email);
    const emailValidatornull = this.state.email === 0;
    const emailInput = this.state.email;
    const validEmail = () => {
      if (emailValidator && emailInput) {
        this.validation();

        // @TODO We need to fix it later thanks!!!
        // console.log('New Email==>', emailInput);
        // saveProfile(firstName, lastName, slug, emailInput, phone, birthday);
      } else {
        this.onClick(strings.EditEmail.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };
    return (
      <View style={styles.OuterView}>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={Actions.pop} />}
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        </View>
        <ScrollView>

          <View style={styles.View1}>
            <Text style={styles.Text2}>
              {strings.EditEmail.currentEmail}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.EditEmail.enter_email}
              onChangeText={newEmail => this.setState({ email: newEmail })}
              multiline
              numberOfLines={4}
              // value={this.state.email}
            />

            {emailValidator || !emailInput
              ? <Text />
              : <Text style={styles.invalid}>
                {strings.EditEmail.error_invalid_email}
              </Text>}
            {/* {sameEmail ?
              <Text /> : <Text style={styles.invalid}>{strings.EditEmail.alert_same_email}</Text>}*/}
          </View>
        </ScrollView>
        {/* ---------------------------------------------------------
          *
          * Give Toast message
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
