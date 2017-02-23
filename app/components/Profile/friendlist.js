import React from 'react';
import { View,Alert, ListView, StyleSheet, Text, TouchableOpacity, Image,ScrollView, ActivityIndicator } from 'react-native';
import friend from '../../services/friend';
import {Actions} from 'react-native-router-flux';
import ListFollow from './ListFollow';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Friendlist extends React.Component {
  state = {
    clicked : true
  }
  constructor(props) {
      super(props);
      this.state = {
        clicked: true,
        loading: true,
        friendlist: {},
      };
    }
    componentDidMount() {
      friend.getFriend()
      .then((response) => {
        this.setState({ friendlist: response.data, loading: false });
      }).catch((err) => {
        console.log('Friendlist ERROR', err);
        Alert.alert('Cannot Connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
      });
    }

  render() {
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.friendlist)}
          renderRow={(rowData) => <ListFollow rowData={rowData}/> }
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
