import React, {Component} from 'react';
import {
  Navigator,
  BackAndroid,
  Button,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import Comment from '../../../services/comment.js';
import CommentView from './commentList.js';
const icon = require('./../../../images/ic_send_white_24dp.png')

// @flow
export default class TimelineComment extends Component {

  constructor(props ) {
    super(props);
    this.state = {
      text: '',
      postId: this.props.id,
      data:[],
    };
  }

   updateText = (text) => {
    this.setState(prevState => ({
      text: text
    }));
  }


  postComment() {
    // console.log("++++++++++++++++++++++++++++")
    // console.log("ini data id" ,this.props.id)
    console.log("ini text", this.state.text)
    // // console.log("ini data" , this.state.data)
    console.log("=============================")
    const post_id = Number(this.props.id);
    const text = this.state.text;
    const result = this.state.data;
    console.log("--------Array ", Array.isArray(this.state.data))
    Comment
      .postComment(text : String, post_id : Number)
      .then((res) => {
       console.log("reqqq")
        this.setState({
            text: '',
            data: result.concat(res.data),
        });
      })
      .catch((err) => console.log("error post =================>", err))
  }

  render() {
    return (
        <View>
           <CommentView data ={this.state.data} />
             <View style = {styles.inputContainer}>
              <View style={styles.box}>
                <TextInput
                  style={styles.comment}
                  placeholder = 'Comment'
                  autoCapitalize = 'none'
                  onChangeText = {(text) => this.updateText(text)}
                  multiline = {true}
                  value={this.state.text}
                  underlineColorAndroid = "rgba(0,0,0,0)" />
                  <TouchableOpacity onPress = { () => {
                    this.postComment()
                  }}>
                      <Image
                        style={styles.icon}
                        source={icon}
                      />
                  </TouchableOpacity>
              </View>
            </View>
        </View>

    )
  }
}
