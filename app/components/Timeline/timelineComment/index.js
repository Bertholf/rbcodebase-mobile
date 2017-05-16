import React, {Component} from 'react';
import {
  Navigator,
  BackAndroid,
  Button,
  View,
  Text,
  Alert
} from 'react-native';
import styles from './style';
import Comment from '../../../services/comment.js'
import CommentPost from './CommentView'
import CommentList from './commentList.js'
// @flow
export default class TimelineComment extends Component {

  constructor(props : Object) {
    super(props);
    this.state = {
      text: '',
      postId: this.props.id,
      data:[]
    };
  }
  updateText = (text) => {
      this.setState({text:text})
   }

  postComment() {
    Alert.alert("inpsasfa")
    console.log("ini", this.state.text)
    const post_id = Number(this.props.id);
    const text = this.state.text;
    const result = this.state.data
    Comment
      .postComment(text : String, post_id : Number)
      .then((res) => {
        
        const newData = [res.data].concat(this.state.data);
        console.log(newData)
        this.updateText('')
        this.setState({
          data:newData,
          
        })
      })
      .catch((err) => console.log("error post", err))
  }

  render() {
    return (
        <View>
            <CommentList data={this.state.data}/>
            <CommentPost
               text       = {this.state.text}
               updateText = {this.updateText.bind(this)}
               postComment = {this.postComment.bind(this)}
            />
          </View>

    )
  }
}
