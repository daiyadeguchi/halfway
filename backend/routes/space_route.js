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

router.get("/:id", (req, res) => {
  spaceSchema.find({ "space": req.params.id })
  .then(function (data) {
    res.json(data);
  })
  .catch(function (error) {
    console.log(error);
  })
});

router.delete("/delete-user/:id", (req, res) => {
  spaceSchema.findByIdAndRemove(req.params.id)
    .then(function (data) {
      res.status(200).json({
        msg: data,
      })
    })
    .catch(function (error) {
      console.log(error);
    })
});

router.delete("/delete-expired-user", (req, res) => {
  let d = new Date();
  d.setDate(d.getDate() - 3);
  spaceSchema.find({ dateModified: {$lt: d}}).deleteMany()
    .then(function (data){
      res.status(200).json({
        msg: data,
      })
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = router;