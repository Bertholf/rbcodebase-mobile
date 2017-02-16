import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
};


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
            <View style={{ flexDirection: 'column', marginLeft: 6, marginRight:50 }}>
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
  };
}
