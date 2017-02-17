import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';

class ChangeUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: 'Mr. Jonhys',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inputUsernameContainer}>
            <TextInput
              style={styles.textInputUsername}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder="New Username"
              onChangeText={currentUsername => this.setState({ currentUsername })}
              multiline={false}
              numberOfLines={4} editable={true}
            />
          </View>
          <Text>
            Your username should be unique.
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonSave}
          >
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default ChangeUsername;
