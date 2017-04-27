import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import styles from './style';

export default class TimelineTextComp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.OuterView}>
      </View>
    );
  }
}
