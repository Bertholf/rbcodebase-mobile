import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const dbName = 'FollowingDb';
const dbVersion = '1.0';
const dbDisplayName = 'SQLite Test Database';
const dbSize = 200000;
let db;

const saveLeader = (tx, values) => {
  const leader = values.leader;
  tx.executeSql('INSERT INTO Leader '
      + 'VALUES ('
      + `"${leader.name_first}", `
      + `"${leader.name_last}", `
      + `"${leader.name}", `
      + `"${leader.name_slug}"`
      + `"${leader.email}", `
      + `"${leader.cell_number}", `
      + `"${leader.cell_carrier}", `
      + `"${leader.status}", `
      + `"${leader.confirmation_code}", `
      + `"${leader.confirmed}", `
      + `"${leader.verified}", `
      + `"${leader.language}", `
      + `"${leader.date_birth}", `
      + `"${leader.timeline_id}", `
      + `"${leader.img_avatar}", `
      + `"${leader.img_background}", `
      + `"${leader.referring_user_id}", `
      + `"${leader.created_at}", `
      + `"${leader.updated_at}", `
      + `"${leader.deleted_at}", `
      + `"${leader.current_team_id}", `
      + `"${leader.gender}", `
      + `"${leader.picture}", `
      + `"${leader.access_token}", `
      + `"${leader.registered}"`
      + `"${leader.setting.id}" );`);
};

const saveFollower = (tx, values) => {
  const follower = values.follower;
  tx.executeSql('INSERT INTO Follower '
      + 'VALUES ('
      + `"${follower.name_first}", `
      + `"${follower.name_last}", `
      + `"${follower.name}", `
      + `"${follower.name_slug}"`
      + `"${follower.email}", `
      + `"${follower.cell_number}", `
      + `"${follower.cell_carrier}", `
      + `"${follower.status}", `
      + `"${follower.confirmation_code}", `
      + `"${follower.confirmed}", `
      + `"${follower.verified}", `
      + `"${follower.language}", `
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
      + `"${follower.registered}"`
      + `"${follower.setting.id}" );`);
};

const saveRelation = (tx, values) => {
  const data = values;
  tx.executeSql('INSERT INTO Following (id, leader_id, follower_id, status, created_at, updated_at, deleted_at) '
      + 'VALUES ('
      + `"${data.id}", `
      + `"${data.leader_id}", `
      + `"${data.status}", `
      + `"${data.created_at}", `
      + `"${data.updated_at}", `
      + `"${data.deleted_at}" );`);
};

const closedatabase = () => {
  if (db) {
    console.log('Close database');
    db.close().then(() => console.log('database closed'));
  } else {
    console.log('database is not opened');
  }
};

const mapFollowerToDatabase = (tx, res) => {
  const data = res;
  data.map(value => saveFollower(tx, value));
  data.map(value => saveLeader(tx, value));
  data.map(value => saveRelation(tx, value));
};

const createSchemaDb = (tx, res) => {
  tx.executeSql('DROP TABLE IF EXISTS Relation;');
  tx.executeSql('DROP TABLE IF EXISTS Follower;');
  tx.executeSql('DROP TABLE IF EXISTS Leader;');
  tx.executeSql('DROP TABLE IF EXISTS Setting;');

  // Following Table
  tx.executeSql('CREATE TABLE IF NOT EXISTS Following( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'FOREIGN KEYS (leader_id) REFERENCE Leader (id), '
    + 'FOREIGN KEYS (follower_id) REFERENCE Follower (id), '
    + 'status VARCHAR, '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  // Follower table schema
  tx.executeSql('CREATE TABLE IF NOT EXISTS Follower( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'name_first VARCHAR(30), '
    + 'name_last VARCHAR(30), '
    + 'name_display VARCHAR(50), '
    + 'name_slug VARCHAR(20) '
    + 'email VARCHAR(50) '
    + 'cell_number VARCHAR(20) '
    + 'cell_carrier VARCHAR(30) '
    + 'status INTEGER '
    + 'confirmation_code VARCHAR '
    + 'confirmed INTEGER '
    + 'verified INTEGER '
    + 'language VARCHAR(4) '
    + 'timezone VARCHAR(10) '
    + 'date_birth DATE '
    + 'timeline_id INTEGER '
    + 'img_avatar VARCHAR '
    + 'img_background VARCHAR '
    + 'referring_user_id VARCHAR '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + 'current_team_id INTEGER'
    + 'gender VARCHAR(10) '
    + 'picture VARCHAR '
    + 'access_token VARCHAR '
    + 'registered BOOLEAN'
    + 'FOREIGN KEY (setting) REFERENCE Setting (id) '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  // leader table schema
  tx.executeSql('CREATE TABLE IF NOT EXISTS Leader( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'name_first VARCHAR(30), '
    + 'name_last VARCHAR(30), '
    + 'name_display VARCHAR(50), '
    + 'name_slug VARCHAR(20) '
    + 'email VARCHAR(50) '
    + 'cell_number VARCHAR(20) '
    + 'cell_carrier VARCHAR(30) '
    + 'status INTEGER '
    + 'confirmation_code VARCHAR '
    + 'confirmed INTEGER '
    + 'verified INTEGER '
    + 'language VARCHAR(4) '
    + 'timezone VARCHAR(10) '
    + 'date_birth DATE '
    + 'timeline_id INTEGER '
    + 'img_avatar VARCHAR '
    + 'img_background VARCHAR '
    + 'referring_user_id VARCHAR '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + 'current_team_id INTEGER'
    + 'gender VARCHAR(10) '
    + 'picture VARCHAR '
    + 'access_token VARCHAR '
    + 'registered BOOLEAN'
    + 'FOREIGN KEY (setting) REFERENCE Setting (id) '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  // Setting table schema
  tx.executeSql('CREATE TABLE IF NOT EXISTS Follower( '
    + 'id INTEGER PRIMARY KEY NOT NULL, '
    + 'user_id INTEGER, '
    + 'privacy_follow VARCHAR(20) '
    + 'privacy_follow_confirm VARCHAR(20) '
    + 'privacy_follow VARCHAR(20) '
    + 'privacy_comment VARCHAR(20) '
    + 'privacy_post VARCHAR(20) '
    + 'privacy_timeline_post VARCHAR(20) '
    + 'privacy_message VARCHAR(20) '
    + 'email_follow INT '
    + 'email_post_like INT '
    + 'email_post_share INT '
    + 'email_comment_post INT '
    + 'email_comment_like INT '
    + 'email_comment_reply INT '
    + 'created_at DATE, '
    + 'updated_at DATE, '
    + 'deleted_at DATE, '
    + '); ').catch(error => console.log('ERROR CREATE DB', error));

  mapFollowerToDatabase(tx, res);
};

const queryfollowing = (tx) => {
  tx.executeSql('SELECT * FROM Following').then(([tx, result]) => {
    const len = result.rows.length;
    for (let i = 0; i < len; i++) {
      const row = result.rows.item(i);
      console.log(`Number ${i} is row ${row.leader_id}`);
    }
  }).catch(err => console.log(err));
};

const populateDatabase = () => {
  db.executeSql('SELECT 1 FROM Version LIMIT 1').then(() => {
    db.transaction(queryfollowing).then(() => {});
  }).catch((error) => {
    console.log(error);
    db.transaction(createSchemaDb).then(() => {
      closedatabase();
    });
  });
};

const loadAndQuery = () => {
  SQLite.echoTest().then(() => {
    SQLite.openDatabase(dbName, dbVersion, dbDisplayName, -1).then((DB) => {
      db = DB;
      populateDatabase(DB);
    }).catch(error => console.log('ERror', error));
  }).catch(err => console.log('plugin Error', err));
};

export default function runDb() {
  console.log('Load Database');
  loadAndQuery();
}
