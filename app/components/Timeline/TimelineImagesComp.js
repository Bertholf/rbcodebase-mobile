import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import styles from './Timeline Style/TimelineImageCompStyles';

const width = Dimensions.get('window').width;

const TimelineImageComp = () => {
  return (
    <View style={styles.OuterView}>
      <View style={styles.OuterLayer1}>
        <View>
          <Image source={require('../../images/imagepp.jpg')} style={{ width: 85, height: 85, borderRadius: 50 }} />
        </View>
        <View style={{ paddingBottom: 6 }}>
          <Text style={styles.Text1}>Andrew Nicholas</Text>
          <View style={styles.OuterLayer2}>
            <Text style={styles.Text2}>1 min ago</Text>
            <Text style={styles.Text3}>Sukajadi, Bandung</Text>
          </View>
        </View>
      </View>
      <View style={styles.OuterLayer3}>
        <Image source={require('../../images/image1.jpg')} style={{ height: 200, width: width }} />
        <Text style={styles.NumberLike}>
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
        <Image source={require('../../images/imagepp.jpg')} style={styles.SmallImage} />
        <TextInput style={styles.TextInput1} placeholder="Enter to send" onChangeText={() => console.log('dummy')} />
      </View>
    </View>
  );
};

module.exports = TimelineImageComp;
