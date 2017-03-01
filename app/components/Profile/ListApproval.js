import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, StyleSheet, Text, TouchableOpacity, Image, AsyncStorage, ActivityIndicator } from 'react-native';
import strings from '../../localizations';
import follows from '../../services/follows';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    borderColor: '#9E9E9E',
    borderWidth: 0.3,
  },
  account: {
    paddingLeft: 10,
  },
  user: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  photo: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 50,
  },
  detail: {
    fontSize: 11,
    color: 'grey',
    marginRight: 5,
    marginLeft: 3,
  },
  buttonFollow: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#2196F3',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 2,
  },
  buttonUnfollow: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    color: '#333',
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 2,
  },
  time: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
});

export default class ListFollow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      loading: true,
      friendlist: {},
      statusFollow: [],
    };
  }
  componentDidMount(){
      AsyncStorage.getItem('userId')
      .then((myId) => {
        console.log('This is My ID=================', myId );
        follows.showApproval(myId)
        .then((res) => {
          console.log('DI SINI');        })
        .catch(err => console.log('Error!!!!', err));
      })
      .catch(err => console.log('fail to get user id from asyncStorege', err));
  }

  showError(err) {
    Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
    console.log('fail to get approval', err);
  }
  approve(){
    if (this.props.rowData.type === 'follower') {
      const idFol = this.props.rowData.follower_id;
      const idLed = this.props.rowData.leader_id;
      const status = 'approved';
      follows.showFollowing2(idFol, idLed)
        .then((resp) => { console.log('DAPETIN NO ID', resp.data.id); follows.reqApproval(idFol, idLed, status, resp.data.id)
          .then((resp) => { console.log('RESPON AFTER APPROVE', resp); this.props.rowData.rerender(); })
          .catch((err) => { console.log('ERROR', err); }); })
        .catch((err) => { console.log('Error', err); });
    }
  }

  rerender() {
      this.componentDidMount();
      console.log('RE RENDER TRIGGERD');
  }

  render() {
    let rowData = this.props.rowData;
    if (this.props.rowData.type === 'follower') {
      rowData = this.props.rowData.follower;
    } else {
      // this section will call when add friend call use this this component
      rowData = this.props.rowData;
    }
    return (
      <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Actions.profile({ profile: rowData, idFollow: this.props.rowData.id })}
        activeOpacity={0.7}
      >
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: rowData.picture }} style={styles.photo} />
            <View style={styles.account}>
              <Text style={styles.user}>
                {rowData.name_first} {rowData.name_last}
              </Text>
              <Text style={styles.detail}>{rowData.name_slug}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { this.approve(); }}>
            <Text style={styles.buttonFollow}>
              {strings.listfollow.approve}</Text>
          </TouchableOpacity>
      </View>
    );
  }

}
