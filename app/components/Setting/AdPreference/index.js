import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NetInfo,
} from 'react-native';
import { Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import styles from '../../../style/StyleGlobal';
import auth from './../../../services/auth';
import IconClose from './../../../layouts/IconClose';
import strings from '../../../localizations';
import Toast, { DURATION } from 'react-native-easy-toast';

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
      pickfollo: '',
      pickfollconfirm: '',
      pickcomment: '',
      pickpost: '',
      picktimpost: '',
      pickmessage: '',
      position: 'bottom',
      netstate: this.props.network,
    };
  }

  // Get Settings Current User
  componentDidMount() {
    // Get AdPreference
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

  componentWillReceiveProps(NextProps) {
    console.log('PREFERENCE CONNECTION', NextProps.network);
    this.setState({ netstate: NextProps.network })
  }
  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };
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
        this.setState({ updateSetting: response.data, loading: false }, () => this.onClick(strings.EditEmail.privacysetting, 'bottom', DURATION.LENGTH_LONG)))
      .catch(err => err);
    };

    // Save Button on NavigationBar
    const color = this.state.netstate ? 'blue' : '#c0c0c0';
    const handlerState = this.state.netstate ? () => saveUpdate() : () => console.log('Disable');

    const rightButtonConfig = {
      title: strings.settings.save,
      tintColor: color,
      handler: handlerState,
    };

    const titleConfig = {
      title: strings.settings.privacysetting,
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
            <View style={styles.styleView}>
              <View>
                <Text style={styles.textPreference}>{strings.adpreference.privacyfollow}</Text>
              </View>

              <View style={styles.pickerstyle}>
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
                       selectedValue={this.state.pickfollo}
                       onValueChange={valuefollow => this.setState({ pickfollo: valuefollow })}
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
                <Text style={styles.textPreference}>{strings.adpreference.privacyfollowconfirm}</Text>
              </View>
              <View style={styles.pickerstyle}>
                {this.state.privacy_follow_confirm === 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_follow_confirm}
                    onValueChange={value => this.setState({ privacy_follow_confirm: value })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

                  this.state.privacy_follow_confirm === 'all' ?

                    <Picker
                      selectedValue={this.state.privacy_follow_confirm}
                      onValueChange={value => this.setState({ privacy_follow_confirm: value })}
                    >
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                      <Picker.Item label={strings.adpreference.none} value="none" />
                    </Picker> :

                  this.state.privacy_follow_confirm === 'none' ?
                    <Picker
                      selectedValue={this.state.privacy_follow_confirm}
                      onValueChange={value => this.setState({ privacy_follow_confirm: value })}
                    >
                      <Picker.Item label={strings.adpreference.none} value="none" />
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    </Picker> :
                    <Picker
                      selectedValue={this.state.pickfollconfirm}
                      onValueChange={valueconfirm => this.setState({ pickfollconfirm: valueconfirm })}
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
                <Text style={styles.textPreference}>{strings.adpreference.privacycomment}</Text>
              </View>
              <View style={styles.pickerstyle}>
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

                 this.state.privacy_comment === 'none' ?
                   <Picker
                     selectedValue={this.state.privacy_comment}
                     onValueChange={value => this.setState({ privacy_comment: value })}
                   >
                     <Picker.Item label={strings.adpreference.none} value="none" />
                     <Picker.Item label={strings.adpreference.all} value="all" />
                     <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                   </Picker> :
                   <Picker
                     selectedValue={this.state.pickcomment}
                     onValueChange={valuecomment => this.setState({ pickcomment: valuecomment })}
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
                <Text style={styles.textPreference}>{strings.adpreference.privacypost}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.privacy_post === 'only friend' ?
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
                 selectedValue={this.state.pickpost}
                 onValueChange={valuepost => this.setState({ pickpost: valuepost })}
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
                <Text style={styles.textPreference}>{strings.adpreference.privacytimelinepost}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.privacy_timeline_post === 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_timeline_post}
                    onValueChange={value => this.setState({ privacy_timeline_post: value })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

                  this.state.privacy_timeline_post === 'all' ?

                    <Picker
                      selectedValue={this.state.privacy_timeline_post}
                      onValueChange={value => this.setState({ privacy_timeline_post: value })}
                    >
                      <Picker.Item label={strings.adpreference.all} value="all" />
                      <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                      <Picker.Item label={strings.adpreference.none} value="none" />
                    </Picker> :

             this.state.privacy_timeline_post === 'none' ?
               <Picker
                 selectedValue={this.state.privacy_timeline_post}
                 onValueChange={value => this.setState({ privacy_timeline_post: value })}
               >
                 <Picker.Item label={strings.adpreference.none} value="none" />
                 <Picker.Item label={strings.adpreference.all} value="all" />
                 <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
               </Picker> :
               <Picker
                 selectedValue={this.state.picktimpost}
                 onValueChange={valuetimeline => this.setState({ picktimpost: valuetimeline })}
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
                <Text style={styles.textPreference}>{strings.adpreference.privacymessage}</Text>
              </View>
              <View style={styles.pickerstyle}>
                { this.state.privacy_message === 'only friend' ?
                  <Picker
                    selectedValue={this.state.privacy_message}
                    onValueChange={lang6 => this.setState({ privacy_message: lang6 })}
                  >
                    <Picker.Item label={strings.adpreference.onlyfriend} value="only friend" />
                    <Picker.Item label={strings.adpreference.all} value="all" />
                    <Picker.Item label={strings.adpreference.none} value="none" />
                  </Picker> :

             this.state.privacy_message === 'all' ?

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
                 selectedValue={this.state.pickmessage}
                 onValueChange={valuemessage => this.setState({ pickmessage: valuemessage })}
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
