import React, { Component }  from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ListView, ActivityIndicator } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import styles from './ChatListFriendStyles';
import timelineList from '../../services/timelineList';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class ChatListFriendView extends Component {
constructor(props) {
  super(props);
  this.state = {
    loading: true,
    list: {},
    index: 0,
    routes: [
      { key: '1', title: 'Following' },
      { key: '2', title: 'Follower' },
    ],
  };
}
componentDidMount() {
  timelineList.getTimeline()
  .then((data) => {
    this.setState({ list: data, loading: false });
    console.log('hello message', this.state.notif);
  });
}
_handleChangeTab (index) {
  this.setState({ index });
};

_renderHeader (props) {
  return <TabBar {...props} />;
};
_renderScene = ({ route }) => {
switch (route.key) {
  case '1':
    return(
      <View style={styles.page}>
        <ListView
          dataSource={ds.cloneWithRows(this.state.list)}
          renderRow={(rowData) =>
             <TouchableOpacity onPress={Actions.chat}>
               <View style={styles.viewlist}>
                 <Image style={styles.contactImg} source={{ uri: rowData.avatarTimeline }} />
                 <Text style={styles.name}>{rowData.user}</Text>
               </View>
             </TouchableOpacity>}
       />
      </View>
      )
    break;
  case '2':
    return (
      <View style={styles.page}>
        <ListView
          dataSource={ds.cloneWithRows(this.state.list)}
          renderRow={(rowData) =>
             <TouchableOpacity onPress={Actions.chat}>
               <View style={styles.viewlist}>
                 <Image style={styles.contactImg} source={{ uri: rowData.avatarTimeline }} />
                 <Text style={styles.name}>{rowData.user}</Text>
               </View>
             </TouchableOpacity>}
       />
      </View>
    )
    break;
  default:
    return null;
    break;
  }
};

render() {
  if (this.state.loading === false) {
    return (
      <View style={styles.container}>
        <TabViewAnimated
          style={styles.container1}
          navigationState={this.state}
          renderScene={this._renderScene.bind(this)}
          renderHeader={this._renderHeader.bind(this)}
          onRequestChangeTab={this._handleChangeTab.bind(this)}
        />
      </View>
    );
  } else {
    return (
      <ActivityIndicator />
    );
  }
}
};
