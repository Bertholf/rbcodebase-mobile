import React from 'react';
import { View, ListView, StyleSheet, Text, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator } from 'react-native';
import notifService from '../../services/notif';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    backgroundColor: '#2196f3',
    borderColor: '#ffffff',
    borderWidth: 2,
    marginRight:5,
  },
  user: {
    marginLeft: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  photo: {
    width: 90,
    height: 90,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 4,
  },
  detail: {
    fontSize: 12,
    color: '#fff',
  },
  time: {
    fontSize: 10,
    color: '#fff',
  },
});


export default class Notification extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        '',
        '',
        '',
        '',
        '',
        '',
      ]),
      notif: {},
    };

    // notifService.getNotif()
    // .then(data => this.setState({ notif: data }));
    // console.log('hello message', this.state.notif.message);
  }

  componentDidMount() {
    notifService.getNotif().then((data) => {
      this.setState({ notif: data, loading: false });
      console.log('hello message', this.state.notif);
    });
  }

  renderRow(rowData) {
    return (
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.container}>
            <Image source={{ uri: this.state.notif.image }} style={styles.photo} />
            <View style={{ flexDirection: 'column', marginLeft: 6, marginRight: 50 }}>
              <Text style={styles.user}>{rowData}</Text>
              <Text style={styles.detail}>{this.state.notif.message}</Text>
              <Text style={styles.time}> {this.state.notif.date_time} </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  render() {
      if (this.state.loading === false){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(this.state.notif.from)}
      />
    );
  }else{
    return (
      <ActivityIndicator />
    );
  }
}
}
