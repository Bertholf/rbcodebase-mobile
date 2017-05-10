import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import timelineList from '../../../services/timelineList';
import TimelineComment from './../timelineComment';
import Accordion from 'react-native-accordion';
import styles from './style';
import post from './../../../services/post';
import TimelineComments from '../timelineComment';
import CommentView from '../timelineComment/commentList';
const imgLike = require('./../../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../../images/ic_thumb_down_black_18dp.png');


export default class TimelineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: {},
      onPress: true,
      data: this.props.dataPost,

    }
  }
// change image like and Unlike
  onChangeImg() {
    this.setState({
      onPress: !this.state.onPress,
    });
  }
  gotoDetail(dataPost) {
    Actions.timelineDetail(dataPost);
  }

  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.timelineContainer}>
            <View style={{ borderBottomWidth: 0.5, paddingBottom: 5, paddingTop: 5}}>
            <View style={styles.about}>
            {/*show image profile*/}
              <TouchableOpacity onPress={Actions.profile} activeOpacity={0.7}>
                <Image
                  source={{ uri: this.state.data.poster.picture }}
                  style={styles.avatarImg}
                />
              </TouchableOpacity>
              <View style={styles.textAboutContainer}>
              {/* show first name and last name in timeline*/}
                <Text style={styles.textNameProfile}>
                {this.state.data.poster.name_first} {this.state.data.poster.name_last}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom: 10}}>
                  <Image
                    source={require('./../../../images/ic_watch_later_black_18dp.png')}
                    style={{ marginRight: 5, height: 10, width: 10 }}
                  />
                  {/* show data time when is post update*/}
                  <Text style={styles.textDay}>
                    {this.state.data.updated_at}
                  </Text>
                </View>
                 <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom: 10 }}>
                  <Text style={styles.textNameProfile}>
                    {this.state.data.text}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginBottom: 10 }}>
                  <TouchableOpacity
                    onPress={() => this.onChangeImg()}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={this.state.onPress ? imgLike : imgUnLike}
                      style={{ marginRight: 5, height: 15, width: 15, tintColor: '#2196F3'}}
                    />
                    <Text>{this.state.onPress ? 'Like' : 'Unlike'}</Text>
                  </TouchableOpacity>
                  {/*button Comment*/}
                  <TouchableOpacity
                    onPress={Actions.timelineDetail}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={require('./../../../images/insert_comment_black.png')}
                      style={{ marginRight: 5, height: 15, width: 15, tintColor: '#2196F3' }}
                    />
                    <Text>{this.state.data.comments.length} Comment</Text>

                  </TouchableOpacity>
                  {/*button share*/}
                  <TouchableOpacity
                    onPress={Actions.timelineshare}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={require('./../../../images/share_black.png')}
                      style={{ marginRight: 5, height: 15, width: 15, tintColor: '#2196F3' }}
                    />
                    <Text>Share</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <CommentView data = {this.state.data.comments} />
                  <TimelineComment id = {this.state.data.id} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    );
  }
}
