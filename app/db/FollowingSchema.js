import SQLite from 'react-native-sqlite-storage';
import { AsyncStorage } from 'react-native';
import follows from '../services/follows';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const dbName = 'FollowingDb';
const dbVersion = '1.0';
const dbDisplayName = 'SQLite Test Database';
const dbSize = 200000;
let db;

export function closedatabase() {
  console.log('GO to CLOSE DB');
  if (db) {
    console.log('Close database');
    db.close().then(() => console.log('database closed'));
  } else {
    console.log('database is not opened');
  }
}

// Return async data or promise to be inserted to the database
async function getData() {
  const id = await AsyncStorage.getItem('userId');
  const follow = await follows.searchFollowing('', id);
  return follow;
}

const mapFollowerToDatabase = (tx) => {
  // get Data Following
  getData().then(async (resp) => {
    console.log(resp);
    const arraysFollowing = await resp.data;
    // const arraysLeader = resp.data.leader;
    const follower = arraysFollowing[0].follower;

    // console.log('follower', follower);

    console.log('LEADER');
    let structureFollowing = '';
    let structureLeader = '';
    let structureFollower = '';
    let structureSettingLeader = '';
    let structureSettingFollower = '';

    // Maping Data into String Value
    await arraysFollowing.map(i => structureFollowing += `(${i.id}, ${i.leader_id}, ${i.follower_id}, "${i.status}", "${i.created_at}", "${i.updated_at}", "${i.deleted_at}"), `);

    await arraysFollowing.map(i => structureLeader += `(${i.leader.id}, "${i.leader.name_first}", `
      + `"${i.leader.name_last}", `
      + `"${i.leader.name}", `
      + `"${i.leader.name_slug}", `
      + `"${i.leader.email}", `
      + `"${i.leader.cell_number}", `
      + `"${i.leader.cell_carrier}", `
      + `"${i.leader.status}", `
      + `"${i.leader.confirmation_code}", `
      + `"${i.leader.confirmed}", `
      + `"${i.leader.verified}", `
      + `"${i.leader.language}", `
      + `"${i.leader.timezone}", `
      + `"${i.leader.date_birth}", `
      + `"${i.leader.timeline_id}", `
      + `"${i.leader.img_avatar}", `
      + `"${i.leader.img_background}", `
      + `"${i.leader.referring_user_id}", `
      + `"${i.leader.created_at}", `
      + `"${i.leader.updated_at}", `
      + `"${i.leader.deleted_at}", `
      + `"${i.leader.current_team_id}", `
      + `"${i.leader.gender}", `
      + `"${i.leader.picture}", `
      + `"${i.leader.access_token}", `
      + `"${i.leader.registered}",`
      + `"${i.leader.setting.id}"`
      + '), ');


    structureFollower = `(${follower.id}, "${follower.name_first}", `
      + `"${follower.name_last}", `
      + `"${follower.name_display}", `
      + `"${follower.name_slug}", `
      + `"${follower.email}", `
      + `"${follower.cell_number}", `
      + `"${follower.cell_carrier}", `
      + `"${follower.status}", `
      + `"${follower.confirmation_code}", `
      + `"${follower.confirmed}", `
      + `"${follower.verified}", `
      + `"${follower.language}", `
      + `"${follower.timezone}", `
      + `"${follower.date_birth}", `
      + `"${follower.timeline_id}", `
      + `"${follower.img_avatar}", `
      + `"${follower.img_background}", `
      + `"${follower.referring_user_id}", `
      + `"${follower.created_at}", `
      + `"${follower.updated_at}", `
      + `"${follower.deleted_at}", `
      + `"${follower.current_team_id}", `
      + `"${follower.gender}", `
      + `"${follower.picture}", `
      + `"${follower.access_token}", `
      + `"${follower.registered}", `
      + `"${follower.setting.id}"`
      + '), ';

    arraysFollowing.map(i =>
      structureSettingLeader += '('
      + `"${i.leader.setting.id}", `
      + `"${i.leader.setting.user_id}", `
      + `"${i.leader.setting.privacy_follow}", `
      + `"${i.leader.setting.privacy_follow_confirm}", `
      + `"${i.leader.setting.privacy_comment}", `
      + `"${i.leader.setting.privacy_post}", `
      + `"${i.leader.setting.privacy_timeline_post}", `
      + `"${i.leader.setting.privacy_message}", `
      + `"${i.leader.setting.email_follow}", `
      + `"${i.leader.setting.email_post_like}", `
      + `"${i.leader.setting.email_post_share}", `
      + `"${i.leader.setting.email_comment_post}", `
      + `"${i.leader.setting.email_comment_like}", `
      + `"${i.leader.setting.email_comment_reply}", `
      + `"${i.leader.setting.created_at}", `
      + `"${i.leader.setting.updated_at}", `
      + `"${i.leader.setting.deleted_at}"), `,
    );

    structureSettingFollower = '('
      + `"${follower.setting.id}", `
      + `"${follower.setting.user_id}", `
      + `"${follower.setting.privacy_follow}", `
      + `"${follower.setting.privacy_follow_confirm}", `
      + `"${follower.setting.privacy_comment}", `
      + `"${follower.setting.privacy_post}", `
      + `"${follower.setting.privacy_timeline_post}", `
      + `"${follower.setting.privacy_message}", `
      + `"${follower.setting.email_follow}", `
      + `"${follower.setting.email_post_like}", `
      + `"${follower.setting.email_post_share}", `
      + `"${follower.setting.email_comment_post}", `
      + `"${follower.setting.email_comment_like}", `
      + `"${follower.setting.email_comment_reply}", `
      + `"${follower.setting.created_at}", `
      + `"${follower.setting.updated_at}", `
      + `"${follower.setting.deleted_at}"), `;

    // Finalize string construction with deleted last comma
    const structFollowing = structureFollowing.substring(0, structureFollowing.length - 2);
    const structFollower = structureFollower.substring(0, structureFollower.length - 2);
    const structLeader = structureLeader.substring(0, structureLeader.length - 2);
    const structSettingLeader = structureSettingLeader.substring(0, structureSettingLeader.length - 2);
    const structSettingFollower = structureSettingFollower.substring(0, structureSettingFollower.length - 2);
    console.log('structure LEADER nyaaaa====', structLeader);


    // Send Data
    SQLite.openDatabase(dbName, dbVersion, dbDisplayName, -1).then((ds) => {
      ds.executeSql(`INSERT INTO Following Values ${structFollowing};`);
      ds.executeSql(`INSERT INTO Leader Values ${structLeader};`);
      ds.executeSql(`INSERT INTO Follower Values ${structFollower};`);
      ds.executeSql(`INSERT INTO Setting Values ${structSettingLeader}, ${structSettingFollower};`);
    }).catch(err => console.log(err));
    // mapFollowerToDatabase(tx, struct);
  });
};

const createSchemaDb = async (tx) => {
  console.log('CREATE SCHEMA');
  tx.executeSql('DROP TABLE IF EXISTS Relation;');
  tx.executeSql('DROP TABLE IF EXISTS Follower;');
  tx.executeSql('DROP TABLE IF EXISTS Leader;');
  tx.executeSql('DROP TABLE IF EXISTS Setting;');

  tx.executeSql('CREATE TABLE IF NOT EXISTS Version( '
    + 'version_id INTEGER PRIMARY KEY NOT NULL); ').catch((error) => {
      console.log('ERROR FOUND, ', error);
    });

  // Following Table
  tx.executeSql('CREATE TABLE IF NOT EXISTS Following( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'leader_id INTEGER, '
    + 'follower_id INTEGER, '
    + 'status VARCHAR, '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + 'FOREIGN KEY ( leader_id ) REFERENCES Leader ( id ) '
    + 'FOREIGN KEY ( follower_id ) REFERENCES Follower ( id )'
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  // Follower table schema
  tx.executeSql('CREATE TABLE IF NOT EXISTS Follower( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'name_first VARCHAR(30), '
    + 'name_last VARCHAR(30), '
    + 'name_display VARCHAR(50), '
    + 'name_slug VARCHAR(20), '
    + 'email VARCHAR(50), '
    + 'cell_number VARCHAR(20), '
    + 'cell_carrier VARCHAR(30), '
    + 'status INTEGER, '
    + 'confirmation_code VARCHAR, '
    + 'confirmed INTEGER, '
    + 'verified INTEGER, '
    + 'language VARCHAR(4), '
    + 'timezone VARCHAR(10), '
    + 'date_birth DATE, '
    + 'timeline_id INTEGER, '
    + 'img_avatar VARCHAR, '
    + 'img_background VARCHAR, '
    + 'referring_user_id VARCHAR, '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + 'current_team_id INTEGER, '
    + 'gender VARCHAR(10), '
    + 'picture VARCHAR, '
    + 'access_token VARCHAR, '
    + 'registered BOOLEAN, '
    + 'setting INTEGER, '
    + 'FOREIGN KEY ( setting ) REFERENCES Setting ( id ) '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  // leader table schema
  tx.executeSql('CREATE TABLE IF NOT EXISTS Leader( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'name_first VARCHAR(30), '
    + 'name_last VARCHAR(30), '
    + 'name_display VARCHAR(50), '
    + 'name_slug VARCHAR(20), '
    + 'email VARCHAR(50), '
    + 'cell_number VARCHAR(20), '
    + 'cell_carrier VARCHAR(30) ,'
    + 'status INTEGER, '
    + 'confirmation_code VARCHAR, '
    + 'confirmed INTEGER, '
    + 'verified INTEGER, '
    + 'language VARCHAR(4), '
    + 'timezone VARCHAR(10), '
    + 'date_birth DATE,'
    + 'timeline_id INTEGER, '
    + 'img_avatar VARCHAR, '
    + 'img_background VARCHAR, '
    + 'referring_user_id VARCHAR, '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + 'current_team_id INTEGER, '
    + 'gender VARCHAR(10), '
    + 'picture VARCHAR, '
    + 'access_token VARCHAR, '
    + 'registered BOOLEAN, '
    + 'setting INTEGER, '
    + 'FOREIGN KEY ( setting ) REFERENCES Setting ( id ) '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  // Setting table schema
  tx.executeSql('CREATE TABLE IF NOT EXISTS Setting( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'user_id INTEGER, '
    + 'privacy_follow VARCHAR(20), '
    + 'privacy_follow_confirm VARCHAR(20), '
    + 'privacy_comment VARCHAR(20), '
    + 'privacy_post VARCHAR(20), '
    + 'privacy_timeline_post VARCHAR(20), '
    + 'privacy_message VARCHAR(20), '
    + 'email_follow INT, '
    + 'email_post_like INT, '
    + 'email_post_share INT, '
    + 'email_comment_post INT, '
    + 'email_comment_like INT, '
    + 'email_comment_reply INT, '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  mapFollowerToDatabase();
};

const queryfollowing = (tx) => {
  console.log('QUEWRY FOLLOWING');
  tx.executeSql('SELECT * FROM Following ORDER BY id').then(([tx, result]) => {
    const len = result.rows.length;
    for (let i = 0; i < len; i++) {
      const row = result.rows.item(i);
      console.log(`Number ${i} is row ${row.id}`);
    }
  }).catch(() => closedatabase());
};

const populateDatabase = (db) => {
  console.log('POPULATE DATABASE');
  db.executeSql('SELECT * FROM Version LIMIT 1').then(() => {
    db.transaction(queryfollowing).then(() => {
      closedatabase();
    });
  }).catch((error) => {
    console.log(error);
    db.transaction(createSchemaDb).then((res) => {
      console.log(res);
    });
  });
};

const loadAndQuery = () => {
  console.log('LOAD QUERY DATABASE');
  SQLite.echoTest().then(() => {
    SQLite.openDatabase(dbName, dbVersion, dbDisplayName, -1).then((DB) => {
      db = DB;
      populateDatabase(DB);
    }).catch(error => console.log('ERror to load query', error));
  }).catch();
};

const deleteDatabase = () => {
  SQLite.deleteDatabase(dbName).then(() => {
    console.log('Database DELETED');
  }).catch((error) => {
    console.log(error);
  });
};

export default function runDb() {
  console.log('======Delete database');
  // deleteDatabase();
  console.log('======Load Database');
  loadAndQuery();
}

