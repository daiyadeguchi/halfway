const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

const spaceRoute = require("./routes/space_route");

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
  console.log('Database successfully connected!');
}, error => {
  console.log('Could not connect to database: ' + error);
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/space', spaceRoute);

const port = process.env.PORT | 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

app.use((req, res, next) => {
  res.status(400).send('Error 404');
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});