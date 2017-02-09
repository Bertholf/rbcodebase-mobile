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
import friend from '../../services/friend';

const styles = StyleSheet.create({
  photo: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 50,
  },
});

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
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ height: 50, paddingLeft: 30 }}
            placeholder="Send To"
            onChangeText={(text) => this.setState({ text })}
          />
          <ListView
            dataSource={ds.cloneWithRows(this.state.friendlist.data)} renderRow={(rowData) =>
              <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth:1, borderColor: '#aaa', paddingLeft: 10 }}>
                <View>
                  <Image source={{ uri: rowData.image }} style={styles.photo} />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                  <Text style={{ fontSize: 15 }}>{rowData.first_name}</Text>
                  <Text style={{ fontSize: 13, fontStyle: 'italic' }}>{rowData.username}</Text>
                </View>
              </TouchableOpacity>
            }
          />
          <TouchableOpacity style={{ padding: 10, backgroundColor: '#2196F3' }}>
            <Text style={{ textAlign: 'center', color: 'white' }}> CANCEL </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
}
