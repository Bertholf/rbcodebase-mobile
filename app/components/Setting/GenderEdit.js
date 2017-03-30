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
  NetInfo,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import NavigationBar from 'react-native-navbar';
import auth from './../../services/auth';
import strings from '../../localizations';
import saveProfile from '../../services/updateProfile';
import IconClose from './../../layouts/IconClose';

const imgmale = require('./../../images/male.png');
const imgfemale = require('./../../images/female.png');

const { width } = Dimensions.get('window');

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newgender: '',
      genderansyc: '',
      currentGender: '',
      profile: {},
      position: 'bottom',
      gender: '',
      isConnected: null,

    };
  }
  componentDidMount() {
    // check condiotion if CONNECTION or no CONNECTION
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            console.log('CONNECTION', isConnected),
            this.setState({isConnected});
           }
    );
    auth.profile()
    .then(response =>
      this.setState({
        gender: response.data.gender,
        profile: response.data,
      }))
    .catch(() => {
      AsyncStorage.getItem('genderansyc')
      .then(res => this.setState({ genderansyc: res }))
      .catch();
    });
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };

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
      <Text
        onPress={() => this.onClick(text, position, duration, withStyle)}
      >
        <Text>{text}</Text>
      </Text>
    );
  }
  render() {
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_last = this.state.profile.name_last;
    const name_slug = this.state.profile.name_slug;
    const displayName = this.state.profile.name_display;
    const phone = this.state.profile.phone;
    const birthday = this.state.profile.birthday;
    const gender = this.state.gender;

    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => updategender(),
    };
    const rightButtonConfig2 = {
      title: strings.settings.save,
      tintColor: 'grey',
    };

    const titleConfig = {
      title: strings.settings.changegender,
    };
    const updategender = () => {
      if (this.state.isConnected === true) {
        saveProfile(id, name_first, name_last, displayName, name_slug, gender, phone, birthday);
        //  Toast.show(strings.mobilephone.phoneChanged);
        auth.profile()
        .then((response) => {
          this.setState({ profile: response.data, loading: false }, () => {
            this.onClick(strings.settings.successGender, 'bottom', DURATION.LENGTH_LONG);
          });
        })
        .catch(Err => Err);
        this.props.reRender();
      } else {
        return;
      }
    };
    return (
      <View style={styles.OuterView}>

        {/* ---------------------------------------------------------
          *
          * Add NavigationBar with Save Button
          *
          * --------------------------------------------------------- */}

        <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}>
        {this.state.isConnected === true ?
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={() => Actions.pop(this.props.reRender({type: 'refresh'}))} />}
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
          :
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig2}
            leftButton={<IconClose onPress={() => Actions.pop(this.props.reRender({type: 'refresh'}))} />}
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        }
        </View>

        {/* ---------------------------------------------------------
          *
          * Body of Component
          *
          * --------------------------------------------------------- */}

        <ScrollView>
          <View style={styles.genderRow} >
        {/* ---------------------------------------------------------
          *
          * Select / Picker for Gender View
          *
          * --------------------------------------------------------- */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.btnGender, this.state.gender === 'male' && styles.active]}
              onPress={() => this.setState({ gender: 'male' })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={imgmale} style={[styles.imgGender, { tintColor: '#1565c0' }]} />
                <Text style={{ color: '#1565c0' }}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.btnGender, this.state.gender === 'female'  && styles.active2]}
              onPress={() => this.setState({ gender: 'female' })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={imgfemale} style={[styles.imgGender, { tintColor: '#DF2668' }]} />
                <Text style={{ color: '#DF2668' }}>Female</Text>
              </View>
            </TouchableOpacity>
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


const styles = StyleSheet.create({
  genderRow: {
    paddingTop: 50,
    paddingBottom: 90,
    width: width * 0.91,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    marginLeft: 13,
    marginRight: 13,
  },
  btnGender: {
    flexDirection: 'column',
    alignItems: 'flex-start',
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
});
