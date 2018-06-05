const express = require("express");
const router = express.Router();
const data = require("../data");
const presidentData = data.presidents;

router.get("/", async (req, res) => {
  try {
    const presidentList = await presidentData.getAllPresidents();
    res.json(presidentList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/ascending", async (req, res) => {
  try {
    const presidentList = await presidentData.getAllPresidentsInAscending();
    res.json(presidentList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/descending", async (req, res) => {
  try {
    const presidentList = await presidentData.getAllPresidentsInDescending();
    res.json(presidentList);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;