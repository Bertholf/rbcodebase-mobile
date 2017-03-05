import React, { Component } from 'react';
import {
  Picker,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import auth from './../../services/auth';
import IconClose from './../../layouts/IconClose';
import strings from '../../localizations';
import updatePref from '../../services/updatePref';


const styles = StyleSheet.create({
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
      privacy_follow: '',
      privacy_follow_confirm: '',
      privacy_comment: '',
      privacy_post: '',
      privacy_timeline_post: '',
      privacy_message: '',
      email_follow: '',
      email_comment_like: '',
      email_post_share: '',
      email_comment_post: '',
      email_post_like: '',
      email_comment_reply: '',
      pick: '',
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
      email_follow: response.data[0].email_follow,
      email_post_like: response.data[0].email_post_like,
      email_post_share: response.data[0].email_post_share,
      email_comment_post: response.data[0].email_comment_post,
      email_comment_like: response.data[0].email_comment_like,
      email_comment_reply: response.data[0].email_comment_reply,
    }))
    .catch();
  }
  render() {
    const saveUpdate = () => {
      auth.updateSetting(this.state.privacy_follow, this.state.privacy_follow_confirm, this.state.privacy_comment, this.state.privacy_post, this.state.privacy_timeline_post, this.state.privacy_message, this.state.email_follow, this.state.email_post_like, this.state.email_post_share, this.state.email_comment_post, this.state.email_comment_like, this.state.email_comment_reply)
      .then(response =>
        this.setState({ updateSetting: response.data, loading: false }, () => Actions.pop()))
      .catch(err => err);
    };

    // Save Button on NavigationBar
    const rightButtonConfig = {
      title: strings.settings.save,
      handler: () => saveUpdate(),
      // handler: () => Actions.pop(),
    };

    const titleConfig = {
      title: strings.settings.ad_Preference,
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
          />
        </View>
        <ScrollView>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.privacyfollow}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.privacy_follow === 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_follow}
                    onValueChange={lang => this.setState({ privacy_follow: lang })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :
                   this.state.privacy_follow === 'all' ?
                     <Picker
                       selectedValue={this.state.privacy_follow}
                       onValueChange={lang => this.setState({ privacy_follow: lang })}
                     >
                       <Picker.Item label={strings.adpreference.all} value="all" />
                       <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                       <Picker.Item label={strings.adpreference.none} value="none" />
                     </Picker> :
                   this.state.privacy_follow === 'none' ?
                     <Picker
                       selectedValue={this.state.privacy_follow}
                       onValueChange={value => this.setState({ privacy_follow: value })}
                     >
                       <Picker.Item label={strings.adpreference.none} value="none" />
                       <Picker.Item label={strings.adpreference.all} value="all" />
                       <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                     </Picker> :
                     <Picker
                       selectedValue={this.state.pick}
                       onValueChange={valuefollow => this.setState({ pick: valuefollow })}
                     >
                       <Picker.Item label={strings.adpreference.none} value="none" />
                       <Picker.Item label={strings.adpreference.all} value="all" />
                       <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                     </Picker>
                }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.privacyfollowconfirm}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                {this.state.privacy_follow_confirm === 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_follow_confirm}
                    onValueChange={value => this.setState({ privacy_follow_confirm: value })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

                  this.state.privacy_follow_confirm == 'all' ?

                    <Picker
                      selectedValue={this.state.privacy_follow_confirm}
                      onValueChange={value => this.setState({ privacy_follow_confirm: value })}
                    >
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                      <Picker.Item label={strings.adpreference.none} value="none" />
                    </Picker> :

                  this.state.privacy_follow_confirm == 'none' ?
                    <Picker
                      selectedValue={this.state.privacy_follow_confirm}
                      onValueChange={value => this.setState({ privacy_follow_confirm: value })}
                    >
                      <Picker.Item label={strings.adpreference.none} value="none" />
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    </Picker> :
                    <Picker
                      selectedValue={this.state.pick}
                      onValueChange={valueconfirm => this.setState({ pick: valueconfirm })}
                    >
                      <Picker.Item label={strings.adpreference.none} value="none" />
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    </Picker>

                }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.privacycomment}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                {this.state.privacy_comment == 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_comment}
                    onValueChange={value => this.setState({ privacy_comment: value })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

                   this.state.privacy_comment === 'all' ?

                     <Picker
                       selectedValue={this.state.privacy_comment}
                       onValueChange={value => this.setState({ privacy_comment: value })}
                     >
                       <Picker.Item label={strings.adpreference.all} value="all" />
                       <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                       <Picker.Item label={strings.adpreference.none} value="none" />
                     </Picker> :

                 this.state.privacy_comment == 'none' ?
                   <Picker
                     selectedValue={this.state.privacy_comment}
                     onValueChange={value => this.setState({ privacy_comment: value })}
                   >
                     <Picker.Item label={strings.adpreference.none} value="none" />
                     <Picker.Item label={strings.adpreference.all} value="all" />
                     <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                   </Picker> :
                   <Picker
                     selectedValue={this.state.pick}
                     onValueChange={valuecomment => this.setState({ pick: valuecomment })}
                   >
                     <Picker.Item label={strings.adpreference.none} value="none" />
                     <Picker.Item label={strings.adpreference.all} value="all" />
                     <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                   </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.privacypost}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.privacy_post == 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_post}
                    onValueChange={value => this.setState({ privacy_post: value })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

             this.state.privacy_post === 'all' ?

               <Picker
                 selectedValue={this.state.privacy_post}
                 onValueChange={value => this.setState({ privacy_post: value })}
               >
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                 <Picker.Item label={strings.adpreference.none} value="none" />
               </Picker> :

             this.state.privacy_post === 'none' ?
               <Picker
                 selectedValue={this.state.privacy_post}
                 onValueChange={value => this.setState({ privacy_post: value })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valuepost => this.setState({ pick: valuepost })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.privacytimelinepost}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.privacy_timeline_post == 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_timeline_post}
                    onValueChange={value => this.setState({ privacy_timeline_post: value })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

                  this.state.privacy_timeline_post == 'all' ?

                    <Picker
                      selectedValue={this.state.privacy_timeline_post}
                      onValueChange={value => this.setState({ privacy_timeline_post: value })}
                    >
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                      <Picker.Item label={strings.adpreference.none} value="none" />
                    </Picker> :

             this.state.privacy_timeline_post == 'none' ?
               <Picker
                 selectedValue={this.state.privacy_timeline_post}
                 onValueChange={value => this.setState({ privacy_timeline_post: value })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valuetimeline => this.setState({ pick: valuetimeline })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.privacymessage}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.privacy_message == 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_message}
                    onValueChange={lang6 => this.setState({ privacy_message: lang6 })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

             this.state.privacy_message == 'all' ?

               <Picker
                 selectedValue={this.state.privacy_message}
                 onValueChange={lang6 => this.setState({ privacy_message: lang6 })}
               >
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                 <Picker.Item label={strings.adpreference.none} value="none" />
               </Picker> :

             this.state.privacy_message === 'none' ?
               <Picker
                 selectedValue={this.state.privacy_message}
                 onValueChange={lang6 => this.setState({ privacy_message: lang6 })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valuemessage => this.setState({ pick: valuemessage })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>

          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.emailfollow}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.email_follow == 0 ?
                  <Picker
                    selectedValue={this.state.email_follow}
                    onValueChange={value => this.setState({ email_follow: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_follow == 1 ?

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
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.emailpostlike}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                {this.state.email_post_like === 0 ?
                  <Picker
                    selectedValue={this.state.email_post_like}
                    onValueChange={value => this.setState({ email_post_like: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

                 this.state.email_post_like == 1 ?

                   <Picker
                     selectedValue={this.state.email_post_like}
                     onValueChange={value => this.setState({ email_post_like: value })}
                   >
                     <Picker.Item label={strings.adpreference.yes} value="1" />
                     <Picker.Item label={strings.adpreference.no} value="0" />
                   </Picker> :
                   <Picker
                     selectedValue={this.state.pick}
                     onValueChange={valueemail => this.setState({ pick: valueemail })}
                   >
                     <Picker.Item label={strings.adpreference.none} value="none" />
                     <Picker.Item label={strings.adpreference.all} value="all" />
                     <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                   </Picker>
             }

              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.emailpostshare}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.email_post_share === 0 ?
                  <Picker
                    selectedValue={this.state.email_post_share}
                    onValueChange={value => this.setState({ email_post_share: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_post_share == 1 ?

               <Picker
                 selectedValue={this.state.email_post_share}
                 onValueChange={value => this.setState({ email_post_share: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valueshare => this.setState({ pick: valueshare })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.emailcommentpost}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.email_comment_post == 0 ?
                  <Picker
                    selectedValue={this.state.email_comment_post}
                    onValueChange={value => this.setState({ email_comment_post: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_comment_post == 1 ?

               <Picker
                 selectedValue={this.state.email_comment_post}
                 onValueChange={value => this.setState({ email_comment_post: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valuecpost => this.setState({ pick: valuecpost })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.emailcommentlike}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                {this.state.email_comment_like == 0 ?
                  <Picker
                    selectedValue={this.state.email_comment_like}
                    onValueChange={value => this.setState({ email_comment_like: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_comment_like == 1 ?

               <Picker
                 selectedValue={this.state.email_comment_like}
                 onValueChange={value => this.setState({ email_comment_like: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valueclike => this.setState({ pick: valueclike })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
          <View>
            <View style={styles.styleView}>
              <View>
                <Text style={styles.text}>{strings.adpreference.emailcommentreplay}</Text>
              </View>
              <View style={{ width: 115, justifyContent: 'center' }}>
                { this.state.email_comment_reply == 0 ?
                  <Picker
                    selectedValue={this.state.email_comment_reply}
                    onValueChange={value => this.setState({ email_comment_reply: value })}
                  >
                    <Picker.Item label={strings.adpreference.no} value="0" />
                    <Picker.Item label={strings.adpreference.yes} value="1" />
                  </Picker> :

             this.state.email_comment_reply == 1 ?

               <Picker
                 selectedValue={this.state.email_comment_reply}
                 onValueChange={value => this.setState({ email_comment_reply: value })}
               >
                 <Picker.Item label={strings.adpreference.yes} value="1" />
                 <Picker.Item label={strings.adpreference.no} value="0" />
               </Picker> :
               <Picker
                 selectedValue={this.state.pick}
                 onValueChange={valuecreplay => this.setState({ pick: valuecreplay })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker>

          }
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
