import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  Keyboard,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast, {DURATION} from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';
import IconClose from './../../layouts/IconClose';

export default class ChangeUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      newUsername: '',
      currentUserName: '',
      namaslug: '',
      position: 'bottom',
      style:{},
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
    AsyncStorage.getItem('name_slug').then((res) => { this.setState({ namaslug: res }); console.log('NAMAAAA KAMUUUUU=====',this.state.namaslug); }).catch((res) => console.log('error ambil nama username-----'));
    auth.profile()
    .then(response => this.setState({ profile: response.data, loading: false }))
    .catch(Err => Err);
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  render() {
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const email = this.state.profile.email;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;
    const emptyUsername = this.state.newUsername;
    const newUsernames = this.state.newUsername;
    const regex = /^[a-zA-Z0-9_.-]{6,25}$/;
    const validRegex = regex.test(this.state.newUsername);
    const validUsername = this.state.profile.name_slug !== this.state.newUsername;
    const onSave = () => {
      if (validRegex && validUsername) {
        saveProfile(id, name_first, name_last, newUsernames, phone, birthday);
        this.clearText('textInput');
        auth.profile()
        .then(response => {
          this.setState({ profile: response.data, loading: false }, () => {
          this.props.reRender();
          {this.onClick('Succes update data ', 'bottom', DURATION.LENGTH_SHORT)}
          <Toast ref="toast" position={this.state.position}/>
          });

        })
        .catch(Err => Err);
        Keyboard.dismiss();
        // Actions.pop();
      } else {
        {this.onClick('Error', 'bottom', DURATION.LENGTH_SHORT)}
        <Toast ref="toast" position={this.state.position}/>
      }
    };

    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => onSave(),
    };

    const titleConfig = {
      title: strings.changeUname.title,
    };
    return (
      <View style={styles.OuterView}>
        <View>
                {this.getButton('', 'center', DURATION.LENGTH_SHORT)}
                <Toast ref="toast" position={this.state.position}/>
        </View>
        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
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
              {strings.changeUname.current_name}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid="rgba(0,0,0,0)"
              value={this.state.profile.name_slug == null ? this.state.namaslug : this.state.profile.name_slug}
              editable={false}
            />
            <Text style={styles.Text2}>
              {strings.changeUname.new_name}
            </Text>
            <TextInput
              ref={'textInput'}
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder={strings.changeUname.placeholder}
              maxLength={25}
              onChangeText={newUsername => this.setState({ newUsername })}
              multiline={false}
              numberOfLines={4} editable
              value={this.state.newUsername}
            />
            {validRegex || !emptyUsername ? <Text /> :
            <Text style={styles.invalid}>{strings.changeUname.error_length}</Text>}

          </View>
          <Text style={{ marginLeft: 20, marginTop: 10 }}>
            {strings.changeUname.uniquename}
          </Text>

        </ScrollView>
      </View>
    );
  }
}
