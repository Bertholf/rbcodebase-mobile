// import React, { Component } from 'react';
// import {
//    ListView,
//    View,
//    StyleSheet,
//    Image,
//    Text,
//    TouchableOpacity,
// } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import styles from './ProfileStyle';
// const imgLike = require('./../../../images/ic_thumb_up_black_18dp.png');
// const imgUnLike = require('./../../../images/ic_thumb_down_black_18dp.png');

// export default class ProfilePost extends Component{
//    constructor(props) {
//     super(props);
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       loading: true,
//       list: {},
//       onPress: true,
//       dataSource: ds.cloneWithRows(this.props.data),
//     };
//   }
//   onChangeImg() {
//     this.setState({
//       onPress: !this.state.onPress,
//     });
//   }
//   gotoDetail(dataPost) {
//     Actions.timelineDetail(dataPost);
//   }

//   renderRow = (rowData) => {
//       return (
//         <View style={styles.container}>
//           <View style={styles.timelineContainer}>
//             <View style={styles.about}>
//               <TouchableOpacity onPress={Actions.profile}activeOpacity={0.7}>
//                 <Image
//                   source={this.props.profileImage}
//                   style={styles.avatarImg}
//                 />
//               </TouchableOpacity>
//               <View style={styles.textAboutContainer}>
//                 <Text style={styles.textNameProfile}>{this.props.name}</Text>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', padding:10 }}>
                  
//                   <Text style={styles.textDay}>Mount {rowData.mountain}</Text>
//                 </View>
//               </View>
//             </View>
//             <View style={styles.statusContainer}>
//               <TouchableOpacity
//                 onPress={() => this.gotoDetail()}
//                 activeOpacity={0.7}
//               >
//                 <Text style={styles.textStatus}>
//                   {rowData.postStatus}
//                 </Text>

//                 <Image source={rowData.imagePost} style={{ height: 183, justifyContent: 'center' }} />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.mapContainer}>
//               <View style={styles.commentsCountContainer}></View>
//               <View style={styles.commentContainer}>
//                   <TouchableOpacity
//                       onPress={() => this.onChangeImg()}
//                       style={{ flexDirection: 'row', alignItems: 'center' }}
//                       activeOpacity={0.7}
//                   >
//                       <Image
//                       source={this.state.onPress ? imgLike : imgUnLike}
//                       style={{ marginRight: 10, height: 15, width: 15 }}
//                       />
//                       <Text>{this.state.onPress ? 'Like' : 'Unlike'}</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                       onPress={Actions.timelineDetail}
//                       style={{ flexDirection: 'row', alignItems: 'center' }}
//                       activeOpacity={0.7}
//                   >
//                       <Text>{rowData.comment}{{ }}Comment</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                       onPress={Actions.timelineshare}
//                       style={{ flexDirection: 'row', alignItems: 'center' }}
//                       activeOpacity={0.7}
//                   >
                      
//                       <Text>Share</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//       )     
//   }

//   render() {
  
//         return (
//           <View>
//             <ListView
//               dataSource={this.state.dataSource}
//               renderRow={this.renderRow}
//             />
//           </View>
//         )
         
      
//   }

// }

// module.exports = ProfilePost;
