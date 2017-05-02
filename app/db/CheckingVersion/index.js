import SQLite from 'react-native-sqlite-storage';
import createSchema from '../Schema'
const dbName = 'android.db';
const dbVersion = 1.0;
const dbDisplayName = 'SQLite Test Database';

const db = SQLite.openDatabase(dbName, dbDisplayName, 200000)

function failedRoll(error) {


        db.then((tx) => {createSchema(tx)})
        .then((result) => console.log("success create"))
        .catch(err => console.log('Ooops eroor to creaate schema' ,err))
}


function newSchema(err) {
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

/*
    for testing if we have same versionn 
    please comment getChecking first and run apps and open following screen on android
    and comment function below and uncomment getChecking and run , then open screen following on android
    its gonna success create schema
*/
// export default function getTesting(){
//     db.then((tx) => {
//         tx.executeSql(`INSERT INTO Version Values (${dbVersion});`,[],successRoll,newSchema)
//     }).catch((err) => console.log("im sorry error to open db"))
// }

