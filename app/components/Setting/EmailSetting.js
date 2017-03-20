import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import styles from '../../style/StyleGlobal';
import auth from './../../services/auth';
import IconClose from './../../layouts/IconClose';
import Toast, { DURATION } from 'react-native-easy-toast';
import strings from '../../localizations';


const stylesAdpref = StyleSheet.create({
  titleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    elevation: 2,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
  },
  styleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 10,
  },
});

// Initial State of Setitng
export default class AdPreference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adprefe: {},
      updateSetting: {},
      email_follow: '',
      email_comment_like: '',
      email_post_share: '',
      email_comment_post: '',
      email_post_like: '',
      email_comment_reply: '',
      pickfollo: '',
      pickfollconfirm: '',
      pickcomment: '',
      pickpost: '',
      picktimpost: '',
      pickmessage: '',
      pickfollow: '',
      pickcommentlike: '',
      pickpostshare: '',
      pickcommentshare: '',
      pickcommentpost: '',
      pickpostlike: '',
      pickcommentreplay: '',
      position: 'bottom',
    };
  }

  // Get Settings Current User
  componentDidMount() {
    auth.adprefe()
    .then(response => this.setState({
      privacy_follow: response.data[0].privacy_follow,
      privacy_follow_confirm: response.data[0].privacy_follow_confirm,
      privacy_comment: response.data[0].privacy_comment,
      privacy_post: response.data[0].privacy_post,
      privacy_timeline_post: response.data[0].privacy_timeline_post,
      privacy_message: response.data[0].privacy_message,
      email_follow: response.data[0].email_follow.toString(),
      email_post_like: response.data[0].email_post_like.toString(),
      email_post_share: response.data[0].email_post_share.toString(),
      email_comment_post: response.data[0].email_comment_post.toString(),
      email_comment_like: response.data[0].email_comment_like.toString(),
      email_comment_reply: response.data[0].email_comment_reply.toString(),
    }))
    .catch();
  }
  onClick(text, position, duration, withStyle) {
    this.setState({
      position,
    });
    if (withStyle) {
      this.refs.toastWithStyle.show(text, duration);
    } else {
      this.refs.toast.show(text, duration);
    }
  }
  getButton(text, position, duration, withStyle) {
    return (
      <Text
        onPress={() => this.onClick(text, position, duration, withStyle)}
      >
        <Text>{text}</Text>
      </Text>
    );
  }
  render() {
    const saveUpdate = () => {
      auth.updateSetting(this.state.privacy_follow, this.state.privacy_follow_confirm, this.state.privacy_comment, this.state.privacy_post, this.state.privacy_timeline_post, this.state.privacy_message, this.state.email_follow, this.state.email_post_like, this.state.email_post_share, this.state.email_comment_post, this.state.email_comment_like, this.state.email_comment_reply)
      .then(response =>
        this.setState({ updateSetting: response.data, loading: false }, () => this.onClick(strings.settings.saved, 'bottom', DURATION.LENGTH_LONG)))
      .catch(err => err);
    };

    // Save Button on NavigationBar
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => saveUpdate(),
      // handler: () => Actions.pop(),
    };

    const titleConfig = {
      title: strings.settings.emailsetting,
    };

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}
        >
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={<IconClose onPress={Actions.pop} />}
            style={{ height: 55, backgroundColor: '#f0f0f0' }}
          />
        </View>
        <ScrollView>
          <View>
            <View style={stylesAdpref.styleView}>
              <View>
                <Text style={stylesAdpref.text}>{strings.adpreference.emailfollow}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.email_follow == "0" ?
                  <Picker
                    selectedValue={this.state.email_follow}
                    onValueChange={value => this.setState({ email_follow: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_follow == "1" ?

               <Picker
                 selectedValue={this.state.email_follow}
                 onValueChange={value => this.setState({ email_follow: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valueemail => this.setState({ pick: valueemail })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker>
          }
              </View>
            </View>
          </View>
          <View>
            <View style={stylesAdpref.styleView}>
              <View>
                <Text style={stylesAdpref.text}>{strings.adpreference.emailpostlike}</Text>
              </View>
              <View style={styles.pickerstyle}>
                {this.state.email_post_like == "0" ?
                  <Picker
                    selectedValue={this.state.email_post_like}
                    onValueChange={value => this.setState({ email_post_like: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

                 this.state.email_post_like == "1" ?

                   <Picker
                     selectedValue={this.state.email_post_like}
                     onValueChange={value => this.setState({ email_post_like: value })}
                   >
                     <Picker.Item label={strings.adpreference.yes} value="1" />
                     <Picker.Item label={strings.adpreference.no} value="0" />
                   </Picker> :
                   <Picker
                     selectedValue={this.state.pickpostlike}
                     onValueChange={valueemail => this.setState({ pickpostlike: valueemail })}
                   >
                     <Picker.Item label={strings.adpreference.yes} value="1" />
                     <Picker.Item label={strings.adpreference.no} value="0" />
                   </Picker>
             }

              </View>
            </View>
          </View>
          <View>
            <View style={stylesAdpref.styleView}>
              <View>
                <Text style={stylesAdpref.text}>{strings.adpreference.emailpostshare}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.email_post_share == "0" ?
                  <Picker
                    selectedValue={this.state.email_post_share}
                    onValueChange={value => this.setState({ email_post_share: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_post_share == "1" ?

               <Picker
                 selectedValue={this.state.email_post_share}
                 onValueChange={value => this.setState({ email_post_share: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pickpostshare}
                 onValueChange={valueshare => this.setState({ pickpostshare: valueshare })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={stylesAdpref.styleView}>
              <View>
                <Text style={stylesAdpref.text}>{strings.adpreference.emailcommentpost}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.email_comment_post == "0" ?
                  <Picker
                    selectedValue={this.state.email_comment_post}
                    onValueChange={value => this.setState({ email_comment_post: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_comment_post == "1" ?

               <Picker
                 selectedValue={this.state.email_comment_post}
                 onValueChange={value => this.setState({ email_comment_post: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pickcommentpost}
                 onValueChange={valuecpost => this.setState({ pickcommentpost: valuecpost })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={stylesAdpref.styleView}>
              <View>
                <Text style={stylesAdpref.text}>{strings.adpreference.emailcommentlike}</Text>
              </View>
              <View style={styles.pickerstyle}>
                {this.state.email_comment_like === "0" ?
                  <Picker
                    selectedValue={this.state.email_comment_like}
                    onValueChange={value => this.setState({ email_comment_like: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_comment_like === "1" ?

               <Picker
                 selectedValue={this.state.email_comment_like}
                 onValueChange={value => this.setState({ email_comment_like: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pickcommentlike}
                 onValueChange={valueclike => this.setState({ pickcommentlike: valueclike })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={stylesAdpref.styleView}>
              <View>
                <Text style={stylesAdpref.text}>{strings.adpreference.emailcommentreplay}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.email_comment_reply === "0" ?
                  <Picker
                    selectedValue={this.state.email_comment_reply}
                    onValueChange={value => this.setState({ email_comment_reply: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_comment_reply == "1" ?

               <Picker
                 selectedValue={this.state.email_comment_reply}
                 onValueChange={value => this.setState({ email_comment_reply: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pickreplay}
                 onValueChange={valuecreplay => this.setState({ pickreplay: valuecreplay })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker>

          }
              </View>
            </View>
          </View>
        </ScrollView>
        <Toast
          ref="toast"
          style={{ backgroundColor: 'grey' }}
          fadeInDuration={300}
          fadeOutDuration={1000}
        />
      </View>
    );
  }
}
