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
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid="rgba(0,0,0,0)"
              defaultValue={this.state.currentUsername}
              editable={false}
            />
            <Text style={styles.Text2}>
              Enter your new username
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder="New Username"
              onChangeText={firstName => this.setState({ firstName })}
              multiline={false}
              numberOfLines={4} editable={true}
            />
            {/* {firstNameValidator || !firstNameInput ?
              <Text /> : <Text style={styles.invalid}>The Name Must Be Alphabet Character</Text>} */}
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.7}>
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
