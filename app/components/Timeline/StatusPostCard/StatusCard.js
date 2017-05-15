import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image
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
      picture: null
    }
  }

  setFileName(filename, pict) {
    this.setState({
      filename: filename,
      picture: pict
    })
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  uploadFile() {
    const status = this.state.text;
    const type = 'form-url-encoded';
    post
      .newPost(status, type)
      .then(() => {
        console.log('success!!');
        this.clearText('textinput')
        // this.props.rendering()
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
                ref={'textinput'}
                style={{ height: 70 }}
                multiline={true}
                blurOnSubmit={true}
                placeholder="Your Status"
                placeholderTextColor="#BDBDBD"
                onChangeText={(text) => this.setState({text})}
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
                  onPress={() => {
                    this.uploadFile();
                    this.props.onPress();
                  }
                  }
                />
              </View>
            </View>
          </View>
        </View>
      );
    }
  };
