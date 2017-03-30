import { InteractionManager, AsyncStorage } from 'react-native';
import Realm from 'realm';
import moment from 'moment';
import follows from './follows';
import FollowingSchema from './../db/following/followingSchema';
import FollowerSchema from './../db/following/followerSchema';
import SettingSchema from './../db/following/settingSchema';

/**
 * Save Following Data in Realm DB
 */
// let following = new Realm({ schema: [FollowingSchema] });
const arraySample = [0, 1, 32, 432, 453, 23];

let listFollowing = [];

const saveListData = (list) => {
  const followingDb = new Realm({ schema: [FollowingSchema, FollowerSchema] });
  const database = followingDb.objects('Following');


  const nullValue = (val) => {
    let emptyValue = 'null';
    if (val === null || typeof val === 'undefined') {
      emptyValue = 'null';
      return emptyValue;
    }
    emptyValue = String(list.follower.display);
    return emptyValue;
  };

  console.log('THIS IS DATABASE VIEW', database);
  followingDb.write(() => {
    followingDb.create('Following', {
      relation_id: list.id,
      follower_id: list.follower_id,
      leader_id: list.leader_id,
      status: list.status,
      created_at: list.created_at.toString(),
      updated_at: list.updated_at.toString(),
      deleted_at: list.updated_at.toString(),
      follower: {
        id: list.follower.id,
        name_first: list.follower.name_first.toString(),
        name_last: list.follower.name_last.toString(),
        name_display: nullValue(list.follower.name_display),
        name_slug: list.follower.name_slug.toString(),
        email: list.follower.email.toString(),
        cell_number: list.follower.cell_number.toString(),
        cell_carrier: nullValue(list.follower.cell_carrier),
        status: list.follower.status,
        confirmation_code: list.follower.confirmation_code.toString(),
        confirmed: list.follower.confirmed,
        verified: list.follower.verified,
        language: list.follower.language,
        timezone: list.follower.timezone,
        date_birth: moment(list.follower.date_birth, 'YYYY-MM-DD').toDate(),
        timeline_id: list.follower.timeline_id,
        // img_avatar: { type: 'string', default: null },
        // img_background: { type: 'string', default: null },
        // gender: { type: 'string', default: 'male' },
        // picture: 'string',
        // access_token: { type: 'string', default: null },
        // registered: { type: 'bool', default: null },
        // setting: 'string',
      },
      // leader: {},
    }, true);
  });
};

const getFollowingList = () => {
  AsyncStorage.getItem('userId')
  .then((id) => {
    follows.searchFollowing('', id)
    .then((res) => {
      console.log('RESPONSE FRIENDLIST', res);
      listFollowing = res.data;
      listFollowing.map(i => saveListData(i));
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
