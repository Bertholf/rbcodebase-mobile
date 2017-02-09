import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import CommentView from '../Comment/CommentListFriendView';

const styles = StyleSheet.create({
  fntui: {
    color: 'black',
    height: 40,
    fontSize: 18,
    padding: 8,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#009688',
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 10,
  },
  img: {
    width: 300,
    height: 250,
    margin: 15,
    marginLeft: 20,
  },
  detail: {
    marginRight: 15,
    marginLeft: 15,
    fontSize: 15,
  },
  comment: {
    height: 25,
    margin: 15,
    padding: 5,
    borderColor: 'gray',
  },
  container: {
    flex: 1,
  },
  buttonPost: {
    borderRadius: 3,
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class CardDetail extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: 'white', elevation: 12 }}>
          <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
            <Image
              style={{ borderRadius: 70, width: 50, height: 50 }}
              source={{ uri: this.props.avatarTimeline }}
            />
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={styles.user}>{this.props.user}</Text>
              <Text style={styles.time}>{this.props.dateTimeline}</Text>
            </View>
          </View>
          <View>
            <Image source={{ uri: this.props.imageTimeline }} style={styles.img} />
          </View>
          <View>
            <Text style={styles.detail}>{this.props.textTimeline}</Text>
            <Text>{'\n'}</Text>
          </View>
          <View>
            <Text style={styles.comment}>Comment</Text>
            <View style={{ flexDirection: 'row', flex: 1, height:40, paddingRight: 10, paddingLeft: 10 }}>
                <TextInput
                  style={{flex:3}}
                  onChangeText={text => this.setState({ text })}
                />
                <TouchableOpacity style={styles.buttonPost}>
                  <Text style={{color: '#fff'}}>Post</Text>
                </TouchableOpacity>
          </View>
          </View>
          <CommentView />
        </View>
      </ScrollView>
    );
  }
}
