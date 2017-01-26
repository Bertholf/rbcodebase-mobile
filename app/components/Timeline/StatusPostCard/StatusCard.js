import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
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
            multiline={true}
            blurOnSubmit={true}
            placeholder="Your Status"
            placeholderTextColor="#BDBDBD"
            underlineColorAndroid="#64B5F6"
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <PostMenu />
          <View style={{ flex: 1 }}>
            <Button title={'Post'} />
          </View>
        </View>
      </View>
    </View>
  );
};

module.exports = PostCard;
