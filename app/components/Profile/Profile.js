import React, { Component } from 'react';
import {
     View,
     TouchableOpacity,
     Text,
     StyleSheet,
     Image,
     ScrollView,
     ActivityIndicator,
} from 'react-native';
import profileService from '../../services/profile';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  touchable: {
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    height: 180,
    width: 500,
  },
  container: {
    flex: 1,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 80,
    marginLeft: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
  },
  backdrop: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
    width: 500,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: -28,
    backgroundColor: 'hsla(20,100%,100%,0.3)',
    marginRight: 110,
  },
  button: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#2196F3',
    color: 'white',
    marginLeft: 10,
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 2,
  },
  follow: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    color: 'white',
    fontSize: 15,
    borderRadius: 10,
  },
  images: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  location: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginBottom: 12,
  },
  profile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },
  foto: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  gambar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 6,
  },
  pos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
    padding: 6,
    color: '#2196F3',
  },
  followers: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-around',
    padding: 6,
    color: '#2196F3',
  },
  bio: {
    flexDirection: 'row',
    fontWeight: 'bold',
    padding: 6,
    color: 'black',
    marginLeft: 2.5,
  },
  isi: {
    flexDirection: 'row',
    color: 'grey',
    marginLeft: 10,
  },
  isi2: {
    flexDirection: 'row',
    color: '#FF5722',
    marginLeft: 240,
    marginBottom: 12,
    borderRadius: 2,
  },
  daki: {
    textAlign: 'right',
    color: 'blue',
    marginLeft: 100,
  },
  nama: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  textInform: {
    marginLeft: 100,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  posisi: {
    marginLeft: 8,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 5,
  },
  biodata: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
  },
  imgCameraContainer: {
    position: 'absolute',
    bottom: 60,
    right: 10,
    borderRadius: 80,
    width: 100,
    height: 100,
    backgroundColor: '#004D40',
  },
});

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading: true,
      profile: {},
    };
  }
  componentDidMount() {
    profileService.getProfile()
    .then(data => this.setState({ profile: data, loading: false }));
  }

  toggleSwitch() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    if (this.state.loading === false) {
      return (
        <ScrollView>
          <View style={styles.container} >
            <View style={styles.backgroundContainer}>
              <Image
                source={{ uri: this.state.profile.imgBackground }}
                resizeMode={'cover'}
                style={styles.backdrop}
              />
              <View style={styles.backgroundname} >
                <Text style={styles.headline} colors={['#F00', 'transparent']} >
                  {this.state.profile.user.first_name} {this.state.profile.user.last_name}
                </Text>
              </View>
              <View style={styles.textInform} >
                <Text style={styles.pos}>{this.state.profile.postTotal} Post</Text>
                <TouchableOpacity>
                  <Text style={styles.followers}>{this.state.profile.follower} Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toggleSwitch()}>
                  <Text style={styles.button}>
                    {this.state.clicked ? 'Follow' : 'Unfollow' }
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image style={styles.logo} source={{ uri: this.state.profile.imgProfile }} />
            </View>
            <View style={styles.biodata}>
              <Text style={styles.bio}>Bio</Text>
              <Text style={styles.isi}>{this.state.profile.about}</Text>
              <Text style={styles.bio}>Last Hiking</Text>
              <View style={styles.posisi}>
                <Image style={styles.icon} source={ require('./../../images/jarak.png')} />
                <Text style={styles.isi}>1200 Km</Text>
              </View>
              <View style={styles.posisi}>
                <Image style = {styles.icon} source = {require('./../../images/mountain.png')}/>
                <Text style={styles.isi}>from: {this.state.profile.from}</Text>
              </View>
              <View style={styles.posisi}>
                <Image style={styles.location} source = {require('./../../images/live.png')} />
                <Text style={styles.isi}>live : {this.state.profile.live}</Text>
              </View>
              <View style={styles.posisi}>
                <TouchableOpacity>
                  <Text style={styles.isi2}>View More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }else{
      return (
        <ActivityIndicator />
      );
    }
  }
}
