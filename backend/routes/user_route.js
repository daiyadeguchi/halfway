let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let userSchema = require("../models/User");

router.post("/create-user", (req, res) => {
  userSchema.create(req.body)
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

router.get("/", async (req, res) => {
  const user = await userSchema.find({});
  if(user) {
    res.json(user);
  } else {
    console.log("Couldn't get user data");
  }
});

router.route("/update-user/:id")
  .get((req, res) => {
    userSchema.findById(req.params.id)
      .then(function (data) {
       express.json(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  })
  
  .put((req, res) => {
    userSchema.findByIdAndUpdate(
      req.params.id, {
        $set: req.body,
      })
      .then(function (data) {
        res.json(data);
        console.log("User updated successfully");
      })
      .catch (function (error) {
        console.log(error);
      })
  });

  router.delete("/delete-user/:id", (req, res) => {
    userSchema.findByIdAndRemove(req.params.id)
      .then(function (data) {
        res.status(200).json({
          msg: data,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  })

module.exports = router;