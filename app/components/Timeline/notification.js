import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderBottomWidth: 0.5,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 8,
    paddingBottom: 16,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00008b',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detail: {
    fontSize: 14,
    color: '#2196F3',
    flex: 1,
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 12,
    color: '#9091AC',
    fontWeight: 'bold',
  },
});

console.log('hello', ListView);

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
      ]),
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity>
              <View style={styles.container}>
                <View style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 16 }}>
                  <Image source={require('../../images/imagepp.jpg')} style={styles.photo} />
                </View>
                <View style={{ flexDirection: 'column', flex: 3 }}>
                  <Text style={styles.user}>{rowData}</Text>
                  <Text style={styles.detail} numberOfLines={3}>
                    Lorem Ipsum is simply dumy text ever.
                    Since 1500 detail detail deatail. Lorem Ipsum is simply dumy text ever.
                    Since 1500 detail detail deatail
                  </Text>
                  <Text style={styles.time}>08:35 PM, Yesterday</Text>
                </View>
              </View>
            </TouchableOpacity>}
        />
      </View>
    );
  }
}
