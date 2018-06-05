const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
    // serverUrl: "mongodb://localhost:27017/",
    serverUrl: "mongodb://SimonDing:7223706Dy@ds016718.mlab.com:16718/us-presidents-database",
    database: "us-presidents-database"
  }
};
const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};