import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style';

export default class test extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John',
        'Joel',
        'James',
        'Jimmy',
        'Jackson',
        'Jillian',
        'Julie',
        'Devin',
      ]),
    };
  }
  renderRow(rowData) {
    return (
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.container}>
            <View style={{ flexDirection: 'column', marginLeft: 6, marginRight: 50 }}>
              <Text style={styles.user}>{rowData}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)}
      />
    );
  }
}
