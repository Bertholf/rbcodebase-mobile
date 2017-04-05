// import { InteractionManager, AsyncStorage } from 'react-native';
// import Realm from 'realm';
// import moment from 'moment';
// import follows from './follows';
// import FollowingSchema from './../db/following/followingSchema';
// import FollowerSchema from './../db/following/followerSchema';
// import SettingSchema from './../db/following/settingSchema';
// import LeaderSchema from './../db/following/leaderSchema';

// /**
//  * Save Following Data in Realm DB
//  */
// // let following = new Realm({ schema: [FollowingSchema] });

// let listFollowing = [];
// const followingDb = new Realm({
//   schema: [FollowingSchema, FollowerSchema, SettingSchema, LeaderSchema],
// });

// const saveListData = (list) => {
//   // initiate value for setting and leader setting
//   const setting = list.follower.setting;
//   const leader = list.leader;
//   const leaderSetting = list.leader.setting;

//   const nullDate = (val) => {
//     let emptyValue = 'null';
//     if (val === null || typeof val === 'undefined') {
//       emptyValue = moment('1991-01-01', 'YYYY-MM-DD').toDate();
//       return emptyValue;
//     }
//     return moment(val, 'YYYY-MM-DD').toDate();
//   };

//   const nullValue = (val) => {
//     // return String 'null' or 'undefined'
//     let emptyValue = 'null';
//     if (val === null || typeof val === 'undefined') {
//       emptyValue = 'null';
//       return emptyValue;
//     }
//     emptyValue = String(list.follower.display);
//     // return val
//     return emptyValue;
//   };
//   /**
//    * Start to Write the Database
//    */
//   followingDb.write(() => {
//     // Writing the Database
//     followingDb.create('Following', {
//       // Create new object
//       relation_id: list.id,
//       follower_id: list.follower_id,
//       leader_id: list.leader_id,
//       status: list.status,
//       created_at: list.created_at.toString(),
//       updated_at: list.updated_at.toString(),
//       deleted_at: list.updated_at.toString(),
//       follower: {
//         // create follower data
//         id: list.follower.id,
//         name_first: list.follower.name_first.toString(),
//         name_last: list.follower.name_last.toString(),
//         name_display: nullValue(list.follower.name_display),
//         name_slug: list.follower.name_slug.toString(),
//         email: list.follower.email.toString(),
//         cell_number: nullValue(leader.cell_number),
//         cell_carrier: nullValue(list.follower.cell_carrier),
//         status: list.follower.status,
//         confirmation_code: list.follower.confirmation_code.toString(),
//         confirmed: list.follower.confirmed,
//         verified: list.follower.verified,
//         language: list.follower.language,
//         timezone: list.follower.timezone,
//         date_birth: nullDate(list.follower.date_birth),
//         timeline_id: list.follower.timeline_id,
//         img_avatar: nullValue(list.follower.img_avatar),
//         img_background: nullValue(list.follower.img_background),
//         reffering_id_user: nullValue(list.follower.reffering_id_user),
//         gender: list.follower.gender,
//         picture: nullValue(list.follower.picture),
//         access_token: nullValue(list.follower.access_token),
//         registered: Boolean(list.follower.registered),
//         setting: {
//           // Create follower's setting data
//           id: setting.id,
//           user_id: setting.user_id,
//           privacy_follow: setting.privacy_follow,
//           privacy_follow_confirm: setting.privacy_follow_confirm,
//           privacy_comment: setting.privacy_comment,
//           privacy_post: setting.privacy_post,
//           privacy_timeline_post: setting.privacy_timeline_post,
//           privacy_message: setting.privacy_message,
//           email_follow: setting.email_follow,
//           email_post_like: setting.email_post_like,
//           email_post_share: setting.email_post_share,
//           email_comment_post: setting.email_comment_post,
//           email_comment_like: setting.email_comment_like,
//           email_comment_reply: setting.email_comment_reply,
//           created_at: moment(setting.created_at, 'YYYY-MM-DD').toDate(),
//           updated_at: moment(setting.updated_at, 'YYYY-MM-DD').toDate(),
//         },
//       },
//       leader: {
//         id: leader.id,
//         name_first: leader.name_first,
//         name_last: leader.name_last,
//         name_display: nullValue(leader.name_display),
//         name_slug: leader.name_slug,
//         email: leader.email,
//         cell_number: nullValue(leader.cell_number),
//         cell_carrier: nullValue(leader.cell_carrier),
//         status: leader.status,
//         confirmation_code: leader.confirmation_code,
//         confirmed: leader.confirmed,
//         verified: leader.verified,
//         language: leader.language,
//         timezone: leader.timezone,
//         date_birth: nullDate(leader.date_birth),
//         timeline_id: leader.timeline_id,
//         img_avatar: nullValue(leader.img_avatar),
//         img_background: nullValue(leader.img_background),
//         gender: leader.gender,
//         picture: nullValue(leader.picture),
//         access_token: nullValue(leader.access_token),
//         registered: Boolean(leader.registered),
//         setting: {
//       // Create follower's setting data
//           id: leaderSetting.id,
//           user_id: leaderSetting.user_id,
//           privacy_follow: leaderSetting.privacy_follow,
//           privacy_follow_confirm: leaderSetting.privacy_follow_confirm,
//           privacy_comment: leaderSetting.privacy_comment,
//           privacy_post: leaderSetting.privacy_post,
//           privacy_timeline_post: leaderSetting.privacy_timeline_post,
//           privacy_message: leaderSetting.privacy_message,
//           email_follow: leaderSetting.email_follow,
//           email_post_like: leaderSetting.email_post_like,
//           email_post_share: leaderSetting.email_post_share,
//           email_comment_post: leaderSetting.email_comment_post,
//           email_comment_like: leaderSetting.email_comment_like,
//           email_comment_reply: leaderSetting.email_comment_reply,
//           created_at: moment(leaderSetting.created_at, 'YYYY-MM-DD').toDate(),
//           updated_at: moment(leaderSetting.updated_at, 'YYYY-MM-DD').toDate(),
//         },
//       },
//     }, true);
//   });
// };

// const getFollowingList = () => {
//   AsyncStorage.getItem('userId')
//   .then((id) => {
//     follows.searchFollowing('', id)
//     .then((res) => {
//       console.log('Response SERVER ================', res);
//       listFollowing = res.data;
//       listFollowing.map(i => saveListData(i));
//     }).catch(err => console.log('Error Fetching', err));
//   }).catch();
// };


// const FollowingScheduler = () => {
//   getFollowingList();
//   const database = followingDb.objects('Following').filtered('leader.name_first = "" OR leader.name_last = "a" OR leader.email = ""'); // Retrieve all data into database variable
//   console.log('DATABASE VIEW FOLLOWING', database);
// };

// module.exports = FollowingScheduler;
