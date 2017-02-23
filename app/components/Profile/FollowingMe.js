import React from 'react';
import { View, Alert, ListView, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import friend from '../../services/friend';
import ListFollow from './ListFollow';
import auth from './../../services/auth';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class FollowingMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      loading: true,
      friendlist: {},
      aFollower: [],
    };
  }
  componentDidMount() {
    friend.getFriend()
    .then((response) => {
      this.setState({ friendlist: response.data, loading: false });
    }).catch((err) => {
      console.log('FOllowing ME ERROR', err);
      Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    });
    auth.follower()
    .then(response => this.setState({ aFollower: response.data }, () => console.log('-------------LIST FOLLOWER --------------', response)))
    .catch(Err => console.log('err', Err));
  }
  render() {
    const props = { statusFollow: this.state.listStatus };
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.aFollower)}
          renderRow={rowData => <ListFollow rowData={rowData} />}
        />
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
