import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';
import post from './../../../services/post';

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posting: '',
      //'user', 'post', 'type,text', 'image'
    };
  }

  postToShow() {
     //postService.updatePost(this.state.posting)
     let postTo = this.state.posting;
     post.getPosts()
     .then((data) => {
       this.setState({ posting: data });
       console.log('this is POST for API', data);
     }).catch((err) => console.error('Ooopss', err));
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
            onChangeText={(posting) => this.setState({ posting })}
            placeholder="Your Status"
            placeholderTextColor="#BDBDBD"
          />
        </View>
        <View style={styles.border}>
          <PostMenu />
          <View style={{ flex: 1, paddingTop: 12 }}>
            <Button
              title={'Post'}
              onPress={() => this.postToShow()}
            />
          </View>
        </View>
      </View>
    </View>
  );
  }
}
