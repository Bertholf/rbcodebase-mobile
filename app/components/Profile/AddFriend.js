import React from 'react';
import { View, Alert, ListView, StyleSheet, ActivityIndicator, Text, Keyboard } from 'react-native';
import { Container, Item, Input, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import follow from '../../services/follows';
import ListFollow from './ListFollow';
import strings from '../../localizations';
import styles from './../../style/StyleGlobal';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class AddFriendScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
      loading: true,
      nodata: false,
      wait: true,
      friendlist: {},
      name: '',
    };
    this.timer = null;
  }
  componentDidMount() {
    follow
      .search(this.state.name)
      .then((response) => {
        this.changeState(response);
        // this.setState({ friendlist: response.data, loading: false, wait: false }, () => console.log('ini response===', this.state));
      })
      .catch((err) => {
        Alert.alert('Sorry!  You are Offline', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
      });
  }

  followRequest() {
    follow
      .search(this.state.search)
      .then((response) => {
        this.setState({ friendlist: response.data, loading: false }, () =>
          console.log('ini response===', this.state));
      })
      .catch((err) => {
        Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
      });
  }
  rerender() {
    this.setState({ loading: true }, () => {
      this.componentDidMount();
    });
  }

  searchUpdate(val) {
    this.setState({ name: val, wait: true });
    follow
      .search(this.state.name)
      .then((response) => {
        this.changeState(response);
        Keyboard.dismiss();
      })
      .catch(err => err);
  }

  changeState(response) {
    // to change fill data follower and change state in loading, nodata, and name
    this.setState({ friendlist: response.data }, () => {
      if (typeof this.state.friendlist[0] === 'undefined') {
        this.setState({ nodata: true, loading: false, name: this.state.name, wait: false });
      } else {
        this.setState({ loading: false, nodata: false, name: this.state.name, wait: false });
      }
    });
  }

  // Cancel Request
  cancelRequest(value) {
    clearTimeout(this.timer);
    this.setState({ wait: true });
    this.timer = setTimeout(() => this.searchUpdate(value), 1200);
    // if (this.state.requesting) {
    //   follows.cancelCaller().cancel('Cancel this operation');
    //   this.searchUpdate(value);
    // }
    // this.searchUpdate(value);
  }

  render() {
    const { loading, nodata, wait } = this.state;
    if (loading === false && nodata === false) {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.searchRow}>
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
            {wait === true
              ? <ActivityIndicator />
              : <ListView
                dataSource={ds.cloneWithRows(this.state.friendlist)}
                renderRow={rowData => (
                  <ListFollow
                    rowData={{ ...rowData, rerender: () => this.rerender(), type: 'search' }}
                  />
                  )}
              />}
          </View>
        </View>
      );
    } else if (nodata === true && loading === false) {
      // Return this View if there is no Data Showed
      return (
        // Search Bar
        (
          <Container>
            <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
              <Icon name="search" />
              <Input
                placeholder={strings.listfollow.searchPeople}
                onChangeText={value => this.cancelRequest(value)}
              />
            </Item>

            {this.state.wait
              ? <ActivityIndicator size={'large'} style={{ marginTop: 40 }} />
              : <View style={styles.viewWait}>
                <Text style={styles.textWait}>
                  {strings.addfriend.noUser} "{this.state.name}"
                  </Text>
              </View>}

          </Container>
        )
      );
    }
    return (
      <View style={styles.Indicator}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}
