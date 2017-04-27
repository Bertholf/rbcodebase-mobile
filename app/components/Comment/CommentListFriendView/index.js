import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  ListView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import comment from '../../../services/comment';
import styles from './style';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class CommentListFriendView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading: true,
      comment: {},
    };
  }
  componentDidMount() {
    comment.getComment()
    .then((data) => {
      this.setState({ comment: data, loading: false });
      console.log(this.state);
    })
    .catch(err => console.log(err));
  }
  toggleSwitch() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.comment)}
          renderRow={dataComment =>
            <View style={styles.container}>
              <Image style={styles.imgUser} source={{ uri: dataComment.avatarComment }} />
              <View style={styles.body}>
                <View style={styles.content}>
                  <Text style={styles.username} >{dataComment.user}</Text>
                  <Text style={styles.comment} >{dataComment.textComment}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.date} >{dataComment.dateComment}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.toggleSwitch()}>
                      {this.state.clicked ?
                        <Text style={styles.reply} >Unlike</Text> :
                        <Text style={styles.reply} >Like</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={styles.reply} >Reply</Text>
                    </TouchableOpacity>
                  </View>
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
  }
