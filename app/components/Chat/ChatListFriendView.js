import React, { Component }  from  'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
const menu = require('./../../images/ic_menu_white_24dp.png');
const user = require('./../../images/64x64.png');
const user2 = require('./../../images/user2.png');
const user3 = require('./../../images/user3.png');
import styles from './ChatListFriendStyles';
export default class ChatListFriendView extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Friends' },
      { key: '2', title: 'Following' },
      { key: '3', title: 'Follower' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[ styles.page, { backgroundColor: '#fff' } ]} >
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Budi</Text>
                  <Text style={styles.date}>2017-01-28</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.setlist} />
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user2} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Lina</Text>
                  <Text style={styles.date}>2017-01-23</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.setlist} />
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user3} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Basuki</Text>
                  <Text style={styles.date}>2017-01-22</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.setlist} />
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Budi</Text>
                  <Text style={styles.date}>2017-01-28</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.setlist} />
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user2} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Lina</Text>
                  <Text style={styles.date}>2017-01-23</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.setlist} />
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user3} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Basuki</Text>
                  <Text style={styles.date}>2017-01-22</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.setlist} />
          <TouchableOpacity>
            <View style={styles.listFriend}>
              <Image style={styles.contactImg} source={user2} />
              <View style={{justifyContent: 'space-around'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={styles.name}>Basuki</Text>
                  <Text style={styles.date}>2017-01-22</Text>
                </View>
                <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#2196F3' title="Write a Message" onPress={Actions.chat}>
            <Icon name="md-create"/>
          </ActionButton.Item>
        </ActionButton>
          <View style={styles.setlist} />
        </ScrollView>
      </View>
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#fff' } ]} >
        <TouchableOpacity>
          <View style={styles.listFriend}>
            <Image style={styles.contactImg} source={user} />
            <View style={{justifyContent: 'space-around'}}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={styles.name}>Budi</Text>
                <Text style={styles.date}>2017-01-28</Text>
              </View>
              <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.setlist} />
      </View>;
    case '3':
      return <View style={[ styles.page, { backgroundColor: '#fff'}]} >
        <TouchableOpacity>
          <View style={styles.listFriend}>
            <Image style={styles.contactImg} source={user3} />
            <View style={{justifyContent: 'space-around'}}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={styles.name}>Basuki</Text>
                <Text style={styles.date}>2017-01-22</Text>
              </View>
              <Text style={styles.text}>Lorem ipsum dolor sit amet...</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.setlist} />
      </View>;
    default:
      return null;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </View>
    );
  }
}
