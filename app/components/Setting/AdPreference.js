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

export default class AdPreference extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adprefe: {},
      partner: 'choose partner',
      selected1: 'key1',
      selected2: 'key1',
      selected3: 'key1',
      language: ""
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

  render() {
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
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="everyone" />
            <Picker.Item label="all" value="all" />
            <Picker.Item label="none" value="none" />
          </Picker> :

          this.state.privacy_follow_confirm == 'all' ?

          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="all" />
            <Picker.Item label="everyone" value="everyone" />
            <Picker.Item label="none" value="none" />
          </Picker> :

          this.state.privacy_follow_confirm == 'none' ?
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label={this.state.privacy_follow_confirm} value="none" />
            <Picker.Item label="all" value="all" />
            <Picker.Item label="everyone" value="everyone" />
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
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label={this.state.privacy_comment} value="everyone" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_comment == 'all' ?

            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label={this.state.privacy_comment} value="all" />
              <Picker.Item label="everyone" value="everyone" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_comment == 'none' ?
             <Picker
               selectedValue={this.state.language}
               onValueChange={(lang) => this.setState({language: lang})}>
               <Picker.Item label={this.state.privacy_comment} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="everyone" value="everyone" />
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
          { this.state.privacy_follow_confirm == 'everyone' ?
              <Picker
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label={this.state.privacy_follow_confirm} value="everyone" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_follow_confirm == 'all' ?

            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label={this.state.privacy_follow_confirm} value="all" />
              <Picker.Item label="everyone" value="everyone" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_follow_confirm == 'none' ?
             <Picker
               selectedValue={this.state.language}
               onValueChange={(lang) => this.setState({language: lang})}>
               <Picker.Item label={this.state.privacy_follow_confirm} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="everyone" value="everyone" />
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
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label={this.state.privacy_timeline_post} value="everyone" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_timeline_post == 'all' ?

            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label={this.state.privacy_timeline_post} value="all" />
              <Picker.Item label="everyone" value="everyone" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_timeline_post == 'none' ?
             <Picker
               selectedValue={this.state.language}
               onValueChange={(lang) => this.setState({language: lang})}>
               <Picker.Item label={this.state.privacy_timeline_post} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="everyone" value="everyone" />
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
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>
                <Picker.Item label={this.state.privacy_message} value="everyone" />
                <Picker.Item label="all" value="all" />
                <Picker.Item label="none" value="none" />
             </Picker> :

             this.state.privacy_message == 'all' ?

            <Picker
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label={this.state.privacy_message} value="all" />
              <Picker.Item label="everyone" value="everyone" />
              <Picker.Item label="none" value="none" />
           </Picker> :

             this.state.privacy_message == 'none' ?
             <Picker
               selectedValue={this.state.language}
               onValueChange={(lang) => this.setState({language: lang})}>
               <Picker.Item label={this.state.privacy_message} value="none" />
               <Picker.Item label="all" value="all" />
               <Picker.Item label="everyone" value="everyone" />
            </Picker>

            : <Text>Loading...</Text>

          }
        </View>
        <View style={{ marginTop: 20, padding: 14 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton} >Tekan</Text>
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
