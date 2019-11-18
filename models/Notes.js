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
    minlength: 256
  }
});

const Amiibo = mongoose.model("amiibo", notesSchema);
module.exports = Amiibo;
