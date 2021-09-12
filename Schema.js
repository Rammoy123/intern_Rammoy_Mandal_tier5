//database schema defination
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  NoteNo: {
    type: Number,
    required: true
  },
  Heading: {
    type: String,
    required: true
  },
  LineNo: {
    type: Number
  }
})
// exporting module to use the module from ootside the file
module.exports = mongoose.model('notes', UserSchema)
