import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

/*
     * success roll and failed roll are call back for success run sqilte and error callback 
     * create schema db is schema to fill 
*/


 export default async function createSchemaDb(transaction){
    const tx = await transaction

    console.log('CREATE SCHEMA');
    tx.executeSql('DROP TABLE IF EXISTS Relation;');
    tx.executeSql('DROP TABLE IF EXISTS Follower;');
    tx.executeSql('DROP TABLE IF EXISTS Leader;');
    tx.executeSql('DROP TABLE IF EXISTS Setting;');
    tx.executeSql('DROP TABLE IF EXISTS Version;');    
    // Following Table
    tx.executeSql(`CREATE TABLE IF NOT EXISTS Version( id INTEGER );`)
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

};

