import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert,
  ListView
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';
import post from './../../../services/post';
import TimelineList from '../TimelineList';
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class PostCard extends Component {

  constructor() {
    super()
    this.state = {
      filename: 'no file',
      text: '',
      picture: null,
      data: [],
      source: ds.cloneWithRows([]),
      render: false
    }
  }
  setFileName(filename, pict) {
    this.setState({filename: filename, picture: pict})
  }

  uploadFile() {
    const text = this.state.text;
    const type = "application/x-www-form-urlencoded";
    const dummy = [].concat(this.state.data);
    post
      .newPost(text, type)
      .then((res) => {
        const newData = [res.data].concat(this.state.data);
        this.setState({
          text: "",
          data: newData,
          source: this.state.source.cloneWithRows(newData),
          render: true
        })
      })
      .catch((err) => {
        Alert.alert(err.message)
      })
  }

  updateText(text) {
    this.setState({text: text})
  }

  renderRow(data) {
    return (
      <View><TimelineList dataPost={data}/></View>
    );
  }

  render() {
    return (
      <View>
        <View style={styles.containerCard}>
          <Text style={styles.titleText}>Your Stories?</Text>
          <View>
            <TextInput
              style={{
              height: 70
            }}
              multiline={true}
              blurOnSubmit={true}
              placeholder="Your Status"
              placeholderTextColor="#BDBDBD"
              ref="newItem"
              onChangeText={(text) => this.updateText(text)}
              value={this.state.text}/>
          </View>
          <View
            style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}>
            {/* <Text>{this.state.filename}</Text> */}
            <View
              style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start'
            }}>
              {this.state.picture
                ? this
                  .state
                  .picture
                  .map(img => <Image
                    key={img}
                    source={{
                    uri: 'data:image/jpg;base64' +
                        ',' + img,
                    scale: 3,
                    width: 40,
                    height: 40
                  }}
                    style={{
                    flex: 1,
                    resizeMode: 'contain',
                    margin: 3,
                    padding: 3
                  }}/>)
                : <Text></Text>}
            </View>
          </View>
          <View style={styles.border}>
            <PostMenu getName={(name, pict) => this.setFileName(name, pict)}/>
            <View
              style={{
              flex: 1,
              paddingTop: 12
            }}>
              <Button
                title={'Post'}
                onPress={() => {
                this.uploadFile();
              }}/>
            </View>
          </View>
        </View>
        <ListView
          enableEmptySections
          dataSource={this.state.source}
          renderRow={this.renderRow}/>
      </View>
    );
  }
};
