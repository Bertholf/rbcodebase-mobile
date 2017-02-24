import React from 'react';
import { View, Alert, ListView, ActivityIndicator, AsyncStorage, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import follows from '../../services/follows';
import ListFollow from './ListFollow';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class FollowingMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      nodata: false,
      follower: [],
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
          follows.showFolllower(53)
        .then((res) => {
          this.changeState(res);
        })
        .catch(err => this.showError(err));
      })
      .catch(err => console.log('fail to get user id from asyncStorege', err));
    } else {
      follows.showFolllower(this.props.user_id)
      .then((res) => {
        this.changeState(res);
        console.log('Other follower data response ', res);
      })
      .catch(err => this.showError(err));
    }
  }

  showError(err) {
    Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    console.log('fail to get follower', err);
  }

  changeState(res) {
    this.setState({ follower: res.data }, () => {
      if (typeof this.state.follower[0] === 'undefined') {
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
          dataSource={ds.cloneWithRows(this.state.follower)}
          renderRow={rowData => <ListFollow person={{ ...rowData, type: 'follower' }} />}
        />
      );
    } else if (nodata === true) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#000', fontSize: 30 }}>No Follower</Text>
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
