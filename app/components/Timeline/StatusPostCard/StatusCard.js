import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';

const PostCard = () => {
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
            <Button title={'Post'} />
          </View>
        </View>
      </View>
    </View>
  );
};

module.exports = PostCard;
