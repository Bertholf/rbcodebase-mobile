import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import chatServices from '../../../services/Chat';
import styles from './style';

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading: true,
      chat: [],
    };
  }
  componentDidMount() {
    // chatServices.getChat()
    // .then((data) => {
    //   this.setState({ chat: data, loading: false });
    //   console.log(this.state);
    // })
    // .catch(err => console.log(err));
  }
  render() {
    if (this.state.loading === false) {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView style={styles.list}>
            <View style={styles.container}>
              {
              this.state.chat.map((chat, i) => {
                return (<View style={(i % 2 === 0 ? { alignItems: 'flex-end' } : {})}>
                  <View style={styles.body}>
                    {i % 2 === 0 ? (
                      <View style={styles.body}><View style={styles.bodyChat}>
                        <Text style={styles.username}>{chat.user}</Text>
                        <Text style={styles.txtChat}>{chat.textChat}</Text>
                        <Text style={styles.date}>{chat.dateChat}</Text>
                      </View>
                        <Image style={styles.imgUser} source={{ uri: chat.avatarChat }} />
                      </View>
                      ) : (
                        <View style={styles.body}>
                          <Image style={styles.imgUser} source={{ uri: chat.avatarChat }} />
                          <View style={styles.bodyChat}>
                            <Text style={styles.username}>{chat.user}</Text>
                            <Text style={styles.txtChat}>{chat.textChat}</Text>
                            <Text style={styles.date}>{chat.dateChat}</Text>
                          </View></View>
                  ) }
                  </View>
                  <View style={styles.view} />
                </View>);
              })
            }
            </View>
          </ScrollView>
          <View style={{ backgroundColor: '#fff', borderColor: '#2196f3', borderWidth: 0.5, margin: 5, flexDirection: 'row' }}>
            <View style={{ flex: 4 }}>
              <TextInput
                style={styles.TextInput}
                numberOfLines={2}
                placeholder="Type a message..."
                underlineColorAndroid="#2196f3"
                placeholderTextColor="#2196f3"
              />
            </View>
            <View style={{ backgroundColor: '#2196f3', borderRadius: 2, paddingLeft: 4, paddingRight: 4, justifyContent: 'center' }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.onSendMessage()}
              >
                <Text
                  style={styles.TextSend}
                >
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
  }
