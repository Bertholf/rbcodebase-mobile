import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import styles from './styles';

const alertMessage = 'Saved';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable={true}
        maxLength={40}
      />
    );
  }
}

class EditAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Edit Your Profile',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txtInput}>
          <UselessTextInput
            multiline={true}
            numberOfLines={7}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.saveBtn}
            activeOpacity={0.8}
            onPress={() => Alert.alert(
              'Alert Title',
              alertMessage,
              [
                { text: 'OK', onPress: () => console.log('OK Pressed!') },
              ],
            )}
          >
            <Text style={styles.txtBtn}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default EditAbout;
