import React from 'react';
import { View, Alert, ListView, ActivityIndicator, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import follows from '../../services/follows';
import ListFollow from './ListFollow';
import strings from '../../localizations';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class FollowingMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      nodata: false,
      name: '',
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
        follows.searchFollower('', myId)
        .then((res) => {
          console.log('INI Response=====>', res);
          this.changeState(res);
        })
        .catch(err => this.showError('ERROR KAKAK====>', err));
      })
      .catch();
    } else {
      follows.showFollower(this.props.user_id)
      .then((res) => {
        this.changeState(res);
      })
      .catch(err => this.showError(err));
    }
  }

  showError(err) {
    Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
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
  rerender() {
    this.setState({ loading: true }, () => {
      this.componentDidMount();
    });
  }
  render() {
    const { loading, nodata } = this.state;
    if (loading === false && nodata === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.follower)}
          renderRow={rowData => <ListFollow rowData={{ ...rowData, type: 'follower' }} />}
        />
      );
    } else if (nodata === true) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Text style={{ color: '#000', fontSize: 15, alignItems: 'center' }}>{strings.listfollow.nofollower}</Text>
          <TouchableOpacity
            onPress={() => Actions.addfriendscreen()}
            style={{ borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: '#313bf9', margin: 10, padding: 10, height: 50, width: 120 }}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>{strings.listfollow.findfriend}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}
