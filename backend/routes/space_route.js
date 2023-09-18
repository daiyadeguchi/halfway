let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let spaceSchema = require("../models/Space");

router.post("/create-space", (req, res) => {
  spaceSchema.create(req.body)
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = router;