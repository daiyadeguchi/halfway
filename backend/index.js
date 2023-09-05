const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
  console.log('Database successfully connected!');
}, error => {
  console.log('Could not connect to database: ' + error);
});

const app = express();
app.use(cors());

const port = process.env.PORT | 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
});

app.get('/', (req, res) => {
  res.send("hello");
});

