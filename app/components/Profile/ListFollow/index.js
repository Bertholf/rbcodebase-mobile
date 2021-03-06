import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, StyleSheet, Text, TouchableOpacity, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import { Container, Content, ListItem, Body, Right } from 'native-base';
import strings from '../../../localizations';
import follows from '../../../services/follows';
import styles from './style';

export default class ListFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      loading: true,
      friendlist: {},
      statusFollow: [],
      followTableID: '',
      request: false,
      wait: false,
    };
  }
  componentDidMount() {
    if (this.props.rowData.status === 'request') {
      this.setState({ clicked: false, request: true, loading: false });
    }
    if (this.props.rowData.type === 'following') {
      const idFol = this.props.rowData.follower_id;
      const idLed = this.props.rowData.leader_id;
      follows
        .showFollowing2(idLed, idFol)
        .then(() => {
          this.setState({ clicked: false, request: true, loading: false });
        })
        .catch(() => {
          this.setState({ clicked: true });
        });
    } else if (this.props.rowData.type === 'following') {
      this.setState({ clicked: false, loading: false });
    }
    if (this.props.rowData.type === 'follower') {
      this.setState({ loading: false });
    } else if (this.props.rowData.type === 'search') {
      this.setState({ loading: false });
    }
  }
  updateFollowData(targetID) {
    AsyncStorage.getItem('userId').then((id) => {
      const status = 'request';
      follows
        .updatefollow(id, targetID, status)
        .then((response) => {
          if (response.data.status === 'request') {
            this.setState({ clicked: false });
          } else if (response.data.status === 'approved') {
            this.setState({ clicked: false });
          } else {
            return;
          }
          this.setState({ statusFollow: response.data });
          // console.log(this.state.statusFollow);
        })
        .catch((Err) => {
          console.log('err', Err);
        });
    });
  }

  unfollowUser() {
    if (this.props.rowData.type === 'follower') {
      const idFol = this.props.rowData.follower_id;
      const idLed = this.props.rowData.leader_id;
      follows
        .showFollowing2(idLed, idFol)
        .then(() => {
          follows
            .unfollow(this.state.followTableID)
            .then(() => {
              this.setState({ clicked: true });
              this.rerender();
            })
            .catch((err) => {
              console.log('ERROR', err);
            });
        })
        .catch((err) => {
          console.log('Error', err);
        });
    } else if (this.props.rowData.type === 'search') {
      follows
        .unfollow(this.state.followTableID)
        .then((result) => {
          this.setState({ clicked: true });
        })
        .catch(err => err);
    } else if (this.state.followTableID === '') {
      follows
        .unfollow(this.props.rowData.id)
        .then((result) => {
          this.setState({ clicked: true });
        })
        .catch(err => console.log(err));
    } else {
      follows
        .unfollow(this.state.followTableID)
        .then(() => {
          this.setState({ clicked: true });
        })
        .catch(err => err);
    }
  }

  toggleSwitch(id) {
    if (!this.state.clicked) {
      // this section will executed when button unFollow pressed
      Alert.alert(strings.listfollow.confirmation, strings.listfollow.question, [
        {
          text: strings.listfollow.cancel,
          onPress: () => this.setState({ clicked: this.state.clicked }),
        },
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
        follows
          .followsomeone(followerId, leaderId)
          .then((res) => {
            console.log('THIS IS FOLLOW', res);
            this.setState({ clicked: false, followTableID: res.data.id, request: res.data.status });
          })
          .catch(err => err);
      })
      .catch(err => err);
  }

  rerender() {
    this.setState({ loading: true }, () => {
      this.componentDidMount();
    });
  }

  // hidebutton() {
  //   this.setState({ wait: false }, () => {
  //     this.props.data.id;
  //   });
  // }

  render() {
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
    const data = this.props.rowData;
    let setting;
    let type_id;
    if (this.props.rowData.type === 'follower') {
      setting = data.follower.setting;
      type_id= this.props.rowData.follower_id;

    } else if (this.props.rowData.type === 'following') {
      setting = data.leader.setting;
      type_id= this.props.rowData.leader_id;
    } else {
      setting = data.setting;
      type_id= this.props.rowData.id;
    }

    if (setting === null) {
      setting = {
        privacy_follow: 'everyone',
      };
    }
    return (
      <Content>
        <ListItem>
          <TouchableOpacity
            onPress={() =>
              Actions.profile({
                profile: rowData,
                idFollow: this.props.rowData.id,
                user_id:type_id,
                status: this.props.rowData,
                request: this.props.rowData.status,
              })}
            activeOpacity={0.7}
          >
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: rowData.picture }} style={styles.photo} />
                <View style={styles.account}>
                  <Text style={styles.user}>
                    {rowData.name_first} {rowData.name_last}
                  </Text>
                  <Text style={styles.detail}>{rowData.name_slug}</Text>
                </View>
              </View>
            </Body>
          </TouchableOpacity>
          <Right>
            {this.state.loading
              ? <ActivityIndicator />
              : <TouchableOpacity
                disabled={
                    this.props.rowData.status === 'request'
                      ? true
                      : setting.privacy_follow === 'none'
                  }
                onPress={() => {
                  this.toggleSwitch(rowData.id);
                }}
              >
                {/* This is condition for text change  */}
                <Text
                  style={
                      this.props.rowData.type === 'follower'
                        ? ''
                        : this.state.clicked ? styles.buttonFollow : styles.buttonUnfollow
                    }
                >
                  {this.props.rowData.type === 'follower'
                      ? ''
                      : this.props.rowData.status === 'request'
                          ? 'Pending'
                          : this.state.clicked
                              ? strings.listfollow.follow
                              : strings.listfollow.unfollow}
                  {' '}
                </Text>
              </TouchableOpacity>}
          </Right>
        </ListItem>
      </Content>
    );
  }
}
