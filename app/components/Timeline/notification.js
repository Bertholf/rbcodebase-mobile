import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator } from 'react-native';
import notifService from '../../services/notif';


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


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notif: {},
    };
  }

  componentDidMount() {
    notifService.getNotifications()
    .then((data) => {
      this.setState({ notif: data, loading: false });
      console.log('hello message', this.state.notif);
    });
  }

  render() {
    if (this.state.loading === false) {
      return (
        <ListView>
          dataSource={ds.cloneWithRows(this.state.notif.data)} renderRow={(rowData) =>
            <TouchableOpacity>
              <View style={styles.container}>
                <View style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 16 }}>
                  <Image source={{ uri: rowData.image }} style={styles.photo} />
                </View>
                <View style={{ flexDirection: 'column', flex: 3 }}>
                  <Text style={styles.user}>{rowData.first_name} {rowData.last_name}</Text>
                  <Text style={styles.detail} numberOfLines={3}>
                    {rowData.message}
                  </Text>
                  <Text style={styles.time}>{rowData.date_time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        </ListView>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
}
