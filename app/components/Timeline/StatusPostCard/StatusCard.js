import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  ListView,
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';
import FormData from 'FormData';
import RNFetchBlob from 'react-native-fetch-blob';
import PostMenu from './../../../components/Timeline/StatusPostCard/postMenuIcon';
import post from './../../../services/post';
import TimelineList from '../TimelineList';
import InvertibleScrollView from 'react-native-invertible-scroll-view'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class PostCard extends Component {

  constructor() {
    super();
    this.state = {
      filename: 'no file',
      text: '',
      picture: null,
      data: [],
      path: '',
      type: '',
    };
  }
  setFileName(name, data, type, path) {
    this.setState({ filename: name, picture: data, type: type, path: path });
    console.log("MAFOAMFODSMFSODAMFSDOA", this.state.filename, " and ",name);
  }

  clearText(fieldName) {
    this.refs[fieldName].setNativeProps({ text: '' });
  }

  uploadFile() {
    const text = this.state.text;
    const media = this.state.picture;
    const mediaPath = this.state.path;
    const mediaName = this.state.filename;
    const mediaType = this.state.type;
    const type = 'multipart/form-data';
    if (media !== null) {
      // RNFetchBlob.fetch('POST', 'http://rbcodebase.com/api/timeline/post', {
      //   Authorization : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmZmI4MmE1MDY0NDJhZDg3N2UzZjBmMzJiZjg4OGJjZDg2ZDM0MTYxNTMzY2ZjNDlhMDY0OWE3YWI0YTgzMTNhNmNlYzdmMDhiZTdiMGExIn0.eyJhdWQiOiIyIiwianRpIjoiMWZmYjgyYTUwNjQ0MmFkODc3ZTNmMGYzMmJmODg4YmNkODZkMzQxNjE1MzNjZmM0OWEwNjQ5YTdhYjRhODMxM2E2Y2VjN2YwOGJlN2IwYTEiLCJpYXQiOjE0OTY3MzgyMDksIm5iZiI6MTQ5NjczODIwOSwiZXhwIjoxNTI4Mjc0MjA5LCJzdWIiOiI0OCIsInNjb3BlcyI6W119.NCF0cYLdE3OOE0guufFXSfMjA2NNqJtUkiBaynb7Ds5jPP7Xja7xojkMCWWvt_3bHDfXnf1jXcToQk3sY2E962Hst1ZHD0Biolgi-kIUHYqt4_cF9dpo3DI_ywaB_3MeLQ_bHGvaHs5XF8j8VMPCmytd_RcsU8B-OEvowzVPGuEkxKyQT8UtwWTfPMXIfxn5eCxvJspLRQ02fcfu3zhhtRmGgfqCmmooaABaPjS_sBcQVoDHlADQ71v62RDJxqCMXQKKatWV98DBuhG7gFT8nF9mNCgHFxnYaOb5RkRx8KX1QBxGPdtBRliaPmur90hCq5BMxhrm9Yr6c9z8hVTVx_pxwRRyuVNezE-Cf0z2F0pwPn0zFePRmLgEOIGIOGDu_XEBt2t3ex198JKPmHKzOnIADhClFT5k_KLXSiUb2BHKQtX8blkhqpZNmE6vVuPSHK6MrYlNPOq0CulT54hNalS7kO7qQHzn2n0gX6Zph1lHi0DbgYnfcAUqo7pF_0Y6UzRaz-uNBHeZCUfT-1isc7pdDxnPp4h2PyjaKiHQVL-mlJ5lCtHrZNyPEzUbmJbwA50W8ym0KKcA-R20lqxKH46la3G4HebE93d55zaVqOe509kSY5s_qCmEVkm7DVAcnS49qFrextPyf3OLZjqv1r0T_xaYNcKETbxIqIwm3P0",
      //   'Content-Type' : type,
      // }, [
      //   { name: 'media', filename: mediaName, type: mediaType, data: RNFetchBlob.wrap(mediaPath) },
      //   { name: 'text', data: text }
      // ]).then((resp) => {
      //   console.log('SUCCESSSSSSS=>>>>>>', resp);
      //   this.setState(() => {
      //     // console.log('prevState', prevState.data);
      //     return {
      //       text: '',
      //       picture: '',
      //       filename: '',
      //       type: '',
      //       path: '',
      //       // data: prevState.data.concat(resp.data),
      //     };
      //   });
      // }).catch((err) => {
      //   Alert.alert(err.message);
      // })
      const form = new FormData();
      console.log("AHAHSAHSAHSAHS", mediaName, this.state.filename);
      form.append('media', {
        uri: "file://" + mediaPath,
        type: mediaType,
        name: mediaName,
      });
      form.append("text", text);

      console.log("Landing here =======", form);

      fetch('http://rbcodebase.com/api/timeline/post', {
        method: 'POST',
        headers: {
          Authorization : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmZmI4MmE1MDY0NDJhZDg3N2UzZjBmMzJiZjg4OGJjZDg2ZDM0MTYxNTMzY2ZjNDlhMDY0OWE3YWI0YTgzMTNhNmNlYzdmMDhiZTdiMGExIn0.eyJhdWQiOiIyIiwianRpIjoiMWZmYjgyYTUwNjQ0MmFkODc3ZTNmMGYzMmJmODg4YmNkODZkMzQxNjE1MzNjZmM0OWEwNjQ5YTdhYjRhODMxM2E2Y2VjN2YwOGJlN2IwYTEiLCJpYXQiOjE0OTY3MzgyMDksIm5iZiI6MTQ5NjczODIwOSwiZXhwIjoxNTI4Mjc0MjA5LCJzdWIiOiI0OCIsInNjb3BlcyI6W119.NCF0cYLdE3OOE0guufFXSfMjA2NNqJtUkiBaynb7Ds5jPP7Xja7xojkMCWWvt_3bHDfXnf1jXcToQk3sY2E962Hst1ZHD0Biolgi-kIUHYqt4_cF9dpo3DI_ywaB_3MeLQ_bHGvaHs5XF8j8VMPCmytd_RcsU8B-OEvowzVPGuEkxKyQT8UtwWTfPMXIfxn5eCxvJspLRQ02fcfu3zhhtRmGgfqCmmooaABaPjS_sBcQVoDHlADQ71v62RDJxqCMXQKKatWV98DBuhG7gFT8nF9mNCgHFxnYaOb5RkRx8KX1QBxGPdtBRliaPmur90hCq5BMxhrm9Yr6c9z8hVTVx_pxwRRyuVNezE-Cf0z2F0pwPn0zFePRmLgEOIGIOGDu_XEBt2t3ex198JKPmHKzOnIADhClFT5k_KLXSiUb2BHKQtX8blkhqpZNmE6vVuPSHK6MrYlNPOq0CulT54hNalS7kO7qQHzn2n0gX6Zph1lHi0DbgYnfcAUqo7pF_0Y6UzRaz-uNBHeZCUfT-1isc7pdDxnPp4h2PyjaKiHQVL-mlJ5lCtHrZNyPEzUbmJbwA50W8ym0KKcA-R20lqxKH46la3G4HebE93d55zaVqOe509kSY5s_qCmEVkm7DVAcnS49qFrextPyf3OLZjqv1r0T_xaYNcKETbxIqIwm3P0",
          "Content-Type" : type
        },
        body: form
      })
      .then((resp) => {
        console.log("SUKSES", resp);
        this.setState(() => {
            // console.log('prevState', prevState.data);
            return {
              text: '',
              picture: '',
              filename: '',
              type: '',
              path: '',
              // data: prevState.data.concat(resp.data),
            };
          });
      })
      .catch((err) => {
        console.log("GAGAL", err.message);
        Alert.alert(err.message);
      })
    } else {
      post
      .newPost(text, type)
      .then((res) => {
        this.setState((prevState) => {
          console.log('prevState', prevState.data);
          return {
            text: '',
            data: prevState.data.concat(res.data),
          };
        });

      })
      .catch((err) => {
        Alert.alert(err.message);
      });
    }
  }

  updateText = (text) => {
    this.setState(prevState => ({
      text: text
    }));
  }


  renderRow = (data) => {
    return (
      <View><TimelineList dataPost={data} /></View>
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
                height: 70,
                paddingHorizontal: 12,
              }}
              multiline
              blurOnSubmit
              placeholder="Your Status"
              placeholderTextColor="#BDBDBD"
              onChangeText={text => this.updateText(text)}
              value={this.state.text}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            {/* <Text>{this.state.filename}</Text> */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              {this.state.picture
                ? <Image
                    source={{
                      uri: `${'data:image/jpg;base64'}`,
                      scale: 3,
                      width: 100,
                      height: 100,
                    }}
                    style={{
                      flex: 1,
                      resizeMode: 'contain',
                      margin: 3,
                      padding: 3,
                    }}
                  />
                : <View />}
            </View>
          </View>
          <View style={styles.border}>
            <PostMenu getData={(name, data, type, path) => this.setFileName(name, data, type, path)} />
            <View
              style={{
                flex: 1,
                paddingTop: 8,
              }}
            >
              <TouchableOpacity onPress={() => this.uploadFile()}>
                <Text style={styles.post}>
                Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ListView
          enableEmptySections
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />  }
          dataSource={ds.cloneWithRows(this.state.data)}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
