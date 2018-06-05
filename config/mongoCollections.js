const dbConnection = require("./mongoConnection");

const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      // clear data for testing
      // db.collection('presidents').drop();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

module.exports = {
  presidents: getCollectionFn("presidents")
};