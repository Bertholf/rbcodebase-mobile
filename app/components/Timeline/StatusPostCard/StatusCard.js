import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';
import TimelineService from './../../../services/timelineList';

const PostCard = () => {
  constructor(props){
  super(props);
  this.state = {
    button:{}
  }
}


  addText = () => {
    this.setState({button : 'status card' })
    console.log(this.state.button);
  }

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
          />
        </View>
        <View style={styles.border}>
          <PostMenu />
          <View style={{ flex: 1, paddingTop: 12 }}>
            <Button title={'Post'}
              onPress={() => console.log(this.state.TimelineService,'ggugu')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

module.exports = PostCard;
