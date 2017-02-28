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
import {Actions} from 'react-native-router-flux';


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
      language7: '',
      language8: '',
      language9: '',
      language10: '',
      language11: '',
      language12: '',
    };
  }

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
    const privacy_follow = this.state.language;
    const privacy_follow_confirm =this.state.languages;
    const privacy_comment = this.state.language3;
    const privacy_post = this.state.language4;
    const privacy_timeline_post= this.state.language5;
    const privacy_message= this.state.language6;
    const email_follow = this.state.language7;
    const email_post_like = this.state.language8;
    const email_post_share = this.state.language9;
    const email_comment_post = this.state.language10;
    const email_comment_like= this.state.language11;
    const email_comment_reply= this.state.language12;
    const saveUpdate = () => {
      // console.log(id, user_id, privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, email_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply);
      auth.updateSetting(privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, email_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply)
      .then (response => this.setState({updateSetting:response.data, loading:false}, () => console.log(this.state)))
      .catch(Err=> console.log('err',Err))
      Actions.pop();
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
        <View>
          <View style={styles.styleView}>
            <View>
              <Text style={styles.text}>Privacy Follow</Text>
            </View>
            <View style={{ width: 115, justifyContent: 'center' }}>
              { this.state.privacy_follow == 'only friend' ?
                  <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label={this.state.privacy_follow} value="only friend" />
                    <Picker.Item label="all" value="all" />
                    <Picker.Item label="none" value="none" />
                 </Picker> :

                 this.state.privacy_follow == 'all' ?

                <Picker
                  selectedValue={this.state.language}
                  onValueChange={(lang) => this.setState({language: lang})}>
                  <Picker.Item label={this.state.privacy_follow} value="all" />
                  <Picker.Item label="only friend" value="only friend" />
                  <Picker.Item label="none" value="none" />
               </Picker> :

                 this.state.privacy_follow == 'none' ?
                 <Picker
                   selectedValue={this.state.language}
                   onValueChange={(lang) => this.setState({language: lang})}>
                   <Picker.Item label={this.state.privacy_follow} value="none" />
                   <Picker.Item label="all" value="all" />
                   <Picker.Item label="only friend" value="only friend" />
                </Picker>

                : <Text>Loading...</Text>

              }
            </View>
          </View>

        </View>
        <View>
          <View style={styles.styleView}>
            <View>
              <Text style={styles.text}>Privacy Follow Confirm</Text>
            </View>
            <View style={{ width: 115, justifyContent: 'center' }}>
          { this.state.privacy_follow_confirm == 'only friend' ?
          <Picker
            selectedValue={this.state.languages}
            onValueChange={(langs) => this.setState({languages: langs})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="only friend" />
            <Picker.Item label="all" value="all" />
            <Picker.Item label="none" value="none" />
          </Picker> :

          this.state.privacy_follow_confirm == 'all' ?

          <Picker
            selectedValue={this.state.languages}
            onValueChange={(langs) => this.setState({languages: langs})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="all" />
            <Picker.Item label="only friend" value="only friend" />
            <Picker.Item label="none" value="none" />
          </Picker> :

          this.state.privacy_follow_confirm == 'none' ?
          <Picker
            selectedValue={this.state.languages}
            onValueChange={(langs) => this.setState({languages: langs})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="none" />
            <Picker.Item label="all" value="all" />
            <Picker.Item label="only friend" value="only friend" />
          </Picker>

          : <Text>Loading...</Text>

        }
      </View>
      </View>
      </View>
      <View>
        <View style={styles.styleView}>
          <View>
            <Text style={styles.text}>Privacy Comment</Text>
          </View>
          <View style={{ width: 115, justifyContent: 'center' }}>
          { this.state.privacy_comment == 'only friend' ?
              <Picker
                selectedValue={this.state.language3}
                onValueChange={(lang3) => this.setState({language3: lang3})}>
                <Picker.Item label={this.state.privacy_comment} value="only friend" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_comment == 'all' ?

            <Picker
              selectedValue={this.state.language3}
              onValueChange={(lang3) => this.setState({language3: lang3})}>
              <Picker.Item label={this.state.privacy_comment} value="all" />
              <Picker.Item label="only friend" value="only friend" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_comment == 'none' ?
             <Picker
               selectedValue={this.state.language3}
               onValueChange={(lang3) => this.setState({language3: lang3})}>
               <Picker.Item label={this.state.privacy_comment} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="only friend" value="only friend" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        </View>
        </View>
        <View>
          <View style={styles.styleView}>
            <View>
              <Text style={styles.text}>Privacy Post</Text>
            </View>
            <View style={{ width: 115, justifyContent: 'center' }}>
          { this.state.privacy_post == 'only friend' ?
              <Picker
                selectedValue={this.state.language4}
                onValueChange={(lang4) => this.setState({language4: lang4})}>
                <Picker.Item label={this.state.privacy_post} value="only friend" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_post == 'all' ?

            <Picker
              selectedValue={this.state.language4}
              onValueChange={(lang4) => this.setState({language4: lang4})}>
              <Picker.Item label={this.state.privacy_post} value="all" />
              <Picker.Item label="only friend" value="only friend" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_post == 'none' ?
             <Picker
               selectedValue={this.state.language4}
               onValueChange={(lang4) => this.setState({language4: lang4})}>
               <Picker.Item label={this.state.privacy_post} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="only friend" value="only friend" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        </View>
        </View>
        <View>
          <View style={styles.styleView}>
            <View>
              <Text style={styles.text}>Privacy Timeline Post</Text>
            </View>
            <View style={{ width: 115, justifyContent: 'center' }}>
          { this.state.privacy_timeline_post == 'only friend' ?
              <Picker
                selectedValue={this.state.language5}
                onValueChange={(lang5) => this.setState({language5: lang5})}>
                <Picker.Item label={this.state.privacy_timeline_post} value="only friend" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_timeline_post == 'all' ?

            <Picker
              selectedValue={this.state.language5}
              onValueChange={(lang5) => this.setState({language5: lang5})}>
              <Picker.Item label={this.state.privacy_timeline_post} value="all" />
              <Picker.Item label="only friend" value="only friend" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_timeline_post == 'none' ?
             <Picker
               selectedValue={this.state.language5}
               onValueChange={(lang5) => this.setState({language5: lang5})}>
               <Picker.Item label={this.state.privacy_timeline_post} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="only friend" value="only friend" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        </View>
        </View>
        <View>
          <View style={styles.styleView}>
            <View>
              <Text style={styles.text}>Privacy Message</Text>
            </View>
            <View style={{ width: 115, justifyContent: 'center' }}>
          { this.state.privacy_message == 'only friend' ?
              <Picker
                selectedValue={this.state.language6}
                onValueChange={(lang6) => this.setState({language6: lang6})}>
                <Picker.Item label={this.state.privacy_message} value="only friend" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_message == 'all' ?

            <Picker
              selectedValue={this.state.language6}
              onValueChange={(lang6) => this.setState({language6: lang6})}>
              <Picker.Item label={this.state.privacy_message} value="all" />
              <Picker.Item label="only friend" value="only friend" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_message === 'none' ?
             <Picker
               selectedValue={this.state.language6}
               onValueChange={(lang6) => this.setState({language6: lang6})}>
               <Picker.Item label={this.state.privacy_message} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="only friend" value="only friend" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        </View>
        </View>

        {/* <View>
          <View style={styles.styleView}>
            <View>
              <Text style={styles.text}>Email Follow</Text>
            </View>
            <View style={{ width: 115, justifyContent: 'center' }}>
          { this.state.email_follow == '0' ?
              <Picker
                selectedValue={this.state.language7}
                onValueChange={(lang7) => this.setState({language7: lang7})}>
                <Picker.Item label={this.state.email_follow} value="0" />
                <Picker.Item label="1" value="1" />
             </Picker> :

             this.state.email_follow == '1' ?

            <Picker
              selectedValue={this.state.language7}
              onValueChange={(lang7) => this.setState({language7: lang7})}>
              <Picker.Item label={this.state.email_follow} value="1" />
              <Picker.Item label="0" value="0" />
           </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        </View>
        </View> */}
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    height: 40,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
});
