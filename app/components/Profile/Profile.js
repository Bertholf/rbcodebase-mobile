import React, { Component } from 'react';
import {
     View,
     TouchableOpacity,
     Text,
     Image,
     ScrollView,
     ActivityIndicator,
     Alert,
     PixelRatio,
     Dimensions,
     AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import styles from './ProfileStyle';
import MapMain from '../Timeline/TimelineComp';
import auth from './../../services/auth';
import follows from '../../services/follows';
import strings from '../../localizations';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    state ={
      avatarSource: null,
    };
    this.state = {
      loading: true,
      profile: this.props.profile,
      leaderId: this.props.profile.id,
      followed: true,
      countFollow: 0,
      id: this.props.idFollow,
      friend: false,
      edit: false,
      button: false,
      me: false,
    };
  }

  componentDidMount() {
    console.log('this.state.profile', this.state.profile.id);
    AsyncStorage.getItem('userId')
    .then((id) => {
      console.log(' AsyncStorage id', id);
      if (id === this.state.profile.id.toString()) {
        this.setState({ me: true });
      }
      follows.showFollower(this.state.profile.id)
      .then((res) => {
        const count = res.data.length;
        this.setState({ countFollow: count, loading: false });
      })
      .catch(err => {
        Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }])
        console.log('FAIL TO COUNT FOLLOWER', err);
      });
    })
    .catch(err => console.log('FAIL TO ASYNC', err));
  }

  unfollowUser() {
    console.log('UNFOLLOW FROM PROFILE', this.state.id);
    follows.unfollow(this.state.id)
      .then(result => {
        this.setState({ followed: true });
      }).catch(err => console.log(err))
  }
  pressScroll() {
    this.scrollView.scrollTo({x:0, y: 400, animated: true});
  }

  follow() {
    console.log('THIS.PROPS.PROFILE', this.state.profile);
    AsyncStorage.getItem('userId')
    .then((followerId) => {
      let idFollower = followerId;
      follows.followsomeone(idFollower, this.state.leaderId)
      .then((res) => {
        console.log('FOLLOW RES', res);
        this.setState({ followed: false, id: res.data.id, followId: res.data.leader_id });
      })
      .catch(err => console.log('FAIL FOLLLOW', err));
    })
    .catch(err => console.log('fail ASYNC follow', err));
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  checkFollow(){
    if(this.state.leaderId !== idFollower){

    }else{

    }
  }

  render() {
    if (this.state.loading === false) {
      console.log('INI ORANG: ',this.state.profile);
      return (
        <ScrollView ref={(scroll) => { this.scrollView = scroll }}>
          <View style={styles.container} >
            <View style={styles.backgroundContainer}>
              <Image
                source={{ uri: this.state.profile.picture }}
                resizeMode={'cover'}
                style={styles.backdrop}
              />
              <View style={styles.backgroundname} >
                <Text style={styles.headline} colors={['#000', 'transparent']} >
                  {this.state.profile.name_first} {this.state.profile.name_last}
                </Text>
              </View>
              <View style={styles.textInform} >
                <TouchableOpacity onPress={() => this.pressScroll()}>
                  <Text style={styles.pos}>{strings.profileLocalization.post}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.friendlist}>
                  <Text style={styles.followers}>{strings.profileLocalization.follower}</Text>
                  <Text style={{ marginLeft: 8 }}>{this.state.countFollow}</Text>
                </TouchableOpacity>
                {this.state.me ? (
                  <TouchableOpacity onPress={Actions.setting} >
                    <Text  style= {styles.button} >
                      {strings.profileLocalization.edit}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  !this.state.me ? (
                    <View style ={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                      <TouchableOpacity onPress={() => this.toggleSwitchFollow()}>
                        <Text style = {this.state.followed ? styles.button : styles.buttonUnfollow}>
                           {this.state.followed ? 'Follow' : 'Unfollow' }</Text>
                        </TouchableOpacity>
                    </View>
                  ) : (
                  <Text />
                  )
                ) }
              </View>
            </View>
            <View style={{ position: 'absolute' }}>
              <View style={styles.viewImgpp}>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                  { this.state.avatarSource === null ? <Text>change Photo</Text> :
                  <Image style={styles.logo} source={{ uri: this.state.profile.picture }} />
                  }
                </TouchableOpacity>
              </View>
            </View>
              <View style={styles.biodata}>
                <TouchableOpacity onPress= {Actions.about}>
                <Text style={styles.bio}>{strings.profileLocalization.bio}</Text>
                </TouchableOpacity>
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
                  <Text style={styles.isi}>{strings.profileLocalization.live} : {this.state.profile.live}</Text>
                </View>
                {!this.state.me ? (
                  <View style ={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() =>this.toggleSwitchFollow()}>
                      <Text style = {styles.button}>
                         {this.state.followed ? strings.profileLocalization.follow : strings.profileLocalization.unfollow }</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() =>this.toggleSwitchFriend()}>
                        <Text style = {styles.button}>
                           {this.state.friend ? strings.profileLocalization.addFriend : strings.profileLocalization.deleteFriend }</Text>
                        </TouchableOpacity>
                  </View>
                ) : (
                <Text />
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity>
                    <Text style={styles.isi2}>{strings.profileLocalization.viewMore}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            {/* <View style={styles.mapmain}>
              <MapMain />
            </View> */}
          </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'}/>
        </View>
      );
    }
  }
  toggleSwitchFollow() {
    if (this.state.followed === true) {
      Alert.alert('Confirmation',
               'Are you sure to unfollow this user?', [
                { text: 'Cancel', onPress: () => this.setState({ clicked: this.state.followed }) },
                { text: 'Yes', onPress: () => this.unfollowUser() },
               ]);
    } else {
      this.follow();
    }
  }
}
