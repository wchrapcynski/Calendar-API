const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const birthdayrSchema = new Schema({

});

const Amiibo = mongoose.model("amiibo", birthdayrSchema);
module.exports = Amiibo;
