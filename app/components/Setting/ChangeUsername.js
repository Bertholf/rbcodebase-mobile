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
      currentUsername: 'WaNdrY',
    };
  }

  render() {
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              Your current username
            </Text>
            <Text style={styles.TextInput1}>
              {this.state.currentUsername}
            </Text>
            <Text style={styles.Text2}>
              Enter your new username
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'#2196f3'}
              placeholderTextColor={'#2196f3'}
              placeholder="Enter your new name"
              onChangeText={firstName => this.setState({ firstName })}
              multiline={false}
              numberOfLines={4} editable={true}
            />
            {/* {firstNameValidator || !firstNameInput ?
              <Text /> : <Text style={styles.invalid}>The Name Must Be Alphabet Character</Text>} */}
          </View>
        </ScrollView>
        <TouchableOpacity>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              SAVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ChangeUsername;
