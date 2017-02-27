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
import strings from '../../localizations';

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchRow: { flexDirection: 'row', flex: 1 },
  searchText: { flex: 7 },
  searchBtn: {
    flex: 3,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  listView: { flex: 9 },
});

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
      this.setState({ friendlist: response.data, loading: false }, () => console.log('ini response===', this.state));
    }).catch((err) => {
      console.log('ADD FRIEND ERROR', err);
      Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    });
  }

  render() {
    if (this.state.loading === false) {
      const privacyFollow = this.state.friendlist[0].setting.privacy_follow;
      console.log('privas=========', privacyFollow);

      // const checkPrivacyFollow = () => {
      //   if(privacyFollow !== 'none')
      // }

      return (
        <View style={styles.container}>
          <View
            style={styles.searchRow}
          >
            <TextInput
              style={styles.searchText}
              placeholder={strings.addfriend.search}
              placeholderTextColor="silver"
              selectionColor="silver"
              underlineColorAndroid="rgba(0,0,0,0)"
              editable
              onChangeText={search => this.setState({ search })}
            />
            <TouchableOpacity >
              <View style={styles.searchBtn} >
                <Text style={{ color: '#fff' }}>{strings.addfriend.search}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listView}>
            <ListView
              dataSource={ds.cloneWithRows(this.state.friendlist)}
              renderRow={rowData => <ListFollow rowData={{ ...rowData }} />}
            />
          </View>
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
