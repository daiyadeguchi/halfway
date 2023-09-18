const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let spaceSchema = new Schema({
  username: {
    type: String
  },
  location: {
    type: String
  }
}, {
  collection: 'space'
})

module.exports = mongoose.model('Space', spaceSchema);