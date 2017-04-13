import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { ListItem, Body, Right, Container } from 'native-base';
import strings from '../../localizations';
import follows from '../../services/follows';
import styles from './../../style/StyleGlobal';

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
  componentDidMount() {
    AsyncStorage.getItem('userId')
      .then((myId) => {
        follows
          .showApproval(myId)
          .then((res) => {
            console.log('DI SINI');
          })
          .catch(err => console.log('Error!!!!', err));
      })
      .catch(err => console.log('fail to get user id from asyncStorege', err));
  }

  showError(err) {
    Alert.alert('Fail to connect to server', '', [{ text: 'OK', onPress: () => Actions.pop() }]);
  }
  approve() {
    if (this.props.rowData.type === 'follower') {
      const idFol = this.props.rowData.follower_id;
      const idLed = this.props.rowData.leader_id;
      const status = 'approved';
      follows
        .showFollowing2(idFol, idLed)
        .then((resp) => {
          follows
            .reqApproval(idFol, idLed, status, resp.data.id)
            .then((resp) => {
              this.props.rowData.rerender();
            })
            .catch((err) => {
              console.log('ERROR', err);
            });
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }

  rerender() {
    this.componentDidMount();
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
      <Container>
        <ListItem>
          <TouchableOpacity
            onPress={() => Actions.profile({ profile: rowData, idFollow: this.props.rowData.id })}
            activeOpacity={0.7}
          >
            <Body>
              <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: rowData.picture }} style={styles.photo} />
                <View style={styles.account}>
                  <Text style={styles.user}>
                    {rowData.name_first} {rowData.name_last}
                  </Text>
                  <Text style={styles.detail}>{rowData.name_slug}</Text>
                </View>
              </View>
            </Body>
          </TouchableOpacity>
          <Right>
            <TouchableOpacity
              onPress={() => {
                this.approve();
              }}
            >
              <Text style={styles.buttonFollow}>
                {strings.listfollow.approve}
              </Text>
            </TouchableOpacity>
          </Right>
        </ListItem>
      </Container>
    );
  }
}
