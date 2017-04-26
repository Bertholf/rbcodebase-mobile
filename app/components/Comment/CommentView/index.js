import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  ListView,
  TouchableOpacity,
} from 'react-native';
import comment from '../../../services/comment';
import styles from './style';

const jempol = require('./../../../images/thumb.png');
const heart = require('./../../../images/hearts.png');
const bheart = require('./../../../images/heart.png');
const share = require('./../../../images/share.png');
const message = require('./../../../images/message.png');

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class CommentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading: true,
      comment: {},
    };
  }
  componentDidMount() {
    // comment.getComment()
    // .then((data) => {
    //   this.setState({ comment: data, loading: false });
    //   console.log(this.state);
    // })
    // .catch(err => console.log(err));
  }
  render() {
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.comment)}
          renderRow={dataComment =>
            <View style={styles.container}>
              <View style={styles.content}>
                <View style={styles.headerContent}>
                  <Image style={styles.imgUser} source={{ uri: dataComment.avatarComment }} />
                  <View style={styles.headerText}>
                    <Text style={styles.username} >{dataComment.user}</Text>
                    <Text style={styles.date} >{dataComment.dateComment}</Text>
                  </View>
                </View>
                <Image style={styles.img} source={{ uri: dataComment.imageComment }} />
                <Text style={styles.comment} >{dataComment.textComments}</Text>
                <View style={styles.action}>
                  <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                      <Image style={styles.thumb} source={jempol} />
                      <Text style={styles.number} >{dataComment.numberComment}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                      <Image style={styles.thumb} source={message} />
                      <Text style={styles.number} >{dataComment.numberComment}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Image style={styles.thumb} source={share} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => this.toggleSwitch()} >
                    <Text>
                      {this.state.clicked ? <Image style={styles.heart} source={heart} /> :
                      <Image style={styles.heart} source={bheart} /> }
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        />
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
  toggleSwitch() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  }
