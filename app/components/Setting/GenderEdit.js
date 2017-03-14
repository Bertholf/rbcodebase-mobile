import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
} from 'react-native';

import auth from './../../services/auth';
import me from '../../services/me';
import { Actions } from 'react-native-router-flux';
import Toast, {DURATION} from 'react-native-easy-toast'
import NavigationBar from 'react-native-navbar';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';
import IconClose from './../../layouts/IconClose';
const imgmale = require('./../../images/male.png');
const imgfemale = require('./../../images/female.png');

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  genderRow: {
    paddingTop: 50,
    paddingBottom: 90,
    width: width * 0.9,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    marginLeft: 18,
    marginRight: 18,
  },
  btnGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 2,
    height: 80,
    width: (width * 0.85) / 2,
    borderWidth: 1,
    borderColor: 'silver',
  },
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  Text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 10,
  },
  imgGender: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  active: {
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  active2: {
    borderWidth: 2,
    borderColor: '#f2003d',
  },
  View2: {
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
    alignItems: 'center',
    backgroundColor: '#2196f3',
    marginLeft: 16,
    marginRight: 16,
  },
  Button: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default class Gender extends Component {
  constructor(props) {
    super(props);
      this.state = {
      newgender: '',
      genderansyc: '',
      profile: {},

    };
  }
  componentDidMount() {
    AsyncStorage.getItem('gender').then((res) => { this.setState({ genderansyc: res }); console.log('GENDERRRRRRRRRRRRRRR=====',this.state.genderansyc); }).catch((res) => console.log('error AsyncStorage-----'));
    auth.profile()
    .then(response => this.setState({ profile: response.data, loading: false }))
    .catch(Err => Err);
  }
  render() {
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const email = this.state.profile.email;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;
    const gender = this.state.profile.gender;
    const newgender = this.state.newgender;
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => updategender(),
    };

    const titleConfig = {
      title: strings.settings.changegender,
    };
    const updategender = () => {
      saveProfile(id, name_first, name_last, name_slug, newgender, phone, birthday);
      //  Toast.show(strings.mobilephone.phoneChanged);
      auth.profile()
      .then(response => {
        this.setState({ profile: response.data, loading: false }, () => {
          this.onClick(strings.settings.saved, 'bottom', DURATION.LENGTH_LONG)
        });
      })
      .catch(Err => Err);
      this.props.reRender();
  };
    return (
      <View style={styles.OuterView}>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}
          style={{ height: 55 }}
        />
      </View>
        <ScrollView>
          <View style={styles.genderRow} >
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.btnGender, this.state.newgender === 'Male' && styles.active]}
              onPress={() => this.setState({ newgender: 'Male' })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={imgmale} style={[styles.imgGender, { tintColor: '#1565c0' }]} />
                <Text style={{ color: '#1565c0' }}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.btnGender, this.state.newgender === 'Female' && styles.active2]}
              onPress={() => this.setState({ newgender: 'Female' })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={imgfemale} style={[styles.imgGender, { tintColor: '#DF2668' }]} />
                <Text style={{ color: '#DF2668' }}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
