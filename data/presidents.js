const mongoCollections = require("../config/mongoCollections");
const presidents = mongoCollections.presidents;

let exportedMethods = {
  getAllPresidents() {
    return presidents().then(presidentCollection => {
      return presidentCollection.find({}).toArray();
    });
  },
  getAllPresidentsInAscending() {
    return presidents().then(presidentCollection => {
      return presidentCollection.find({}).sort({President: 1}).toArray();
    });
  },
  getAllPresidentsInDescending() {
    return presidents().then(presidentCollection => {
      return presidentCollection.find({}).sort({President: -1}).toArray();
    }); 
  }
};

module.exports = exportedMethods;