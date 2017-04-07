import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const dbName = 'FollowingDb';
const dbVersion = '1.0';
const dbDisplayName = 'SQLite Test Database';
const dbSize = 200000;
let db;

const createSchemaDb = (tx) => {
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
            
  tx.executeSql('CREATE TABLE IF NOT EXISTS Setting( '
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
