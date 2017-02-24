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

export default class ListAddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      loading: true,
      friendlist: {},
    };
  }

  toggleSwitch() {
    if (!this.state.clicked) {
      Alert.alert(strings.addfriend.cofirmation,
               strings.addfriend.question, [
                { text: strings.addfriend.cancel, onPress: () => this.setState({ clicked: this.state.clicked }) },
                { text: strings.addfriend.yes, onPress: () => this.setState({ clicked: !this.state.clicked }) },
               ]);
    } else {
      this.setState({ clicked: !this.state.clicked });
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Actions.profile({ profile: this.props.rowData })}
        activeOpacity={0.7}
      >
        <View >
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: this.props.rowData.picture }} style={styles.photo} />
            <View style={styles.account}>
              <Text style={styles.user}>
                {this.props.rowData.name_first} {this.props.rowData.name_last}
              </Text>
              <Text style={styles.detail}>{this.props.rowData.name_slug}</Text>
            </View>
          </View>
          
        </View>
      </TouchableOpacity>
      <TouchableOpacity disabled={this.privacyFollow !== 'none' ? false : true}  onPress={() => this.toggleSwitch()}>
        <Text style={this.state.clicked ? styles.buttonFollow : styles.buttonUnfollow}>
          {this.state.clicked ? strings.addfriend.add : strings.addfriend.unfriend }
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

}
