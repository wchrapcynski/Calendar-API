const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  date: {
    type: Date
  },
  title: {
    type: String,
    trim: true,
    minlength: 1
  },
  note: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 256
  }
});

const Notes = mongoose.model("notes", notesSchema);
module.exports = Notes;
