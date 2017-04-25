import React from 'react';
import { Actions } from 'react-native-router-flux';
import { View, ListView, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator } from 'react-native';
import notifService from '../../../services/notif';
import Swiper from 'react-native-swiper';
import styles from './style'
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
    // notifService.getNotifications()
    // .then((data) => {
    //   this.setState({ notif: data, loading: false });
    //   console.log('hello message', this.state.notif);
    // }).catch(err => console.log(err));
  }

  render() {
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.notif.data)} renderRow={(rowData) =>
            <TouchableOpacity onPress={Actions.profile}>
              <View style={styles.container}>
                <View style={{ paddingTop: 8, paddingBottom: 8, paddingRight: 16 }}>
                  <Image source={{ uri: rowData.image }} style={styles.photo} />
                </View>
                <View style={{ flexDirection: 'column', flex: 3 }}>
                  <Text style={styles.user}>{rowData.first_name} {rowData.first_name}</Text>
                  <Text style={styles.detail} numberOfLines={3}>
                    {rowData.message}
                  </Text>
                  <Text style={styles.time} numberOfLines={2}>{rowData.date}</Text>
                </View>
              </View>
            </TouchableOpacity>
            }
        />
      );
    } else {
      return (
        <Text>No Content Display</Text>
      );
    }
  }
}
