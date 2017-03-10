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
import SearchBar from 'react-native-material-design-searchbar';
import { Actions } from 'react-native-router-flux';
import friend from '../../services/friend';
import follow from '../../services/follows';
import ListFollow from './ListFollow';
import follows from '../../services/follows';
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
      search: {},
      loading: true,
      friendlist: {},
    };
  }
  componentDidMount() {
    follow.search(this.props.name)
    .then((response) => {
      this.setState({ friendlist: response.data, loading: false }, () => console.log('ini response===', this.state));
    }).catch((err) => {
      console.log('ADD FRIEND ERROR', err);
      Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    });
  }

  followRequest() {
    follow.search(this.state.search)
    .then((response) => {
      this.setState({ friendlist: response.data, loading: false }, () => console.log('ini response===', this.state));
    }).catch((err) => {
      console.log('ADD FRIEND ERROR', err);
      Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    });
  }
  rerender() {
    this.setState({ loading: true }, () => {
      this.componentDidMount();
      console.log('RE RENDER TRIGGERD');
    });
  }


  render() {
    if (this.state.loading === false) {
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
              onChangeText={value => this.setState({ searchFrisend: value })}
            />
            {/* <SearchBar
              onSearchChange={value => this.setState({ searchFrisend: value })}
              height={50}
              widht
              onFocus={() => console.log('On Focus')}
              onBlur={() => console.log('On Blur')}
              placeholder={strings.addfriend.search}
            /> */}
            <TouchableOpacity onPress={() => this.SearchF()}>
              <View style={styles.searchBtn} >
                <Text style={{ color: '#fff' }}>{strings.addfriend.search}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.listView}>
            <ListView
              dataSource={ds.cloneWithRows(this.state.friendlist)}
              renderRow={rowData => <ListFollow rowData={{ ...rowData, rerender: () => this.rerender(), type: 'search' }} />}
            />
            {this.SearchF == null ?
              <ListView
                dataSource={ds.cloneWithRows(this.state.friendlist)}
                renderRow={rowData => <ListFollow rowData={{ ...rowData, rerender: () => this.rerender(), type: 'search' }} />}
              /> :
              <ListView
                dataSource={ds.cloneWithRows(this.state.search)}
                renderRow={rowData => <ListFollow rowData={{ ...rowData, rerender: () => this.rerender(), type: 'search' }} />}
              />
            }
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
