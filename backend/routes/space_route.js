let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let spaceSchema = require("../models/Space");

router.post("/create-space", (req, res) => {
  spaceSchema.create(req.body)
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

router.get("/", async (req, res) => {
  const space = await spaceSchema.find({});
  if(space) {
    res.json(space);
  } else {
    console.log("Error getting user");
  }
});

module.exports = router;