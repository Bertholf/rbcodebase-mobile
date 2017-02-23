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
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import me from '../../services/me';
import styles from './ProfileStyle';
import MapMain from '../Timeline/TimelineComp';
import auth from './../../services/auth';
import userPanel from '../UserPanel/UserPanel';
import friend from '../../services/friend';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    state ={
      avatarSource: null,
    };
    this.state = {
      followed: false,
      friend: false,
      loading: true,
      profile: {},
      my: this.props.my,
      name: false,
    };
  }

  componentDidMount() {
    auth.profile()
   .then(response => this.setState({ profile: response.data}, () => console.log(this.state)))
   .catch(Err => console.log('err,Err'));
    if (this.state.profile){
      this.setState({ loading: false })
    } else {
      me.getMe()
      .then(data => this.setState({ profile: data, loading: false }))
      // .then((response) => console.log('ME Response', response))
      // .catch(err => this.setState({ loading: false }));
    }

  }
  // toggleSwitch() {
  //   if (!this.state.clicked) {
  //     Alert.alert('Confirmation',
  //              'Are you sure to unfollow this user?', [
  //             { text: 'Cancel', onPress: () => this.setState({ clicked: this.state.clicked }) },
  //               { text: 'Yes', onPress: () => this.setState({ clicked: !this.state.clicked }) },
  //              ]);
  //   } else {
  //     this.setState({ clicked: !this.state.clicked });
  //   }
  // }
  pressScroll() {
    this.scrollView.scrollTo({x:0, y: 400, animated: true});
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

  render() {
    //if (this.state.loading === false) {
    console.log(this.state.my);
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
                <Text style={styles.headline} colors={['#F00', 'transparent']} >
                  {this.state.profile.name_first} {this.state.profile.name_last}
                </Text>
              </View>
              <View style={styles.textInform} >
                <TouchableOpacity onPress={() => this.pressScroll()}>
                  <Text style={styles.pos}>{this.state.profile.postTotal} Post</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.friendlist}>
                  <Text style={styles.followers}>{this.state.profile.follower} Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Actions.setting} >
                  <Text style={styles.button}>
                    Edit
                  </Text>
                </TouchableOpacity>
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
              <View style={styles.biodata}>
                <Text style={styles.bio}>Bio</Text>
                <Text style={styles.isi}>{this.state.profile.about}</Text>
                <Text style={styles.bio}>Last Hiking</Text>
                <View style={styles.posisi}>
                  <Image
                    style={styles.icon} source={require('./../../images/jarak.png')}
                  />
                  <Text style={styles.isi}>{this.state.profile.distance} Km</Text>
                </View>
                <View style={styles.posisi}>
                  <Image
                    style={styles.icon} source={require('./../../images/mountain.png')}
                  />
                  <Text style={styles.isi}>from: {this.state.profile.from}</Text>
                </View>
                <View style={styles.posisi}>
                  <Image
                    style={styles.location} source={require('./../../images/live.png')}
                  />
                  <Text style={styles.isi}>live : {this.state.profile.live} {this.state.profile.created_at}</Text>
                </View>
                <View style ={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                  {/* <TouchableOpacity onPress={()=>this.toggleSwitchFollow()}>
                    <Text style = {styles.button}>
                       {this.state.followed ? 'Follow' : 'Unfollow' }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.toggleSwitchFriend()}>
                      <Text style = {styles.button}>
                         {this.state.friend ? 'Add Friend' : 'Delete Friend' }</Text>
                      </TouchableOpacity> */}
                      {this.props.my ? <Text /> : <Text>It's not Profile me </Text> }
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                  <TouchableOpacity>
                    <Text style={styles.isi2}>View More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.mapmain}>
              <MapMain />
            </View>
          </View>
        </ScrollView>
      );
  //  }
    // else {
    //   return (
    //       <Text>No Data Found</Text>
    //   );
    // }
  }
  toggleSwitchFollow() {
    if (!this.state.followed) {
      Alert.alert('Confirmation',
               'Are you sure to unfollow this user?', [
                { text: 'Cancel', onPress: () => this.setState({ followed: this.state.followed }) },
                { text: 'Yes', onPress: () => this.setState({ followed: !this.state.followed }) },
               ]);
    } else {
      this.setState({ followed: !this.state.followed });
    }
  }

  toggleSwitchFriend() {
    if (!this.state.friend) {
      Alert.alert('Confirmation',
               'Are you sure to Delete this user?', [
                { text: 'Cancel', onPress: () => this.setState({ friend: this.state.friend }) },
                { text: 'Yes', onPress: () => this.setState({ friend: !this.state.friend }) },
               ]);
    } else {
      this.setState({ friend: !this.state.friend });
    }
  }
}
