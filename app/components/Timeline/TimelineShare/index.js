import React, { Component } from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
  Image,
} from 'react-native';
import friend from '../../../services/friend';
import styles from './style';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class TimelineShare extends Component {
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
      console.log('hAYYYY ', this.state.friendlist);
    }).catch(err => console.log('ERROR LOH', err));
  }

  render() {
    if (this.state.loading === false) {
      return (
        <View style={{ flex: 1, backgroundColor: '#aaa' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'white' }}>
          <TextInput
            style={{ height: 50, paddingLeft: 30 }}
            placeholder="Send To"
            onChangeText={(text) => this.setState({ text })}
          />
          <View>
          <ListView
            horizontal={true}
            dataSource={ds.cloneWithRows(this.state.friendlist.data)} renderRow={(rowData) =>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ borderBottomWidth:1, borderColor: '#aaa', paddingLeft: 10 }}>
                <View style={{ alignItems: 'center', marginLeft: 10 }}>
                  <Image source={{ uri: rowData.image }} style={styles.photo} />
                  <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.9)' }}>{rowData.first_name}</Text>
                  <Text style={{ fontSize: 13, fontStyle: 'italic' }}>{rowData.username}</Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
          <View style={{ padding: 5, borderWidth: 1, borderColor: '#aaa' }}>
            <TextInput
              multiline = {true}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="Write a message"
            />
            <TouchableOpacity activeOpacity={0.7} style={{ padding: 10, backgroundColor: '#2196F3', borderRadius: 3 }}>
              <Text style={{ textAlign: 'center', color: 'white' }}> SEND </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
}
