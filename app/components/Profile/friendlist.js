import React from 'react';
import { View,Alert, ListView, StyleSheet, Text, TouchableOpacity, Image,ScrollView, ActivityIndicator } from 'react-native';
import friend from '../../services/friend';
import {Actions} from 'react-native-router-flux';
import ListFollow from './ListFollow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    borderColor: '#9E9E9E',
    borderWidth: 0.3,
  },
  account: {
    paddingLeft: 10,
  },
  user: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10
  },
  photo: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 50,
  },
  detail: {
    fontSize: 11,
    color: 'grey',
    marginRight: 5,
    marginLeft: 3
  },
  button: {
     flexDirection: 'row',
     padding: 6,
     backgroundColor: '#2196F3',
     justifyContent:'space-between',
     color: 'white',
     alignItems:'center',
     marginTop: 7,
     borderRadius: 2,
  },
  time: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
});

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Friendlist extends React.Component {
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
      .then((data) => {
        this.setState({ friendlist: data, loading: false });
      }).catch(err => console.log('ERROR LOH', err));
    }

  render() {
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.friendlist.data)}
          renderRow={(rowData) => <ListFollow rowData={rowData}/> }
        />
      );
    } else {
      return (
        <Text>No Content Display</Text>
      );
    }
  }
}
