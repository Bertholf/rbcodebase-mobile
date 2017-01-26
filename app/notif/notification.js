import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#42a5f5',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  user: {
    marginLeft: 3,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
  },
  photo: {
    width: 60,
    height: 60,
    marginLeft: 6,
    marginTop: 6,
    marginBottom: 10,
  },
  detail: {
    fontSize: 10,
  },
  time: {
    fontSize: 5,
  },
});

export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
      <TouchableOpacity style={styles.mainView}>
        <View style={styles.container}>
          <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={styles.photo} />
          <View style={{ flexDirection: 'column', marginLeft: 12 }}>
            <Text style={styles.user}>{rowData}</Text>
            <Text style={styles.detail}>this is a detail detail detail</Text>
            <Text style={styles.time}>Date/time</Text>
        </View>
      </View>
      </TouchableOpacity>
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
