const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({

})

const Amiibo = mongoose.model("amiibo", calendarSchema);
module.exports = Amiibo;