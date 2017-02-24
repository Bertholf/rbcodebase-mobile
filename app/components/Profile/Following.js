import React from 'react';
import { View,Alert, ListView, StyleSheet, Text, TouchableOpacity, Image,ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import follows from '../../services/follows';
import ListFollow from './ListFollow';
import strings from '../../localizations';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Friendlist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        nodata: false,
        following: [],
      };
    }
  componentDidMount() {
    /*
     * if this screen called by profile, it must be receive props user id
     *  if called called by user panel, it will use user id from asyncStorege
    */
    if (typeof this.props.user_id === 'undefined') {
      AsyncStorage.getItem('userId')
      .then((myId) => {
        follows.showFollowing(myId)
        .then((res) => {
          this.changeState(res);
        })
        .catch(err => this.showError(err));
      })
      .catch(err => console.log('fail to get user id from asyncStorege', err));
    } else {
      follows.showFollowing(this.props.user_id)
      .then((res) => {
        this.changeState(res);
        console.log('Other following data response ', res);
      })
      .catch(err => this.showError(err));
    }
  }

  showError(err) {
    Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    console.log('fail to get following', err);
  }

  changeState(res) {
    this.setState({ following: res.data }, () => {
      if (typeof this.state.following[0] === 'undefined') {
        this.setState({ nodata: true, loading: false });
      } else {
        this.setState({ loading: false });
      }
    });
  }

  render() {
    const { loading, nodata } = this.state;
    if (loading === false && nodata === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.following)}
          renderRow={rowData => <ListFollow person={{ ...rowData, type: 'following' }} />}
        />
      );
    } else if (nodata === true) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontSize: 30 }}>{strings.listfollow.nofollowing}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }
}
