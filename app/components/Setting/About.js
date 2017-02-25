import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';
import NavigationBar from 'react-native-navbar';
import {Actions} from 'react-native-router-flux';
import IconClose from './../../layouts/IconClose';
const { width, height } = Dimensions.get('window');

export default class ChatView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  render() {
    const rightButtonConfig = {
    title: 'Save',
    handler: () => alert('successfully!'),
  };
    const leftButtonConfig = {
    title: 'Cancel',
    handler: () => Actions.pop(),
  };

  const titleConfig = {
    title: 'Edit Bio',
  };

  return (
    <View>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}/>
      </View>
      <View
               style={{
                 alignItems: 'center',
                 paddingTop: 40,
                 marginLeft: 19,
                 marginRight: 19,
               }}
             >
               <Text
                 style={{
                   fontSize: 18,
                   alignItems: 'flex-start',
                   paddingTop: 8,
                   paddingBottom: 20,
                 }}
               >
               Enter your new bio
               </Text>
               <TextInput
                 style={{
                   height: height * 0.1,
                   width: width * 0.9,
                   paddingTop: 2,
                   color: '#2196f3',
                   borderWidth: 1,
                   fontSize: 16,
                   borderColor: '#2196f3',
                 }}
                 underlineColorAndroid="rgba(0,0,0,0)"
                 placeholderTextColor="#2196f3"
                 placeholder=""
                 multiline={true}
                 numberOfLines={20}
                 editable={true}
                 onChangeText={(text) => this.setState({text})}
                 value={this.state.text}
               />
             </View>
    </View>
  );
  // render() {
  //   return (
  //     <View style={styles.OuterView}>
  //       <ScrollView>
  //         <View
  //           style={{
  //             alignItems: 'center',
  //             paddingTop: 40,
  //             marginLeft: 19,
  //             marginRight: 19,
  //           }}
  //         >
  //           <Text
  //             style={{
  //               fontSize: 18,
  //               alignItems: 'flex-start',
  //               paddingTop: 8,
  //               paddingBottom: 20,
  //             }}
  //           >
  //           Enter your new bio
  //           </Text>
  //           <TextInput
  //             style={{
  //               height: height * 0.3,
  //               width: width * 0.9,
  //               paddingTop: 2,
  //               color: '#2196f3',
  //               borderWidth: 1,
  //               fontSize: 16,
  //               borderColor: '#2196f3',
  //             }}
  //             underlineColorAndroid="rgba(0,0,0,0)"
  //             placeholderTextColor="#2196f3"
  //             placeholder=""
  //             multiline={true}
  //             numberOfLines={20}
  //             editable={true}
  //             onChangeText={(text) => this.setState({text})}
  //             value={this.state.text}
  //           />
  //         </View>
  //       </ScrollView>
  //       <TouchableOpacity onPress={() => console.log('dummy')}>
  //         <View style={styles.View2}>
  //           <Text style={styles.Button}>
  //             SAVE
  //           </Text>
  //         </View>
  //       </TouchableOpacity>
  //     </View>
  //   );
  }
}
