import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity, Image,ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#2196f3',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  user: {
    marginLeft: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  photo: {
    width: 80,
    height: 80,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: '#fff',
    marginRight: 5,

  },
  time: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
});
console.log("helli", ListView);
export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John',
        'Joel',
        'James',
        'Jimmy',
        'Jabkbkbckson',
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
            <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={styles.photo} />
            <View style={{ flexDirection: 'column', marginLeft: 6, marginRight:50 }}>
              <Text style={styles.user}>{rowData}</Text>
              <Text style={styles.detail}>Lorem Ipsum is simply dumy text ever. Since 1500 detail detail deatail </Text>
              <Text style={styles.time}>Date/time</Text>
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
