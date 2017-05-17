import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './style';
import auth from './../../services/auth';
import strings from '../../localizations';


const settingIcon = require('./../../images/ic_settings_black_24dp.png');
const followIcon = require('./../../images/people.png');
const contactIcon = require('./../../images/ic_contacts_black_24dp.png');
const addFriendIcon = require('./../../images/ic_person_add_black_24dp.png');
const bottomArrowIcon = require('./../../images/ic_expand_more_black_24dp.png');
const searchFriend = require('./../../images/search.png');


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
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      loading: true,
      my: true,
    };
  }


  componentDidMount() {
    // Get Profile Data From server
    auth.profile()
    .then(response => this.setState({ profile: response.data, loading: false }, () => console.log(this.state)))
    .catch(Err => console.log('err', Err));
  }

  viewStyle() {
    return {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
      alignItems: 'center',
    };
  }

  render() {
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
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.userButton}
              onPress={() => Actions.profile({ profile: this.state.profile , user_id:this.state.profile.id})}
            >
              {this.state.profile.picture == null ?
                <Image style={styles.userImage} source={require('../../images/user.png')} /> : <Image source={{ uri: this.state.profile.picture }} style={styles.userImage} />
            }
            </TouchableOpacity>

            <View style={styles.linksContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.imgLinksContainer}
                onPress={Actions.follower}
              >
                <Image source={followIcon} style={styles.imgLinks} />
                <Text style={styles.textLinks}>{strings.userpanel.followers} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.imgLinksContainer}
                onPress={Actions.following}
              >
                <Image source={contactIcon} style={styles.imgLinks} />
                <Text style={styles.textLinks}>{strings.userpanel.following}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.imgLinksContainer}
                onPress={Actions.addfriendscreen}
              >
                <Image source={searchFriend} style={[styles.imgLinks, { tintColor: '#000' }]} />
                <Text style={styles.textLinks}>{strings.userpanel.search_friend} </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.imgLinksContainer}
                onPress={Actions.approval}
              >
                <Image source={addFriendIcon} style={styles.imgLinks} />
                <Text style={styles.textLinks}>{strings.userpanel.request}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = userPanel;
