import { InteractionManager, AsyncStorage } from 'react-native';
import Realm from 'realm';
import follows from './follows';
import FollowingSchema from './../db/followingSchema';

/**
 * Save Following Data in Realm DB
 */
// let following = new Realm({ schema: [FollowingSchema] });
const arraySample = [0, 1, 32, 432, 453, 23];

let listFollowing = [];

const saveListData = (list) => {
  const followingDb = new Realm({ schema: [FollowingSchema] });
  console.log('Data SAVE');
  followingDb.write(() => {
    followingDb.create('Following', {
      relation_id: list.id,
      follower_id: list.follower_id,
      leader_id: list.leader_id,
      status: list.status,
      created_at: list.created_at,
      updated_at: list.updated_at,
      deleted_at: list.deleted_at,
      follower: {
        id: list.follower.id,
        name_first: list.follower.name_first,
        name_last: list.follower.name_last,
        name_display: list.follower.name_display,
        name_slug: list.follower.name_slug,
        email: list.follower.email,
        cell_number: list.follower.cell_number,
        cell_carrier: list.follower.cell_carrier,
        status: list.follower.status,
        confirmation_code: list.follower.confirmation_code,
        confirmed: list.follower.confirmed,
        verified: list.follower.verified,
        language: list.follower.language,
        timezone: list.follower.timezone,
        date_birth: list.follower.date_birth,
        timeline_id: list.follower.timeline_id,
        img_avatar: list.follower.img_avatar,
        img_background: list.follower.img_background,
        gender: list.follower.gender,
        picture: list.follower.picture,
        access_token: list.follower.access_token,
        registered: list.follower.registered,
        setting: {
          id: list.follower.setting.id,
          user_id: list.follower.setting.user_id,
          privacy_follow: list.follower.setting.privacy_follow,
          privacy_follow_confirm: list.follower.setting.privacy_follow_confirm,
          privacy_comment: list.follower.setting.privacy_comment,
          privacy_post: list.follower.setting.privacy_post,
          privacy_timeline_post: list.follower.setting.privacy_timeline_post,
          privacy_message: list.follower.setting.privacy_message,
          email_follow: list.follower.setting.email_follow,
          email_post_like: list.follower.setting.email_post_like,
          email_post_share: list.follower.setting.email_post_share,
          email_comment_post: list.follower.setting.email_comment_post,
          email_comment_like: list.follower.setting.email_comment_like,
          email_comment_reply: list.follower.setting.email_comment_reply,
          created_at: list.follower.setting.created_at,
          updated_at: list.follower.setting.updated_at,
        },
      },
      leader: {
        id: list.leader.id,
        name_first: list.leader.name_first,
        name_last: list.leader.name_last,
        name_display: list.leader.name_display,
        name_slug: list.leader.name_slug,
        email: list.leader.email,
        cell_number: list.leader.cell_number,
        cell_carrier: list.leader.cell_carrier,
        status: list.leader.status,
        confirmation_code: list.leader.confirmation_code,
        confirmed: list.leader.confirmed,
        verified: list.leader.verified,
        language: list.leader.language,
        timezone: list.leader.timezone,
        date_birth: list.leader.date_birth,
        timeline_id: list.leader.timeline_id,
        img_avatar: list.leader.img_avatar,
        img_background: list.leader.img_background,
        gender: list.leader.gender,
        picture: list.leader.picture,
        access_token: list.leader.access_token,
        registered: list.leader.registered,
        setting: {
          id: list.leader.setting.id,
          user_id: list.leader.setting.user_id,
          privacy_follow: list.leader.setting.privacy_follow,
          privacy_follow_confirm: list.leader.setting.privacy_follow_confirm,
          privacy_comment: list.leader.setting.privacy_comment,
          privacy_post: list.leader.setting.privacy_post,
          privacy_timeline_post: list.leader.setting.privacy_timeline_post,
          privacy_message: list.leader.setting.privacy_message,
          email_follow: list.leader.setting.email_follow,
          email_post_like: list.leader.setting.email_post_like,
          email_post_share: list.leader.setting.email_post_share,
          email_comment_post: list.leader.setting.email_comment_post,
          email_comment_like: list.leader.setting.email_comment_like,
          email_comment_reply: list.leader.setting.email_comment_reply,
          created_at: list.leader.setting.created_at,
          updated_at: list.leader.setting.updated_at,
        },
      },
    });
  });
};

const getFollowingList = () => {
  AsyncStorage.getItem('userId')
  .then((id) => {
    follows.searchFollowing('', id)
    .then((res) => {
      listFollowing = res.data;
      listFollowing.map((i) => saveListData(i));
    }).catch(err => console.log('Error Fetching', err));
  }).catch();
};


const FollowingScheduler = () => {
  getFollowingList();
  InteractionManager.runAfterInteractions(() => {
    setInterval(() => getFollowingList(), 36000);
  });
};

module.exports = FollowingScheduler;
