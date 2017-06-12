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
  ListView,
  TextInput,
} from 'react-native';
import ProfilePost from './ProfilePost';
import {
  Card,
  CardItem,
  Container,
  Right,
  Left,
  Button ,
  Fab ,
  Icon,
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import follows from '../../services/follows';
import saveProfile from '../../services/updateProfile';
import post from '../../services/post';
import auth from '../../services/auth';
import strings from '../../localizations';
import styles from './../../style/profileStyle';
import timelineList from '../../services/timelineList';
import TimelineList from '../Timeline/TimelineList';

const settingIconwhite = require('./../../images/ic_settings_white_24dp.png');
const saveIcon = require('./../../images/accept.png');


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      profileImage  : require('./../../images/gunung.jpg'),
      loading: true,
      id: this.props.user_id,
      profile: this.props.profile,
      displayName: this.props.profile.name_display,
      leaderId: this.props.profile.id,
      tableId: '',
      followed: true,
      countPost: null,
      countFollowing: null,
      countFollower: null,
      friend: false,
      onEdit: false,
      button: false,
      me: false,
      request: false,
      list: [],
      image: null,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('userId')
    .then((id) => {
      if (id === this.state.profile.id.toString()) {
        this.setState({ me: true });
      }
      this.followHasSomeone(id, this.state.profile.id);

      // Get all follower
      follows
        .showFollower(this.state.profile.id)
        .then((res) => {
          const countFollowers = res.data.length;
          this.setState({ countFollower: countFollowers, loading: false });
        })
        .catch(() => {
          Alert.alert('Fail to connect to server', '', [
            { text: 'OK', onPress: () => Actions.pop() },
          ]);
        });
    });

    // Get all post
    post.getPost()
      .then((res) => {
        const countPosts = res.data[0].posts.length;
        this.setState({ countPost: countPosts, loading: false })
      })
      .catch(() => {
        Alert.alert('Fail to connect to server', '', [
          { text: 'OK', onPress: () => Actions.pop() },
        ]);
      });

    // Get all following
    follows.showFollowing(this.state.profile.id)
      .then((res) => {
      const countFollowings = res.data.length;
      this.setState({ countFollowing: countFollowings, loading: false });
      })
    .catch(() => {
      Alert.alert('Fail to connect to server', '', [
        { text: 'OK', onPress: () => Actions.pop() },
      ]);
    });
  }

  componentWillMount(){
    const id = this.state.id;
    timelineList
    .getTimelineId(id)
    .then((res) => {
      this.setState({
        list:res.data[0].posts
      })
    })
  }

  unfollowUser() {
    const id = this.state.tableId;
    follows
      .unfollow(id)
      .then(() => {
        this.setState({ followed: false });
      })
      .catch(err => {
        console.log("Error unfollow", err.message);
      });
  }
  pressScroll() {
    this.scrollView.scrollTo({ x: 0, y: 400, animated: true });
  }

  follow() {
    AsyncStorage.getItem('userId')
      .then((followerId) => {
        const idFollower = followerId;
        follows
          .followsomeone(idFollower, this.state.leaderId)
          .then((res) => {
            this.setState({
              followed: true,
              request: true,
              tableId: res.data.id,
              followId: res.data.leader_id,
            });
          })
          .catch(err => { console.log("Error", err.message) });
      })
      .catch(err => { console.log("Error", err.message) });
  }

  followHasSomeone(followerId, leaderId) {
    follows
      .checkFollowing(followerId, leaderId)
      .then((res) => {
        this.setState({
          followed: typeof res.data.id !== 'undefined',
          tableId: res.data.id
        });
      })
      .catch(err => { console.log("Error", err.message) });
  }

  render() {
    const hasDisplayName = this.state.displayName !== null;
    const displayName = this.state.displayName;
    const id = this.state.profile.id;
    const name_first = this.state.profile.name_first;
    const name_slug = this.state.name_slug;
    const name_last = this.state.profile.name_last;
    const gender = this.state.profile.gender;
    const avatar = this.state.image;

    selectPhotoTapped = () => {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
        },
      };

      ImagePicker.showImagePicker(options, (response) => {
        console.log("RESPONSE BRO==============>>>>>>>>.", response);
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const userId = this.state.id;
          const url = `http://localhost:8000/api/users/${userId}`;
          let source = response.fileName;

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
            image: url + source,
          });

          saveProfile(id, name_first, name_last, displayName, name_slug, gender, this.state.image);
        }
      });
    }

    const editDisplayName = () => {
      this.setState({ onEdit: !this.state.onEdit });
    }

    // Save new display name
    const changeDisplayName = () => {
      this.setState({
        onEdit: !this.state.onEdit
      })

      // Save display name
      saveProfile(id, name_first, name_last, displayName, name_slug, gender, avatar);
    }

    {
      for(var x in this.props.status) console.log(this.props.status[x] + x + "ini")
    }
    if (this.state.loading === false) {
      return (
      <View>
        <ScrollView
          ref={(scroll) => {
            this.scrollView = scroll;
          }}
        >
          <View style={styles.container}>
            <View style={styles.backgroundContainer}>
              <Image
                source={require('./../../images/gunung.jpg')}
                resizeMode={'cover'}
                style={styles.backdrop}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => Actions.pop()}>
                    <Image source={require('./../../images/back.png')} style={styles.back} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={Actions.setting}>
                    <Image source={settingIconwhite} style={styles.backsetting} />
                  </TouchableOpacity>
                </View>
                <View style={styles.viewImgpp}>
                  <TouchableOpacity
                    disabled={this.state.request}
                    onPress={selectPhotoTapped.bind(this)}
                  >
                    {this.state.avatarSource === null
                      ? <Image style={styles.logo} resizeMode="contain" source={{ uri: this.state.profile.picture }} />
                      : <Image style={styles.logo} resizeMode="contain" source={{ uri: this.state.profile.picture }} />}
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>
                  {this.state.me
                    ? <View />
                    : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <TouchableOpacity
                            disabled={this.props.status.status === 'request' && this.state.request}
                            onPress={() => this.toggleSwitchFollow()}
                          >
                            <Text style={this.state.followed ? styles.button : styles.button}>
                              {this.state.followed
                                  ? this.props.status.status === 'request'
                                      ? 'Requested'
                                      : strings.profileLocalization.unfollow
                                  : strings.profileLocalization.follow}
                            </Text>
                          </TouchableOpacity>
                        </View>}
                </View>
              </Image>
            </View>
            {/* <View style={{ borderWidth : 0.5 , borderColor: '#E0E0E0', marginTop: 10 }} />  */}

            <View style={styles.biodata}>
              <Card>
                <View>
                  <View style={styles.profile}>
                      <Text style={styles.username}>
                       {this.state.profile.name_slug}
                      </Text>
                      {hasDisplayName ?
                        this.state.onEdit ?
                          <View style={styles.box}>
                            <TextInput
                              style={styles.input}
                              value={this.state.displayName}
                              onChangeText={displayName => this.setState({ displayName })}
                            />
                            <TouchableOpacity onPress={() => changeDisplayName()}>
                              <Image
                                source={saveIcon}
                                style={styles.saveIcon}
                              />
                            </TouchableOpacity>
                          </View> :
                          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => editDisplayName()}>
                              <Text style={styles.headline}>
                                {this.state.displayName}
                              </Text>
                            </TouchableOpacity>
                          </View> :
                        <Text style={styles.headline}>
                          {this.state.profile.name_first} {this.state.profile.name_last}
                        </Text>
                      }
                    <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                    <Button transparent onPress={Actions.chatfriend} style={styles.chatImg} >
                      <Icon name="ios-mail" style={{ color: '#0A69FE' }} />
                    </Button>
                    </View>
                  </View>
                  <View style={styles.textInform}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <TouchableOpacity>
                        <Text style={styles.pos}>{strings.profileLocalization.post}</Text>
                        <Text style={{ marginLeft: 8, textAlign: 'center', fontSize: 25 }}>
                          {this.state.countPost}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <TouchableOpacity onPress={Actions.follower}>
                        <Text style={styles.followers}>{strings.profileLocalization.follower}</Text>
                        <Text style={{ marginLeft: 8, textAlign: 'center', fontSize: 25 }}>
                          {this.state.countFollower}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                      <TouchableOpacity onPress={Actions.following}>
                        <Text style={styles.followerss}>
                          {strings.profileLocalization.following}
                        </Text>
                        <Text style={{ marginLeft: 8, textAlign: 'center', fontSize: 25 }}>
                          {this.state.countFollowing}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Card>
              <Card>
                <View style={{ paddingVertical: 10 }}>
                  <Text style={styles.bio}>{strings.profileLocalization.lastHiking}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      paddingHorizontal: 15,
                    }}
                  >
                    <View style={{ flexDirection: 'column' }}>
                      <View style={styles.posisi}>
                        <Image style={styles.icon} source={require('./../../images/jarak.png')} />
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.isi}>{strings.profileLocalization.from} :</Text>
                        <Text style={{ marginLeft: 8, textAlign: 'center', fontSize: 16, marginBottom: 8 }}>
                          N/A
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                      <View style={styles.posisi}>
                        <Image
                          style={styles.icon}
                          source={require('./../../images/mountain.png')}
                        />
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.isi}>{strings.profileLocalization.from} :</Text>
                        <Text style={{ marginLeft: 8, textAlign: 'center', fontSize: 16, marginBottom: 8 }}>
                          N/A
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                    <View style={styles.posisi}>
                      <Image style={styles.icon} source={require('./../../images/live.png')} />
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                              <Text style={styles.isi}>{strings.profileLocalization.live} :</Text>
                                              <Text style={{ marginLeft: 8, textAlign: 'center', fontSize: 16, marginBottom: 8 }}>
                                                N/A
                                              </Text>
                                            </View>
                                          </View>
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
                                    </Card>
                                  </View>
                                  {/*
                                    This is will be used later
                                    ===============================
                                    <View style={styles.mapmain}>
                                    <MapMain />
                                  </View> */}
                                </View>
                                <View style={{ margin: 12 }}>
                                <ListView
                                  enableEmptySections
                                  dataSource={ds.cloneWithRows(this.state.list)}
                                  renderRow={dataPost => <TimelineList dataPost={dataPost} />}
                                />
                                </View>
                              </ScrollView>
                            </View>
                            );
                          }
                          return (
                            <View style={styles.Indicator}>
                              <ActivityIndicator size={'large'} />
                            </View>
                          );
                        }
                        toggleSwitchFollow() {
                          if (this.state.followed === true) {
                            Alert.alert('Confirmation', strings.profileLocalization.areYouFollow, [
                              {
                                text: strings.logoutLocalization.cancel,
                                onPress: () => this.setState({ clicked: this.state.followed }),
                              },
                              { text: strings.profileLocalization.yes, onPress: () => this.unfollowUser() },
                            ]);
                          } else {
                            this.follow();
                          }
                        }
                      }
