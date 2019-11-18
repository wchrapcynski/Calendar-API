const Birthdays = require("../models/Holidays");

module.exports = {
  index: (req, res) => {
    Birthdays.find({}).then(birthday => {
      res.json(birthday);
    });
  },
  id: (req, res) => {
    Birthdays.find({ _id: req.params.id }).then(birthday => {
      res.json(birthday);
    });
  },
  date: (req, res) => {
    Birthdays.find({
      date: req.params.release + "T00:00:00.000Z"
    }).then(birthday => {
      res.json(birthday);
    });
  },
  name: (req, res) => {
    Birthdays.find({ name: req.params.name }).then(birthday => {
      res.json(birthday);
    });
  }
};
