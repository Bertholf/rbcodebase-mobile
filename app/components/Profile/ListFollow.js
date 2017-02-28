import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, StyleSheet, Text, TouchableOpacity, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import strings from '../../localizations';
import follows from '../../services/follows';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    borderColor: '#9E9E9E',
    borderWidth: 0.3,
  },
  account: {
    paddingLeft: 10,
  },
  user: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  photo: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 50,
  },
  detail: {
    fontSize: 11,
    color: 'grey',
    marginRight: 5,
    marginLeft: 3,
  },
  buttonFollow: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#2196F3',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 2,
  },
  buttonUnfollow: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    color: '#333',
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 2,
  },
  time: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
});

export default class ListFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      loading: true,
      friendlist: {},
      statusFollow: [],
    };
  }
  componentDidMount() {
    if (this.props.rowData.status === 'request') {
      this.setState({ clicked: false });
    }
  }
  updateFollowData(targetID) {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++', targetID);
    AsyncStorage.getItem('userId')
    .then((id) => {
      console.log('-----------USER ID From asyn-----------', id);
      const status = 'request';
      follows.updatefollow(id, targetID, status)
      .then((response) => {
        if (response.data.status === 'request') {
          this.setState({ clicked: false });
          console.log('TRUE');
        } else if (response.data.status === 'approved') {
          this.setState({ clicked: false });
          console.log('FALSE');
        } else {
          console.log();
        }
        this.setState({ statusFollow: response.data });
        console.log(this.state.statusFollow);
        console.log('-------------DATA LIST STATUS BUTTON FOLLOW DI FOLLOWING --------------', response);
      })
      .catch((Err) => {console.log('err', Err); });
    });
  }

  unfollowUser() {
    follows.unfollow(this.props.rowData.id)
      .then(result => {
        console.log(result.id, 'UNFOLLOWED');
        this.props.rowData.rerender();
      }).catch(err => console.log(err))
  }

  toggleSwitch(id) {
    if (!this.state.clicked) {
      // this section will executed when button unFollow pressed
      Alert.alert(strings.listfollow.confirmation,
               strings.listfollow.question, [
                { text: strings.listfollow.cancel, onPress: () => this.setState({ clicked: this.state.clicked }) },
                { text: strings.listfollow.yes, onPress: () => this.unfollowUser() },
               ]);
    } else {
      // this section will executed when button follow pressed
      this.follow(id);
    }
  }
  follow(leaderId) {
    AsyncStorage.getItem('userId')
    .then((followerId) => {
      follows.followsomeone(followerId, leaderId)
      .then((res) => {
        console.log('FOLLOW RES', res);
        this.setState({ clicked: false });
      })
      .catch(err => console.log('FAIL FOLLLOW', err));
    })
    .catch(err => console.log('fail ASYNC follow', err));
  }

  render() {
    console.log('list props',this.props);
    let rowData;
    if (this.props.rowData.type === 'follower') {
      rowData = this.props.rowData.follower;
    } else if (this.props.rowData.type === 'following') {
      rowData = this.props.rowData.leader;
    } else {
      // this section will call when add friend call use this this component
      rowData = this.props.rowData;
    }

    // this state for disable button follow if privacy_follow = 'none'
      let setting = this.props.rowData.setting;
      let privacy_follow;
      if (setting !== null){
       privacy_follow = setting.privacy_follow;
      }else{
        console.log('this nul setting');
      }
    console.log('nin ada oo====', privacy_follow);
    return (
      <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Actions.profile({ profile: rowData, idFollow: this.props.rowData.id })}
        activeOpacity={0.7}
      >
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: rowData.picture }} style={styles.photo} />
            <View style={styles.account}>
              <Text style={styles.user}>
                {rowData.name_first} {rowData.name_last}
              </Text>
              <Text style={styles.detail}>{rowData.name_slug}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity disabled={ privacy_follow !== 'none' ? false : true } onPress={() => {
            this.toggleSwitch(rowData.id);
          }}>
            <Text style={this.state.clicked ? styles.buttonFollow : styles.buttonUnfollow}>
              {this.state.clicked ? strings.listfollow.follow : strings.listfollow.unfollow }</Text>
          </TouchableOpacity>
      </View>
    );
  }

}
