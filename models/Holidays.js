const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const holidaySchema = new Schema({
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

const Holidays = mongoose.model("holidays", holidaySchema);
module.exports = Holidays;