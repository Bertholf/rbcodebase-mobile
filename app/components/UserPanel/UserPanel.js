import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import styles from './style';
import auth from './../../services/auth';
import strings from '../../localizations';


const settingIcon = require('./../../images/ic_settings_black_24dp.png');
const userImage = require('./../../images/profile-pic.jpg');
const verifyImage = require('./../../images/ic_check_circle_black_24dp.png');
const followIcon = require('./../../images/people.png');
const contactIcon = require('./../../images/ic_contacts_black_24dp.png');
const addFriendIcon = require('./../../images/ic_person_add_black_24dp.png');
const bottomArrowIcon = require('./../../images/ic_expand_more_black_24dp.png');

const alertMessage = 'Press OK';

class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    );
  }
}

class userPanel extends React.Component {
  viewStyle() {
    return {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
      alignItems: 'center',
    };
  }
  constructor(props){
    super(props)
    this.state = {
      profile: {},
      loading:true,
      my: true,
    }
  }

  componentDidMount(){
    auth.profile ()
    .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
    .catch(Err=> console.log('err', Err))
  }


  render() {
    const onPressed = () => {
      this.state.my;
      Actions.profile();
    };
    return (
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.btnSettingContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={Actions.setting}
              >
                <Image source={settingIcon} style={styles.iconImage} />
              </TouchableOpacity>
            </View>
            <View style={styles.userContainer} >
              <TouchableOpacity activeOpacity={0.7} style={styles.userButton} onPress={ () => Actions.profile({ profile: this.state.profile})}>
                <Image source={{uri:this.state.profile.picture}} style={styles.userImage} />
              </TouchableOpacity>
              <Image source={verifyImage} tintColor={'#0f0'} style={{ position: 'absolute', right: 115, width: 30, height: 30 }} />

              <View style={styles.linksContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.imgLinksContainer}
                  onPress={Actions.followingme}
                >
                  <Image source={followIcon} style={styles.imgLinks} />
                  <Text style={styles.textLinks}>{strings.userpanel.follme} </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.imgLinksContainer}
                  onPress={Actions.friendlist}
                >
                  <Image source={contactIcon} style={styles.imgLinks} />
                  <Text style={styles.textLinks}>{strings.userpanel.myfriend}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.imgLinksContainer}
                  onPress={Actions.addfriendscreen}
                >
                  <Image source={addFriendIcon} style={styles.imgLinks} />
                  <Text style={styles.textLinks}>{strings.userpanel.addfrie} </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View style={styles.swapContainer}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.goCenter()}>
              <Image source={bottomArrowIcon} style={styles.swapImage} />
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

module.exports = userPanel;
