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
    this.state = {
      loading: true,
      notif: {},
    };
  }

  componentDidMount() {
    notifService.getNotif().then((data) => {
      this.setState({ notif: data, loading: false });
      console.log('hello message', this.state.notif);
    });
  }

  render(){
  if (this.state.loading === false){
    return (
      <ScrollView>
        {this.state.notif.data.map((data)=> (
        <TouchableOpacity>
          <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.photo} />
            <View style={{ flexDirection: 'column', marginLeft: 6, marginRight: 50 }}>
              <Text style={styles.user}>{data.first_name}</Text>
              <Text style={styles.detail}>{data.message}</Text>
              <Text style={styles.time}> {data.date_time} </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>

    );
  }else{
    return (
      <ActivityIndicator />
    );
  }
}
}
