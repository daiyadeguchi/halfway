const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String
  },
  postcode: {
    type: Number
  },
  address: {
    type: String
  }
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema);