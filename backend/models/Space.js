const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let spaceSchema = new Schema({
  space: {
    type: String
  },
  isOwner: {
    type: Boolean
  },
  username: {
    type: String
  },
  location: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  dateModified: {
    type: Date
  }
}, {
  collection: 'space',
  versionKey: false
})

module.exports = mongoose.model('Space', spaceSchema);