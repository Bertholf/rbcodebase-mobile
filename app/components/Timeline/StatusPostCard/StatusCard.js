import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';

const PostCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>What's Going on</Text>
      </View>
      <View>
        <TextInput
          multiline={true}
          blurOnSubmit={true}
        />
      </View>
      <View>
        <Text>This is Bottom</Text>
      </View>
    </View>
  );
};

module.exports = PostCard;
