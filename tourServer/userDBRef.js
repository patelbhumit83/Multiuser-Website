const DataStore = require('nedb-promises');
let userDB = DataStore.create(__dirname + '/usersDB');
module.exports = userDB;
