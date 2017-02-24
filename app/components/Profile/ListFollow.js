import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import strings from '../../localizations';

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
  updateFollowData() {
    auth.updatefollow()
    .then(response => this.setState({ statusFollow: response.data, clicked: this.state.clicked }, () => console.log('------------DATA LIST STATUS BUTTON FOLLOW DI FOLLOWING --------------', response)))
    .catch(Err => console.log('err', Err));
  }

  toggleSwitch() {
    if (!this.state.clicked) {
      Alert.alert(strings.listfollow.confirmation,
               strings.listfollow.question, [
                { text: strings.listfollow.cancel, onPress: () => this.setState({ clicked: this.state.clicked }) },
                { text: strings.listfollow.yes, onPress: () => this.setState({ clicked: !this.state.clicked }) },
               ]);
    } else {
      this.setState({ clicked: !this.state.clicked });
    }
  }

  render() {
    let rowData;
    if (this.props.person.type === 'follower') {
      rowData = this.props.person.follower;
    } else {
      rowData = this.props.person.leader;
    }
    return (
      <TouchableOpacity
        onPress={() => Actions.profile({ profile: rowData })}
        activeOpacity={0.7}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: rowData.picture }} style={styles.photo} />
            <View style={styles.account}>
              <Text style={styles.user}>
                {rowData.name_first} {rowData.name_last}
              </Text>
              <Text style={styles.detail}>{rowData.name_slug}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.toggleSwitch()}>
            <Text style={this.state.clicked ? styles.buttonFollow : styles.buttonUnfollow}>
              {this.state.clicked ? strings.listfollow.follow : strings.listfollow.unfollow }</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

}
