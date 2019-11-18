const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    date: {
        type: Date
    },
    name: {
        type: String,
        trim: true,
        minlength: 1
    },
    type: {
        type: String,
        trim: true,
        minlength: 1
    },
    country: {
        type: String,
        maxlength: 2
    }
})

const Amiibo = mongoose.model("amiibo", calendarSchema);
module.exports = Amiibo;