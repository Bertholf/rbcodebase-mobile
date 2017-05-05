import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  AsyncStorage
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';
import post from './../../../services/post';

export default class PostCard extends Component {

  constructor() {
    super()
    this.state = {
      filename: 'no file',
      text:'',
      picture: null,
      data1:'',
      
    }
  }

  setFileName(filename, pict) {
    this.setState({
      filename: filename,
      picture: pict
    })
  }

  uploadFile() {
    const text = this.state.postTimeline;
    const type = 'form-url-encoded';
    post
      .newPost(text, type)
      .then(() => {
        console.log('succes');
      })
      .catch((err) => {
        console.log('file is being uploaded!!', err);
      })
  }


  render() {
      return (
        <View>
          <View style={styles.containerCard}>
            <Text style={styles.titleText}>Your Stories?</Text>
            <View>
              <TextInput
                style={{ height: 70 }}
                multiline={true}
                blurOnSubmit={true}
                placeholder="Your Status"
                placeholderTextColor="#BDBDBD"
                onChangeText={(postTimeline) => this.setState({postTimeline})}
                value={this.state.postTimeline}
              />
            </View>
            <View style={{flex: 1,justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              {/* <Text>{this.state.filename}</Text> */}
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
              {this.state.picture ? this.state.picture.map(img =>
                <Image key={img} source={{uri: 'data:image/jpg;base64' + ',' + img, scale: 3, width: 40, height: 40 }} style={{flex: 1, resizeMode: 'contain', margin: 3, padding: 3}}   />) : <Text></Text>}
              </View>
            </View>
            <View style={styles.border}>
              <PostMenu getName={(name, pict) => this.setFileName(name, pict)} />
              <View style={{ flex: 1, paddingTop: 12 }}>
                <Button title={'Post'}
                  onPress={() => this.uploadFile()}
                />
              </View>
            </View>
          </View>
        </View>
      );
    }
};
