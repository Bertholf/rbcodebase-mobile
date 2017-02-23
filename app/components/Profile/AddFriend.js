import React from 'react';
import {
  View,
  Alert,
  ListView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import friend from '../../services/friend';
import ListFollow from './ListFollow';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class AddFriendScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      loading: true,
      friendlist: {},
    };
  }
  componentDidMount() {
    friend.getFriend()
    .then((response) => {
      this.setState({ friendlist: response.data, loading: false });
    }).catch(err => {
      console.log('ADD FRIEND ERROR', err);
      Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    });
  }

  render() {
    if (this.state.loading === false) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: 'row', flex: 1 }}
          >
            <TextInput
              style={{ flex: 7 }}
              placeholder={'Search'}
              placeholderTextColor="silver"
              selectionColor="silver"
              underlineColorAndroid="rgba(0,0,0,0)"
              editable
              onChangeText={search => this.setState({ search })}
            />
            <TouchableOpacity >
              <View style={{ flex: 3, backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center', borderRadius: 5, padding: 5, margin: 5 }} >
                <Text style={{ color: '#fff' }}>Search</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 9 }}>
            <ListView
              dataSource={ds.cloneWithRows(this.state.friendlist)}
              renderRow={rowData => <ListFollow rowData={rowData} />}
            />
          </View>
        </View>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
}
