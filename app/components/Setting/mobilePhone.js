import React, { Component } from 'react';
import {
   Text,
   View,
   TextInput,
   StyleSheet,
   Keyboard,
   AsyncStorage,
 } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import saveProfile from '../../services/updateProfile';
import auth from './../../services/auth';
import IconClose from './../../layouts/IconClose';
import strings from '../../localizations';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    marginTop: 5,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
    height: 55,
  },
  textinputStyle: {
    height: 55,
  },
  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 0,
    color: '#48BBEC',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default class MobilePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      phone: '',
      style: {},
      position: 'bottom',

    };
  }

  componentDidMount() {
    AsyncStorage.getItem('phone').then((res) => { this.setState({ phone: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.namaslug); }).catch(() => console.log('error ambil nama username-----'));
    auth.profile()
    .then(response => this.setState({ profile: response.data, phone: response.data.cell_number }))
    .catch(Err => Err);
    AsyncStorage.getItem('phone').then((res) => { this.setState({ phone: res }); console.log('NAMAAAA KAMUUUUU=====', this.state.namaslug); }).catch(() => console.log('error ambil nama username-----'));
    
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

  onChanged(text) {
    let newText = '';
    const numbers = '^[0-9]';

    for (let i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i] > -1)) {
        newText += text[i];
      }
      this.setState({ phone: newText });
    }
  }

  getButton(text, position, duration, withStyle) {
    return (
      <Text
        onPress={() => this.onClick(text, position, duration, withStyle)}
      >
        <Text>{text}</Text>
      </Text>
    );
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    const rightButtonConfig = {
      title: strings.mobilephone.titleSave,
      handler: () => savePhone(),
    };

    const titleConfig = {
      title: strings.mobilephone.titleEditPhone,
    };

    const regex = /^[0-9\-\+]{9,15}$/;
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const email = this.state.profile.email;
    const gender = this.state.profile.gender;
    const birthday = this.state.profile.birthday;
    const numberphone = this.state.profile.cell_number;
    const phone = this.state.phone;
    const validPhone = regex.test(this.state.phone);
    const savePhone = () => {
      if (phone != null && validPhone) {
        saveProfile(id, name_first, name_last, name_slug, gender, phone, birthday);
        auth.profile()
          .then((response) => {
            this.setState({ profile: response.data, loading: false }, () => {
              this.onClick(strings.mobilephone.saved, 'bottom', DURATION.LENGTH_LONG)
            });
          })
          .catch(Err => console.log('err', Err));
        Keyboard.dismiss();
        this.props.reRender();
        // Actions.pop();
      } else {
        this.onClick(strings.mobilephone.error, 'bottom', DURATION.LENGTH_LONG);
      }
    };
    return (
      <View>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={() => Actions.pop(this.props.reRender())} />}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading} />
          <View style={styles.textinputWrapperStyle}>
            <TextInput
              ref={'textInput'}
              placeholder={this.state.profile.cell_number}
              placeholderTextColor="silver"
              selectionColor="silver"
              underlineColorAndroid="rgba(0,0,0,0)"
              style={styles.textinputStyle}
              keyboardType="numeric"
              onChangeText={value => this.setState({ phone: value })}
              maxLength={15}
              value={this.state.phone}
            />
          </View>
        </View>
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
