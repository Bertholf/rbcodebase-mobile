import React, { Component } from 'react';
import {
     View,
     TouchableOpacity,
     Text,
     Image,
     StyleSheet,
     ScrollView,
     ActivityIndicator,
} from 'react-native';
import me from '../../services/me';
import styles from './ProfileStyle';
import { Actions } from 'react-native-router-flux';

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
    me.getMe()
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
                  {this.state.profile.firstName} {this.state.profile.lastName}
                </Text>
              </View>
              <View style={styles.textInform} >
                <Text style={styles.pos}>{this.state.profile.postTotal} Post</Text>
                <TouchableOpacity onPress={Actions.friendlist} >
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
                <Image
                  style={styles.icon} source={require('./../../images/jarak.png')}
                />
                <Text style={styles.isi}>1200 Km</Text>
              </View>
              <View style={styles.posisi}>
                <Image
                  style = {styles.icon} source ={require('./../../images/mountain.png')}
                />
                <Text style={styles.isi}>from: {this.state.profile.from}</Text>
              </View>
              <View style={styles.posisi}>
                <Image
                  style={styles.location} source ={require('./../../images/live.png')}
                />
                <Text style={styles.isi}>live : {this.state.profile.live}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity>
                  <Text style={styles.isi2}>View More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
}
