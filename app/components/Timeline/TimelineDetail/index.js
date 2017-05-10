import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import CommentView from '../../Comment/CommentListFriendView';
import Comment from '../timelineComment';
import styles from './style';
export default class CardDetail extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
          marginLeft: 8,
          marginRight: 8,
          marginTop: 15,
          backgroundColor: 'white',
          elevation: 12
        }}>
          <View
            style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginTop: 10
          }}>
            <Image
              style={{
              borderRadius: 70,
              width: 50,
              height: 50
            }}
              source={{
              uri: this.props.avatarTimeline
            }}/>
            <View
              style={{
              flexDirection: 'column',
              marginLeft: 15
            }}>
              <Text style={styles.user}>{this.props.user}</Text>
              <Text style={styles.time}>{this.props.dateTimeline}</Text>
            </View>
          </View>
          <View>
            <Image
              source={{
              uri: this.props.imageTimeline
            }}
              style={styles.img}/>
          </View>
          <View>
            <Text style={styles.detail}>{this.props.textTimeline}</Text>
            <Text>{'\n'}</Text>
          </View>
          <View>
            <View
              style={{
              flexDirection: 'row',
              flex: 1,
              height: 40,
              paddingRight: 10,
              paddingLeft: 10
            }}></View>
          </View>
          {/*<CommentView />*/}
        </View>
      </ScrollView>
    );
  }
}
