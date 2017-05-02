import SQLite from 'react-native-sqlite-storage';
import createSchema from '../Schema'
const dbName = 'android.db';
const dbVersion = 1.0;
const dbDisplayName = 'SQLite Test Database';

const db = SQLite.openDatabase(dbName, dbDisplayName, 200000)

function failedRoll(error) {

    // alert("eroorrr")
        db.then((tx) => {createSchema(tx)})
        .then((result) => console.log("success create"))
        .catch(err => console.log('Ooops eroor to creaate schema' ,err))
}


function newSchema() {
   console.log("succes create new schema") 
}


function successRoll() {
    console.log("db version is match ")
}

export default function getChecking(){
    db.then((tx) => {
        tx.executeSql(`SELECT * FROM Version WHERE id = ${dbVersion}`,[],successRoll,failedRoll)
    }).catch((err) => console.log("im sorry error to open db"))
}

