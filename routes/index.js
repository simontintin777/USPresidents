const presidentRoutes = require("./presidents");

const constructorMethod = app => {
  app.use("/presidents", presidentRoutes);

  app.all("/", (req, res) => {
    let intro = "Back-End Server for US Presidents";
    res.json(intro);
  });

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;