import React, { Component } from 'react';
import {
  Picker,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import auth from './../../services/auth';
import updatePref from '../../services/updatePref';


export default class AdPreference extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adprefe: {},
      updateSetting: {},
      language: '',
      languages: '',
      language3: '',
      language4: '',
      language5: '',
      language6: '',
    };
  }

  componentDidMount() {
    auth.adprefe()
    .then(response => this.setState({
      privacy_follow: response.data[0].privacy_follow ,
      privacy_follow_confirm: response.data[0].privacy_follow_confirm,
      privacy_comment: response.data[0].privacy_comment,
      privacy_post: response.data[0].privacy_post,
      privacy_timeline_post: response.data[0].privacy_timeline_post,
      privacy_message: response.data[0].privacy_message,
    }) )
    .catch(Err => console.log('err', Err));
  }

  // privacyfollow() {
  //   auth.adprefe()
  //   .then(response => this.setState({
  //     privacy_follow: response.data[0].privacy_follow,
  //   }))
  //   .catch(Err => console.log('err', Err));
  // }
  // privacyfoloconfirm() {
  //   auth.adprefe()
  //   .then(response => this.setState({
  //     privacy_follow: response.data[0].privacy_follow_confirm,
  //   }))
  //   .catch(Err => console.log('err', Err));
  // }
  // privacycommen() {
  //   auth.adprefe()
  //   .then(response => this.setState({
  //     privacy_follow: response.data[0].privacy_comment,
  //   }) )
  //   .catch(Err => console.log('err', Err));
  // }
  // privacypost() {
  //   auth.adprefe()
  //   .then(response => this.setState({
  //     privacy_follow: response.data[0].privacy_post,
  //   }) )
  //   .catch(Err => console.log('err', Err));
  // }
  // privacytimelane() {
  //   auth.adprefe()
  //   .then(response => this.setState({
  //     privacy_follow: response.data[0].privacy_timeline_post,
  //   }) )
  //   .catch(Err => console.log('err', Err));
  // }
  // privacymessg() {
  //   auth.adprefe()
  //   .then(response => this.setState({
  //     privacy_follow: response.data[0].privacy_message,
  //   }) )
  //   .catch(Err => console.log('err', Err));
  // }

  render() {
    const id = this.state.id;
    const user_id = this.state.user_id;
    const privacy_follow = this.state.privacy_follow;
    const privacy_follow_confirm =this.state.follow_confirm;
    const privacy_comment = this.state.privacy_comment;
    const privacy_post = this.state.privacy_post;
    const privacy_timeline_post= this.state.privacy_timeline_post;
    const privacy_message= this.state.privacy_message;
    const email_follow = this.state.email_follow;
    const email_post_like = this.state.email_post_like;
    const email_post_share = this.state.email_post_share;
    const email_comment_post = this.state.email_comment_post;
    const email_comment_like= this.state.email_comment_like;
    const email_comment_reply= this.state.email_comment_reply;
    const saveUpdate = () => {
      // console.log(id, user_id, privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, email_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply);
      auth.updateSetting(id, user_id, privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, email_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply)
      auth.adprefe()
      .then (response => this.setState({adprefe:response.data, loading:false}, () => console.log(this.state)))
      .catch(Err=> console.log('err',Err))
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
        <View>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Follow</Text>
            </View>
          </View>
          { this.state.privacy_follow == 'everyone' ?
              <Picker
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label={this.state.privacy_follow} value="everyone" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_follow == 'all' ?

            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label={this.state.privacy_follow} value="all" />
              <Picker.Item label="everyone" value="everyone" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_follow == 'none' ?
             <Picker
               selectedValue={this.state.language}
               onValueChange={(lang) => this.setState({language: lang})}>
               <Picker.Item label={this.state.privacy_follow} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="everyone" value="everyone" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        <View>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Follow Confirm</Text>
            </View>
          </View>
          { this.state.privacy_follow_confirm == 'everyone' ?
          <Picker
            selectedValue={this.state.languages}
            onValueChange={(langs) => this.setState({languages: langs})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="everyone" />
            <Picker.Item label="all" value="all1" />
            <Picker.Item label="none" value="none1" />
          </Picker> :

          this.state.privacy_follow_confirm == 'all' ?

          <Picker
            selectedValue={this.state.languages}
            onValueChange={(langs) => this.setState({languages: langs})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="all" />
            <Picker.Item label="everyone" value="everyone1" />
            <Picker.Item label="none" value="none1" />
          </Picker> :

          this.state.privacy_follow_confirm == 'none' ?
          <Picker
            selectedValue={this.state.languages}
            onValueChange={(langs) => this.setState({languages: langs})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="none" />
            <Picker.Item label="all" value="all1" />
            <Picker.Item label="everyone" value="everyone1" />
          </Picker>

          : <Text>Loading...</Text>

        }
      </View>
        <View>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Comment</Text>
            </View>
          </View>
          { this.state.privacy_comment == 'everyone' ?
              <Picker
                selectedValue={this.state.language3}
                onValueChange={(lang3) => this.setState({language3: lang3})}>
                <Picker.Item label={this.state.privacy_comment} value="everyone" />
                <Picker.Item label="all" value="all2" />
                <Picker.Item label="none" value="none2" />
             </Picker> :

             this.state.privacy_comment == 'all' ?

            <Picker
              selectedValue={this.state.language3}
              onValueChange={(lang3) => this.setState({language3: lang3})}>
              <Picker.Item label={this.state.privacy_comment} value="all" />
              <Picker.Item label="everyone" value="everyone2" />
              <Picker.Item label="none" value="none2" />
           </Picker> :

             this.state.privacy_comment == 'none' ?
             <Picker
               selectedValue={this.state.language3}
               onValueChange={(lang3) => this.setState({language3: lang3})}>
               <Picker.Item label={this.state.privacy_comment} value="none" />
               <Picker.Item label="all" value="all2" />
               <Picker.Item label="everyone" value="everyone2" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        <View>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Post</Text>
            </View>
          </View>
          { this.state.privacy_post == 'everyone' ?
              <Picker
                selectedValue={this.state.language4}
                onValueChange={(lang4) => this.setState({language4: lang4})}>
                <Picker.Item label={this.state.privacy_post} value="everyone" />
                <Picker.Item label="all" value="all3" />
                <Picker.Item label="none" value="none3" />
             </Picker> :

             this.state.privacy_post == 'all' ?

            <Picker
              selectedValue={this.state.language4}
              onValueChange={(lang4) => this.setState({language4: lang4})}>
              <Picker.Item label={this.state.privacy_post} value="all" />
              <Picker.Item label="everyone" value="everyone3" />
              <Picker.Item label="none" value="none3" />
           </Picker> :

             this.state.privacy_post == 'none' ?
             <Picker
               selectedValue={this.state.language4}
               onValueChange={(lang4) => this.setState({language4: lang4})}>
               <Picker.Item label={this.state.privacy_post} value="none" />
               <Picker.Item label="all" value="all3" />
               <Picker.Item label="everyone" value="everyone3" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        <View>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Timeline Post</Text>
            </View>
          </View>
          { this.state.privacy_timeline_post == 'everyone' ?
              <Picker
                selectedValue={this.state.language5}
                onValueChange={(lang5) => this.setState({language5: lang5})}>
                <Picker.Item label={this.state.privacy_timeline_post} value="everyone" />
                <Picker.Item label="all" value="all4" />
                <Picker.Item label="none" value="none4" />
             </Picker> :

             this.state.privacy_timeline_post == 'all' ?

            <Picker
              selectedValue={this.state.language5}
              onValueChange={(lang5) => this.setState({language5: lang5})}>
              <Picker.Item label={this.state.privacy_timeline_post} value="all" />
              <Picker.Item label="everyone" value="everyone4" />
              <Picker.Item label="none" value="none4" />
           </Picker> :

             this.state.privacy_timeline_post == 'none' ?
             <Picker
               selectedValue={this.state.language5}
               onValueChange={(lang5) => this.setState({language5: lang5})}>
               <Picker.Item label={this.state.privacy_timeline_post} value="none" />
               <Picker.Item label="all" value="all4" />
               <Picker.Item label="everyone" value="everyone4" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        <View>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Message</Text>
            </View>
          </View>
          { this.state.privacy_message == 'everyone' ?
              <Picker
                selectedValue={this.state.language6}
                onValueChange={(lang6) => this.setState({language6: lang6})}>
                <Picker.Item label={this.state.privacy_message} value="everyone" />
                <Picker.Item label="all" value="all5" />
                <Picker.Item label="none" value="none5" />
             </Picker> :

             this.state.privacy_message == 'all' ?

            <Picker
              selectedValue={this.state.language6}
              onValueChange={(lang6) => this.setState({language6: lang6})}>
              <Picker.Item label={this.state.privacy_message} value="all" />
              <Picker.Item label="everyone" value="everyone5" />
              <Picker.Item label="none" value="none5" />
           </Picker> :

             this.state.privacy_message == 'none' ?
             <Picker
               selectedValue={this.state.language6}
               onValueChange={(lang6) => this.setState({language6: lang6})}>
               <Picker.Item label={this.state.privacy_message} value="none" />
               <Picker.Item label="all" value="all5" />
               <Picker.Item label="everyone" value="everyone5" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        <View style={{ marginTop: 20, padding: 14 }}>
          <TouchableOpacity style={styles.button} onPress={saveUpdate}>
            <Text style={styles.titleButton} >Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  titleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
  },
  styleView: {
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    marginBottom: 8,
    height: 40,
  },
  text: {
    color: '#000000',
    fontSize: 13,
  },
});
