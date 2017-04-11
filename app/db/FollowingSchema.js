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
let array = [];

const saveLeader = (tx, values) => {
  console.log('GO TO saveleader', values);
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
  console.log('GO TO savefollower');
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
  console.log('GO TO SAVE RELATION', values);
  const data = values;
  tx.executeSql('INSERT INTO Following '
      + 'VALUES ('
      + `${data.id}, `
      + `${data.leader_id}, `
      + `"${data.status}", `
      + `"${data.created_at}", `
      + `"${data.updated_at}", `
      + `"${data.deleted_at}" );`);
};

export function closedatabase() {
  console.log('GO to CLOSE DB');
  if (db) {
    console.log('Close database');
    db.close().then(() => console.log('database closed'));
  } else {
    console.log('database is not opened');
  }
}

async function getData() {
  const id = await AsyncStorage.getItem('userId');
  const follow = await follows.searchFollowing('', id);
  return follow;
}

const mapFollowerToDatabase = (tx, res) => {
  // const test = apa => apa;
  const what = getData().then(resp => resp);
  array = what.data;

  tx.executeSql(`INSERT INTO Following Values ${res};`);
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

  // const what = await getData().then(resp => resp);
  // array = what.data;
  const arrayC = [
    { id: 1, fol: 231, lead: 523 }, { id: 2, fol: 231, lead: 523 }, { id: 3, fol: 231, lead: 523 }
  ];
  let structure = '';
  await arrayC.map(i => structure += `(${i.id}, 231, 323, "a", "2017-03-03", "2017-03-03", "2017-03-03"), `);
  // console.log('HAS A DATAAAAAAAAAAAAAAAA=====', array);

  const struct = structure.substring(0, structure.length - 2);
  console.log('structure nyaaaa====', struct);

  // closedatabase();
  mapFollowerToDatabase(tx, struct);
};

const queryfollowing = (tx) => {
  console.log('QUEWRY FOLLOWING');
  tx.executeSql('SELECT * FROM Following ORDER BY id').then(([tx, result]) => {
    const len = result.rows.length;
    for (let i = 0; i < len; i++) {
      const row = result.rows.item(i);
      console.log(`Number ${i} is row ${row.leader_id}`);
    }
  }).catch(() => closedatabase());
};

const populateDatabase = (db) => {
  console.log('POPULATE DATABASE');
  db.executeSql('SELECT * FROM Version LIMIT 1').then(() => {
    db.transaction(queryfollowing).then(() => {
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
  deleteDatabase();
  console.log('======Load Database');
  loadAndQuery();
}

