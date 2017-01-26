import React from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';

const PostCard = () => {
  return (
    <View style={{ backgroundColor: '#BDBDBD' }}>
      <View style={styles.containerCard}>
        <Text style={styles.titleText}>What's Going On</Text>
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
          <View style={styles.containerBottom}>
            <View style={styles.image}>
              <Image
                source={require('./../../../images/ic_perm_identity_black_24dp.png')}
                style={styles.image}
              />
              <Image
                source={require('./../../../images/ic_place_black_24dp.png')}
                style={styles.image}
              />
              <Image
                source={require('./../../../images/camera.png')}
                style={styles.image}
              />
              <Image
                source={require('./../../../images/ic_insert_emoticon_black_24dp.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Button title={'Post'} />
          </View>
        </View>
      </View>
    </View>
  );
};

module.exports = PostCard;
