const Holidays = require("../models/Holidays");

module.exports = {
  index: (req, res) => {
    Holidays.find({}).then(holiday => {
      res.json(holiday);
    });
  },
  id: (req, res) => {
    Holidays.find({ _id: req.params.id }).then(holiday => {
      res.json(holiday);
    });
  },
  date: (req, res) => {
    Holidays.find({
      date: req.params.release + "T00:00:00.000Z"
    }).then(holiday => {
      res.json(holiday);
    });
  },
  name: (req, res) => {
    Holidays.find({ name: req.params.name }).then(holiday => {
      res.json(holiday);
    });
  },
  country: (req, res) => {
    Holidays.find({ name: req.params.country }).then(holiday => {
      res.json(holiday);
    });
  }
};
