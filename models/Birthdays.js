const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const birthdayrSchema = new Schema({
  date: {
    type: Date
  },
  name: {
    type: String,
    trim: true,
    minlength: 1
  }
});

const Birthdays = mongoose.model("birthdays", birthdayrSchema);
module.exports = Birthdays;
