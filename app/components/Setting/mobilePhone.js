import React, { Component } from 'react';
import {
   Text,
   View,
   TextInput,
   StyleSheet,
   Keyboard,
 } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import saveProfile from '../../services/updateProfile';
import auth from './../../services/auth';
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';
import {Actions} from 'react-native-router-flux';
import strings from '../../localizations'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    marginTop: 50,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
    marginTop: 10,
    height: 40,
  },
  textinputStyle: {
    height: 40,
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

  onClick(text, position, duration,withStyle) {
    this.setState({
       position: position,
        })
       if(withStyle){
           this.refs.toastWithStyle.show(text, duration);
       }else {
           this.refs.toast.show(text, duration);
       }
  }

  getButton(text, position, duration, withStyle) {
        return(
            <Text
                style={{padding:0}}
                onPress={()=>this.onClick(text, position, duration, withStyle)}>
                <Text>{text}</Text>
            </Text>
        )
    }
  componentDidMount() {
    auth.profile ()
    .then(response => this.setState({ profile: response.data, phone: response.data.cell_number }))
    .catch(Err=> Err)
  }
  onChanged(text) {
    let newText = '';
    const numbers = '^[0-9]';

    for (let i=0; i < text.length; i++) {
      if (numbers.indexOf(text[i] >-1)) {
          newText = newText + text[i];
      }
      this.setState({ phone: newText });
    }
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

      const id = this.state.profile.id;
      const name_first = this.state.profile.name_first;
      const name_last = this.state.profile.name_last;
      const name_slug = this.state.profile.name_slug;
      const email = this.state.profile.email;
      const birthday = this.state.profile.birthday;
      const numberphone = this.state.profile.cell_number;
      const phone = this.state.phone;
      const savePhone = () => {
      if (phone != null) {
        saveProfile(id, name_first, name_last, name_slug, phone, birthday);
        //Toast.show(strings.mobilephone.phoneChanged);
        this.clearText('textInput')
        auth.profile ()
          .then(response => {
            this.setState({ profile: response.data, loading: false }, () => {
              this.props.reRender();
              {this.onClick('Succes update data ', 'bottom', DURATION.LENGTH_SHORT)}
              <Toast ref="toast" position={this.state.position}/>

            });
          })
          .catch(Err=> console.log('err', Err))
          Keyboard.dismiss();

      } else {
        {this.onClick('Succes update data ', 'bottom', DURATION.LENGTH_SHORT)}
        <Toast ref="toast" position={this.state.position}/>
      //  Toast.show(strings.mobilephone.alert_input);
      }
    };
    return (
      <View>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={Actions.pop} />}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}></Text>
          <View style={styles.textinputWrapperStyle}>
            <TextInput
              placeholder={strings.mobilephone.placeholderOldNumber}
              placeholderTextColor="silver"
              selectionColor="silver"
              underlineColorAndroid="rgba(0,0,0,0)"
              style={styles.textinputStyle}
              value={this.state.profile.cell_number}
              editable={false}
              maxLength={12}
            />
          </View>
          <View style={styles.textinputWrapperStyle}>
            <TextInput
              ref={'textInput'}
              placeholder={strings.mobilephone.placeholderNewPhoneNumber}
              placeholderTextColor="silver"
              selectionColor="silver"
              underlineColorAndroid="rgba(0,0,0,0)"
              style={styles.textinputStyle}
              keyboardType="numeric"
              onChangeText={numberphone => this.setState({ phone: numberphone })}
              maxLength={12}
            />
          </View>
        </View>
        <Toast ref="toast" />
      </View>

    );
  }
}
