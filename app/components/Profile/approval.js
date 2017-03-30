import React from 'react';
import { View, Alert, ListView, ActivityIndicator, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, ListItem, Body, Right } from 'native-base';
import follows from '../../services/follows';
import ListApproval from './ListApproval';
import strings from '../../localizations';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Approval extends React.Component {
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
    AsyncStorage.getItem('userId')
    .then((myId) => {
      follows.showApproval(myId)
      .then((res) => {
        console.log('proses hhhhhh');
        this.changeState(res);
      })
      .catch(err => this.showError(err));
    })
    .catch(err => console.log('fail to get user id from asyncStorege', err));
  }

  showError(err) {
    console.log(err);
    Alert.alert('Sorry!  You are Offline ', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
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
      /**
       * if response has data
       * show it in ListView
       *
       */
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.follower)}
          renderRow={rowData => <ListApproval
            rowData={{ ...rowData,
              type: 'follower',
              rerender: () => this.rerender() }}
          />}
        />
      );
    } else if (nodata === true) {
      /**
       * if response is === null or empty and loading is false
       * show empty message
       */
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
    } else {
      /**
       * Show ActivityIndicator
       * if (nodata === true && loading === true)
       */
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
  }
}
