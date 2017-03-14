import React from 'react';
import {
  View,
  Alert,
  ListView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Item, Icon, Input } from 'native-base';
import axios from 'axios';
import follows from '../../services/follows';
import ListFollow from './ListFollow';
import strings from '../../localizations';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Friendlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: '',
      nodata: false,
      following: [],
      wait: true,
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
        follows.searchFollowing(this.state.name, myId)
        .then((res) => {
          this.changeState(res);
        })
        .catch();
      })
      .catch();
    } else {
      follows.showFollowing(this.props.user_id)
      .then((res) => {
        this.changeState(res);
      })
      .catch(err => this.showError(err));
    }
  }
  // This function is running if there is an Error
  showError(err) {
    Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
  }

  changeState(res) {
    // to change fill data follower and change state in loading, nodata, and name
    this.setState({ following: res.data }, () => {
      if (typeof this.state.following[0] === 'undefined') {
        this.setState({ nodata: true, loading: false, name: '', wait: false });
      } else {
        this.setState({ loading: false, nodata: false, name: '', wait: false });
      }
    });
  }
  // To re-render the component
  rerender() {
    this.setState({ loading: true }, () => {
      this.componentDidMount();
    });
  }

  // Change State listfollowing
  searchUpdate(val) {
    this.setState({ name: val, wait: true });
    follows.searchFollowing(this.state.name)
      .then((response) => {
        this.setState({ friendlist: response.data, wait: false });
      });
  }

  render() {
    const { loading, nodata } = this.state;
    if (loading === false && nodata === false) {
      // load this if not loading or Loading === false
      return (
        <Container>
          <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
            <Icon name="search" />
            <Input
              placeholder={strings.listfollow.searchFollower}
              onSubmitEditing={() => this.searchUpdate()}
              onChangeText={value => this.searchUpdate(value)}
            />
          </Item>
          {this.state.wait ? <ActivityIndicator /> : 
          <ListView
            dataSource={ds.cloneWithRows(this.state.following)}
            renderRow={rowData => <ListFollow rowData={{ ...rowData, type: 'following', rerender: () => this.rerender() }} />}
          />
          }
        </Container>
      );
    } else if (nodata === true && loading === false) {
      // Load this if there is no data is Showed
      return (
        <Container>
          <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
            <Icon name="search" />
            <Input
              placeholder={strings.listfollow.searchFollowing}
              onSubmitEditing={() => this.rerender()}
              onChangeText={value => this.setState({ name: value })}
            />
          </Item>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ color: '#000', fontSize: 15, alignItems: 'center' }}>{strings.listfollow.nofollowing}</Text>
            <TouchableOpacity
              onPress={() => Actions.addfriendscreen()}
              style={{ borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: '#313bf9', margin: 10, padding: 10, height: 50, width: 120 }}
            >
              <Text style={{ color: '#fff', textAlign: 'center' }}>{strings.listfollow.findfriend}</Text>
            </TouchableOpacity>
          </View>
        </Container>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}
