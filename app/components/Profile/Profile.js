import React, { Component } from 'react';
import {
     View,
     TouchableOpacity,
     Text,
     Image,
     ScrollView,
     ActivityIndicator,
     Alert,
     AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import styles from './ProfileStyle';
import follows from '../../services/follows';
import strings from '../../localizations';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    state = {
      avatarSource: null,
    };
    this.state = {
      loading: true,
      profile: this.props.profile,
      leaderId: this.props.profile.id,
      followed: true,
      countFollow: 0,
      id: '',
      friend: false,
      edit: false,
      button: false,
      me: false,
      request: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('userId')
    .then((id) => {
      if (id === this.state.profile.id.toString()) {
        this.setState({ me: true });
      }
      this.followHasSomeone(id, this.state.profile.id);
      follows.showFollower(this.state.profile.id)
      .then((res) => {
        const count = res.data.length;
        this.setState({ countFollow: count, loading: false });
      })
      .catch(() => {
        Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
      });
    })
    .catch();
  }

  unfollowUser() {
    follows.unfollow(this.state.id)
      .then(() => {
        this.setState({ followed: false });
      }).catch();
  }
  pressScroll() {
    this.scrollView.scrollTo({ x: 0, y: 400, animated: true });
  }

  follow() {
    AsyncStorage.getItem('userId')
    .then((followerId) => {
      const idFollower = followerId;
      follows.followsomeone(idFollower, this.state.leaderId)
      .then((res) => {
        this.setState({ followed: true, request: true, id: res.data.id, followId: res.data.leader_id });
      })
      .catch();
    })
    .catch();
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  followHasSomeone(followerId, leaderId) {
    follows.checkFollowing(followerId, leaderId)
    .then((res) => {
      this.setState({ followed: (typeof res.data.id) !== 'undefined' });
    }).catch();
  }

  render() {
    if (this.state.loading === false) {
      return (
        <ScrollView ref={(scroll) => { this.scrollView = scroll; }}>
          <View style={styles.container} >
            <View style={styles.backgroundContainer}>
              <Image
                source={require('./../../images/bromo.jpg')}
                resizeMode={'cover'}
                style={styles.backdrop}
              >
              <TouchableOpacity onPress={Actions.userpanel}>
              <Image
                source={require('./../../images/back.png')}
                style={styles.back}
              />
              </TouchableOpacity>
              </Image>
            </View>


        {/*<View style={{ borderWidth : 0.5 , borderColor: '#E0E0E0', marginTop: 10 }} />  */}
          <View style={{backgroundColor: 'white', elevation: 6, margin: 20}}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.viewImgpp}>
                <TouchableOpacity
                  disabled={this.state.request}
                  onPress={this.selectPhotoTapped.bind(this)}>
                  { this.state.avatarSource === null ? <Text>change Photo</Text> :
                  <Image style={styles.logo} source={{ uri: this.state.profile.picture }} />
                  }
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.biodata}>
              <View style={{ alignItems: 'center'}}>
              <TouchableOpacity onPress={Actions.about}>
                <Text style={styles.headline} colors={['black']} >
                  {this.state.profile.name_first} {this.state.profile.name_last}
                </Text>
              </TouchableOpacity>
              <View style={styles.textInform} >
                <TouchableOpacity>
                  <Text style={styles.pos}>{strings.profileLocalization.post}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.friendlist}>
                  <Text style={styles.followers}>{strings.profileLocalization.follower}</Text>
                  <Text style={{ marginLeft: 8, textAlign: 'center' }}>{this.state.countFollow}</Text>
                </TouchableOpacity>
                {this.state.me ? (
                  <TouchableOpacity onPress={Actions.setting} >
                    <Text style={styles.button} >
                      {strings.profileLocalization.edit}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  !this.state.me ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                      <TouchableOpacity
                        disabled={this.props.status.status === 'request' && this.state.request}
                        onPress={() => this.toggleSwitchFollow()}
                      >
                        <Text
                          style={this.state.followed ? styles.buttonUnfollow : styles.button}
                        >
                          {this.state.followed ? this.props.status.status === 'request' ? 'Requested' : strings.profileLocalization.unfollow : strings.profileLocalization.follow }</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Text />
                  )
                ) }
              </View>
              </View>
              </View>
              <Text style={styles.isi}>{this.state.profile.about}</Text>
              <Text style={styles.bio}>{strings.profileLocalization.lastHiking}</Text>
              <View style={styles.posisi}>
                <Image
                  style={styles.icon} source={require('./../../images/jarak.png')}
                />
                <Text style={styles.isi}> {strings.profileLocalization.km} :</Text>
              </View>
              <View style={styles.posisi}>
                <Image
                  style={styles.icon} source={require('./../../images/mountain.png')}
                />
                <Text style={styles.isi}>{strings.profileLocalization.from} :</Text>
              </View>
              <View style={styles.posisi}>
                <Image
                  style={styles.location} source={require('./../../images/live.png')}
                />
                <Text style={styles.isi}>{strings.profileLocalization.live} :
                  {this.state.profile.live}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                {/*
                  This is will be used later
                  ===============================
                  <TouchableOpacity>
                  <Text style={styles.isi2}>{strings.profileLocalization.viewMore}</Text>
                </TouchableOpacity> */}
              </View>
            </View>
            {/*
              This is will be used later
              ===============================
              <View style={styles.mapmain}>
              <MapMain />
            </View> */}
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }
  toggleSwitchFollow() {
    if (this.state.followed === true) {
      Alert.alert('Confirmation',
               strings.profileLocalization.areYouFollow, [
                 { text: strings.logoutLocalization.cancel,
                   onPress: () => this.setState({ clicked: this.state.followed }),
                 },
                { text: strings.profileLocalization.yes, onPress: () => this.unfollowUser() },
               ]);
    } else {
      this.follow();
    }
  }
}
