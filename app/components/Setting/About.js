import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './ChangeSetting/ChangeStyles';

const { width, height } = Dimensions.get('window');

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  render() {
    return (
      <View style={styles.OuterView}>
        <View style={{ flexDirection: 'row', backgroundColor: '#2196f3' }}>
          <TouchableOpacity onPress={Actions.account}>
            <Image
              style={{
                width: 40,
                height: 40,
                marginTop: 14,
              }}
              source={require('./../../images/backbutton.png')}
            />
          </TouchableOpacity>
          <Text style={styles.Text1}>
            CHANGE YOUR BIO
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            paddingTop: 50,
            marginLeft: 19,
            marginRight: 19,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              alignItems: 'flex-start',
              paddingTop: 8,
              paddingBottom: 20,
            }}
          >
            Enter your new bio
          </Text>
          <TextInput
            style={{
              height: height * 0.3,
              width: width * 0.9,
              paddingTop: 2,
              color: '#2196f3',
              borderWidth: 1,
              fontSize: 16,
              borderColor: '#2196f3',
            }}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholderTextColor="#2196f3"
            placeholder=""
            multiline={true}
            numberOfLines={20}
            editable={true}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <TouchableOpacity onPress={() => console.log('dummy')}>
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
