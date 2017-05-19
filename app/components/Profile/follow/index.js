import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, ListView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class Follow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={() => Actions.profile({ profile: this.props.rowData })}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            
            <View style={styles.account}>
              <TouchableOpacity onPress={() => Actions.profile({ user: this.props.rowData })}>
                <Text style={styles.user}>
                  {this.props.rowData.name_first} {this.props.rowData.name_last}
                </Text>
              </TouchableOpacity>
              <Text style={styles.detail}> {this.props.rowData.name_slug} </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.toggleSwitch()}>
            <Text style={this.state.clicked ? styles.buttonFollow : styles.buttonUnfollow}>
              {this.state.clicked ? 'Follow' : 'Unfollow'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
  toggleSwitch() {
    if (!this.state.clicked) {
      Alert.alert('Confirmation', 'Are you sure to unfollow this user?', [
        { text: 'Cancel', onPress: () => this.setState({ clicked: this.state.clicked }) },
        { text: 'Yes', onPress: () => this.setState({ clicked: !this.state.clicked }) },
      ]);
    } else {
      this.setState({ clicked: !this.state.clicked });
    }
  }
}
