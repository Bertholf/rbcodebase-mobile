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
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
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
      wait: true,
      friendlist: {},
      name: this.props.name || '',
    };
    this.timer = null;
  }
  componentDidMount() {
    follow.search(this.state.name)
    .then((response) => {
      this.setState({ friendlist: response.data, loading: false, wait: false }, () => console.log('ini response===', this.state));
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

  searchUpdate(val) {
    this.setState({ name: val, wait: true });
    follow.search(this.state.name)
      .then((response) => {
        this.setState({ friendlist: response.data, wait: false });
      });
  }

  cancelRequest(value) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.searchUpdate(value), 1750);
    // if (this.state.requesting) {
    //   follows.cancelCaller().cancel('Cancel this operation');
    //   this.searchUpdate(value);
    // }
    // this.searchUpdate(value);
  }

  render() {
    if (this.state.loading === false) {
      return (
        <View style={styles.container}>
          <View
            style={styles.searchRow}
          >
            <Container>
              <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
                <Icon name="search" />
                <Input
                  placeholder={strings.listfollow.searchPeople}
                  onChangeText={value => this.cancelRequest(value)}
                />
              </Item>
            </Container>
          </View>
          <View style={styles.listView}>
            {this.state.wait === true ? <ActivityIndicator /> :
            <ListView
              dataSource={ds.cloneWithRows(this.state.friendlist)}
              renderRow={rowData => <ListFollow rowData={{ ...rowData, rerender: () => this.rerender(), type: 'search' }} />}
            />
            }
          </View>
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
