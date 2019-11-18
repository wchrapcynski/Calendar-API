const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const notesSchema = new Schema({

});

const Amiibo = mongoose.model("amiibo", notesSchema);
module.exports = Amiibo;
