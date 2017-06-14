import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  ListView,
  AsyncStorage,
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import FormData from 'FormData';
import RNFetchBlob from 'react-native-fetch-blob';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';
import post from './../../../services/post';
import TimelineList from '../TimelineList';
import InvertibleScrollView from 'react-native-invertible-scroll-view'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class PostCard extends Component {

  constructor() {
    super();
    this.state = {
      filename: null,
      token: null,
      text: '',
      picture: null,
      data: [],
      path: null,
      type: null,
    };
  }

  // Setting data from image picker
  setFileName(name, data, type, path) {
    this.setState({ filename: name, picture: data, type: type, path: path });
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  uploadFile() {
    const text = this.state.text;
    const media = this.state.picture;
    const mediaPath = this.state.path;
    const mediaName = this.state.filename;
    const mediaType = this.state.type;
    const type = 'multipart/form-data';

    // Getting access token to post
    AsyncStorage.getItem('accessToken')
    .then(token => {
      const url = 'http://rbcodebase.com/api/timeline/post';
      const form = new FormData();

      // If user posting image
      if (media !== null) {
        form.append('media', {
          uri: mediaPath,
          type: mediaType,
          name: mediaName,
        });
      }

      form.append("text", text);

      fetch(url, {
        method: 'POST',
        headers: {
          Authorization : `Bearer ${token}`,
          "Content-Type" : type
        },
        body: form
      })
      .then(res => res.json())
        .then((res) => {
          this.setState((prevState) => {
              return {
                text: null,
                picture: null,
                filename: null,
                type: null,
                path: null,
                data: prevState.data.concat(res.data),
              };
            });
        })
        .catch((err) => {
          Alert.alert(err.message);
        })
      .catch(err => {
        Alert.alert(err.message);
      })
    })
    .catch(err => console.log("User unauthorized"));
  }

  updateText = (text) => {
    this.setState(prevState => ({
      text: text
    }));
  }


  renderRow = (data) => {
    return (
      <View><TimelineList data={data} /></View>
    );
  }

  render() {
    const image = this.state.picture;
    return (
      <View>
        <View style={styles.containerCard}>
          <Text style={styles.titleText}>Your Stories?</Text>
          <View>
            <TextInput
              style={{
                height: 70,
                paddingHorizontal: 12,
              }}
              multiline
              blurOnSubmit
              placeholder="Your Status"
              placeholderTextColor="#BDBDBD"
              onChangeText={text => this.updateText(text)}
              value={this.state.text}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            {/* <Text>{this.state.filename}</Text> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {this.state.picture ?
                <Image
                  source={{
                    uri: `data:image/jpeg;base64,${image}`,
                    width: 100, height: 100
                  }}
                  style={{
                    flex: 1,
                    resizeMode: 'contain',
                   }}
                />
                : <View />
              }
            </View>
          </View>
          <View style={styles.border}>
            <PostMenu getData={(name, data, type, path) => this.setFileName(name, data, type, path)} />
            <View
              style={{
                flex: 1,
                paddingTop: 8,
              }}
            >
              <TouchableOpacity onPress={() => this.uploadFile()}>
                <Text style={styles.post}>
                Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ListView
          enableEmptySections
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />  }
          dataSource={ds.cloneWithRows(this.state.data)}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
