import React, {Component} from 'react';
import {
  Navigator,
  BackAndroid,
  Button,
  View
} from 'react-native';
import styles from './style';
import Comment from '../../../services/comment.js'
import CommentPost from './CommentView'
// @flow
export default class TimelineComment extends Component {

  constructor(props : Object) {
    super(props);
    this.state = {
      text: '',
      postId: this.props.id
    };
  }
  updateText = (text) => {
      this.setState({text:text})
   }

  postComment() {
    console.log("ini", this.state.text)
    const post_id = Number(this.props.id);
    const text = this.state.text;
    Comment
      .postComment(text : String, post_id : Number)
      .then((res) => console.log("this is post comment res", res))
      .catch((err) => console.log("error post", err))
  }

  render() {
    return (
            <CommentPost
               updateText = {this.updateText.bind(this)}
               postComment = {this.postComment.bind(this)}
            />

    )
  }
}
