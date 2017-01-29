import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import styles from './Timeline Style/TimelineTextCompStyles';

const TimelineTextComp = () => {
  return (
    <View style={styles.OuterView}>
      <View style={styles.OuterLayer1}>
        <View>
          <Image source={require('../../images/imagepp.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
        </View>
        <View style={{ paddingBottom: 6 }} >
          <Text style={styles.Text1}>Andrew Nicholas</Text>
          <View style={styles.OuterLayer2}>
            <Text style={styles.Text2}>1 min ago</Text>
            <Text style={styles.Text3}>Sukajadi, Bandung</Text>
          </View>
        </View>
      </View>
      <View style={styles.OuterLayer3}>
        <Text style={styles.Text4}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis.
        </Text>
        <Text style={styles.Text5}>
          (99,999) Likes
        </Text>
      </View>
      <View style={styles.OuterLayer4}>
        <Image source={require('../../images/like.png')} style={styles.ImageLike} />
        <Text style={styles.LikeText}>Like</Text>
        <Image source={require('../../images/comment.png')} style={styles.ImageComment} />
        <Text style={styles.CommentText}>Comment</Text>
      </View>
      <View style={styles.OuterLayer5}>
        <Image source={require('./imagepp.jpg')} style={styles.SmallImage}/>
        <TextInput
          style={{ height: 50, width: 250, paddingTop: 2 }} placeholder="Enter to send"
          onChangeText={() => console.log('dummy')} multiline={true}
          numberOfLines={5}
        />
      </View>
    </View>
  );
};

module.exports = TimelineTextComp;
