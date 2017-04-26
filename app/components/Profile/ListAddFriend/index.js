import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Alert, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import strings from '../../../localizations';
import styles from './style';

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
      <TouchableOpacity  onPress={() => this.toggleSwitch()}>
        <Text style={this.state.clicked ? styles.buttonFollow : styles.buttonUnfollow}>
          {this.state.clicked ? strings.addfriend.add : strings.addfriend.unfriend }
        </Text>
      </TouchableOpacity>
      </View>
    );
  }

}
