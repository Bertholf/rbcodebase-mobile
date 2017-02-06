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
import comment from '../../services/comment';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  imgUser: {
    marginTop: 5,
    left: 5,
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  body: {
    flexDirection: 'row',
    bottom: 5,
    marginLeft: 20,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    width,
    height: height * 0.15,
  },
  content: {
    padding: 3,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  txtChat: {
    fontSize: 14,
    width: 150,
  },
  date: {
    fontSize: 10,
    justifyContent: 'center',
  },
  reply: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    paddingRight: 10,
  },
  comment: {
    bottom: 5,
  },
  heart: {
    // paddingRight: 15,
    width: 20,
    height: 20,
  },
  button: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'flex-end',
    // marginRight: 10,
  },
});

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
  toggleSwitch() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  }
