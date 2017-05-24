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
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import timelineList from '../../../services/timelineList';
import TimelineComment from './../timelineComment';
import Accordion from 'react-native-accordion';
import styles from './style';
import post from './../../../services/post';
import auth from './../../../services/auth';
import TimelineComments from '../timelineComment';
import CommentView from '../timelineComment/commentList';
import strings from '../../../localizations';
import viewComment from '../timelineComment/viewComment'

const imgLike = require('./../../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../../images/ic_thumb_down_black_18dp.png');
const moment = require('moment');

export default class TimelineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: {},
      id: null,
      onPress: true,
      data: this.props.dataPost,
      post_id: this.props.dataPost.id,
      user_id: this.props.dataPost.user_id,
      countLike: this.props.dataPost.likes.length,
      liked: this.props.dataPost.liked,
      likes: this.props.dataPost.likes,
    }
  }

  componentDidMount() {
    auth.profile()
      .then(response => {
        this.setState({
          id: response.data.id
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  gotoDetail(dataPost) {
    Actions.timelineDetail(dataPost);
  }

  render() {
    const timePost = moment.parseZone(this.state.data.updated_at, 'YYYY-MM-DD hh:mm:ss').utc();
    const likes = this.state.data.likes
    const commentCount = this.state.data.comments.length;
    const likeCount = this.state.countLike;
    const noComments = this.state.data.comments.length === 0;
    const noLikes = this.state.countLike === 0;
    const date = moment().diff(timePost, 'days') < 5
      ? timePost.fromNow()
      : moment().diff(timePost, 'years') >= 1
      ? timePost.format('D MMM YY')
      : timePost.format('D MMM');
    const poster_id = this.state.user_id;
    const owner = poster_id === this.state.id;
    const veryfied = this.state.liked === false;
    const getIdDelete = this.state.post_id;
    const onChangeImg = () => {
      if( this.state.liked === false) {
      const id = this.state.data.id
      post
          .likePost(id)
          .then(response => {
            this.setState({
              countLike: this.state.likes.length + 1,
              liked: !this.state.liked,
              likes:this.state.likes.concat(response.data)
            })
          })
          .catch(err => console.log('error message yang salah', err))
      }
      else if(this.state.liked) {
        const idLike = getId(this.state.user_id)(this.state.likes)[0].id
        post
            .unlikePost(idLike)
            .then(response => {
              this.setState({
                countLike: this.state.likes.length - 1,
                liked: !this.state.liked,
                likes: getRemove(this.state.user_id)(this.state.likes),
              })
              console.log('ini adalah likeske 2: ', this.state.likes)
            })
            .catch(err => console.log('gagal unlike: ', err))
      }
    }
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
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={styles.textNameProfile}>
                    {this.state.data.poster.name_first} {this.state.data.poster.name_last}
                  </Text>
                  {owner ?
                    <TouchableOpacity
                      onPress={() => Alert.alert('Cofirmation',
                      'Delete post?', [
                        { text: 'No', onPress: () => console.log('Cancel Pressed')},
                        { text: 'Yes', onPress:
                        () => post.deletePost(getIdDelete)
                        .then(response => {
                          console.log("Deleted");
                        })
                        .catch(err => {
                          console.log("Error on delete");
                        })},
                      ])}>
                      <Image
                        style={styles.icons}
                        source={require('./../../../images/ic_delete_white_24dp.png')}
                      />
                    </TouchableOpacity> : <View />}
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom: 10}}>
                  <Image
                    source={require('./../../../images/ic_watch_later_black_18dp.png')}
                    style={{ marginRight: 5, height: 10, width: 10 }}
                  />
                  {/* show data time when is post update*/}
                  <Text style={styles.textDay}>
                    {date}
                  </Text>
                </View>
                 <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom: 10 }}>
                  <Text style={styles.textNameProfile}>
                    {this.state.data.text}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginBottom: 10 }}>
                  <TouchableOpacity
                    onPress={() => onChangeImg()}
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    activeOpacity={0.7}
                  >
                    <Image
                      source={veryfied ? imgLike : imgUnLike}
                      style={{ marginRight: 5, height: 15, width: 15, tintColor: '#2196F3'}}
                    />
                    {veryfied ? likeCount > 1 ?
                      <Text>{this.state.countLike} {strings.timeline.likes}</Text> : noLikes ?
                      <Text>{strings.timeline.like}</Text> : <Text>{this.state.countLike} {strings.timeline.like}</Text> :
                      <Text>{this.state.countLike} {strings.timeline.unlike}</Text>}
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
                    {commentCount > 1 ?
                      <Text>{this.state.data.comments.length} {strings.timeline.comments}</Text> : noComments ?
                      <Text>{strings.timeline.comment}</Text> :
                      <Text>{this.state.data.comments.length} {strings.timeline.comment}</Text>}
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
                    <Text>{strings.timeline.share}</Text>
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

function getId(id){
  return (json) => {
    return json.filter((data) => {return data.user_id === id})
  }
}

function getRemove(id){
  return (json) => {
    return json.filter((data) => {return data.user_id !== id})
  }
}
