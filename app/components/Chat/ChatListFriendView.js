import React, { Component }  from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ListView } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import styles from './ChatListFriendStyles';

const user = require('./../../images/64x64.png');

export default class ChatListFriendView extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'Following' },
        { key: '2', title: 'Follower' },
      ],
      dataSource: ds.cloneWithRows([
        {
          key: '1',
          Name: 'Budi',
        },
        {
          key: '2',
          Name: 'Tony',
        },
        {
          key: '3',
          Name: 'John',
        },
        {
          key: '4',
          Name: 'Johni',
        },
        {
          key: '5',
          Name: 'Budi',
        },
        {
          key: '6',
          Name: 'Tony',
        },
      ],
    )
  }
};
  // showArrayDummy(){
  //   return this.state.dummys.map(dummy =>
  //   <View>
  //       <TouchableOpacity onPress={Actions.chat}>
  //         <View style={styles.listFriend}>
  //           <Image style={styles.contactImg} source={user} />
  //           <View style={{justifyContent: 'space-around'}}>
  //             <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
  //               <Text style={styles.name}>{dummy.Name}</Text>
  //               <Text style={styles.date}>2017-01-28</Text>
  //             </View>
  //             <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //   </View>
  //     );
  //   }

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
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
             <TouchableOpacity onPress={Actions.chat}>
               <View style={styles.listFriend}>
                 <Image style={styles.contactImg} source={user} />
                 <View style={{justifyContent: 'space-around'}}>
                   <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                     <Text style={styles.name}>{rowData.Name}</Text>
                     <Text style={styles.date}>2017-01-28</Text>
                   </View>
                   <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
                 </View>
               </View>
             </TouchableOpacity>}
       />
      </View>
      )
    break;
    case '2':
    return (
      <View style={styles.page} >

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
             <TouchableOpacity onPress={Actions.chat}>
               <View style={styles.listFriend}>
                 <Image style={styles.contactImg} source={user} />
                 <View style={{justifyContent: 'space-around'}}>
                   <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                     <Text style={styles.name}>{rowData.Name}</Text>
                     <Text style={styles.date}>2017-01-28</Text>
                   </View>
                   <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
                 </View>
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
  }
}
