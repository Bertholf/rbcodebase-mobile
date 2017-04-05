import React from 'react';
import { View, Alert, ListView, ActivityIndicator, AsyncStorage, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Item, Icon, Input } from 'native-base';
import follows from '../../services/follows';
import ListFollow from './ListFollow';
import strings from '../../localizations';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class FollowingMe extends React.Component {
  // Initial state
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      nodata: false,
      name: '',
      follower: [],
      wait: true,
      someone: '',
      search: 0,
    };
    this.timer = null;
  }
  componentDidMount() {
    /*
     * if this screen called by profile, it must be receive props user id
     *  if called called by user panel, it will use user id from asyncStorege
    */
    if (typeof this.props.user_id === 'undefined') {
      AsyncStorage.getItem('userId')
      .then((myId) => {
        follows.searchFollower(this.state.name, myId)
        .then((res) => {
          this.changeState(res);
        })
        .catch(err => this.showError(err));
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
    console.log(err);
    Alert.alert('Sorry!  You are Offline', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
  }

  changeState(res) {
    // to change fill data follower and change state in loading, nodata, and name
    this.setState({ follower: res.data }, () => {
      if (typeof this.state.follower[0] === 'undefined') {
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
    AsyncStorage.getItem('userId')
      .then((myId) => {
        if (val !== '') {
          console.log('MASUK TRUEEEE');
          this.setState({ name: val, wait: true, someone: `${strings.listfollow.named} "${val}"`, search: 1 });
        } else {
          console.log('MASK FALSEEE');
          this.setState({ name: val, wait: true, someone: '', search: 0 });
        }
        follows.searchFollower(this.state.name, myId)
        .then((res) => {
          this.changeState(res);
        })
        .catch((thrown) => {
          this.setState({ requesting: false });
          if (follows.client().isCancel(thrown)) {
            console.log('Request is canceled', thrown.message);
          } else {
            console.log('ERROR', thrown);
          }
        });
      })
      .catch(err => console.log(err));
  }


  cancelRequest(value) {
    clearTimeout(this.timer);
    this.setState({ wait: true });
    this.timer = setTimeout(() => this.searchUpdate(value), 1250);
        // if (this.state.requesting) {
        //   follows.cancelCaller().cancel('Cancel this operation');
        //   this.searchUpdate(value);
        // }
        // this.searchUpdate(value);
  }


  render() {
    // show content in component if no data or has data
    const { loading, nodata } = this.state;
    if (loading === false && nodata === false) {
      return (
        <Container>
          {/* Search Bar in Follower Screen*/}
          <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
            <Icon name="search" />
            <Input
              placeholder={strings.listfollow.searchFollower}
              onChangeText={value => this.cancelRequest(value)}
            />
          </Item>

          {/* Show listView of follower */}
          {/*
            *Loading if data in requesting
          */}

          {this.state.wait ? <ActivityIndicator size={'large'} style={{ marginTop: 40 }} /> :
          <ListView
            dataSource={ds.cloneWithRows(this.state.follower)}
            renderRow={rowData => <ListFollow rowData={{ ...rowData, type: 'follower' }} />}
          />}

        </Container>
      );
    } else if (nodata === true && loading === false) {
      // Return this View if there is no Data Showed
      return (
        // Search Bar
        <Container>
          <Item>
            <Icon name="search" />
            <Input
              placeholder={strings.listfollow.searchFollower}
              onChangeText={value => this.cancelRequest(value)}
            />
          </Item>

          {this.state.wait ? <ActivityIndicator size={'large'} style={{ marginTop: 40 }} /> :
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            {/*
                Should show different message when user has no one following
                and didn't have following named!!
            */}
            {this.state.someone !== '' && this.state.search === 1 ?
              <Text numberOfLines={2} style={{ color: '#000', fontSize: 15, alignItems: 'center' }}>{strings.listfollow.nofollower} {this.state.someone}</Text>
            : <Text style={{ color: '#000', fontSize: 15, alignItems: 'center' }}>{strings.listfollow.nofollower}</Text>}

            <TouchableOpacity
              onPress={() => Actions.addfriendscreen()}
              style={{ borderRadius: 6, alignItems: 'center', justifyContent: 'center', backgroundColor: '#313bf9', margin: 10, padding: 10, height: 50, width: 120 }}
            >
              <Text style={{ color: '#fff', textAlign: 'center' }}>{strings.listfollow.findfriend}</Text>
            </TouchableOpacity>
          </View>}

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
