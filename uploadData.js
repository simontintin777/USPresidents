// save data to mongodb
const mongoCollections = require("./config/mongoCollections");
const presidents = mongoCollections.presidents;
const fs = require('fs');

fs.readFile('cleanedPresidents.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    var json = JSON.parse(data);

    presidents().then(presidentCollection => {
        presidentCollection.insert(json, function(err, doc) {
        console.log(data);
        if(err) throw err;
        });
    })
});