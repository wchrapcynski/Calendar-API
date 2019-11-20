const Birthdays = require("../models/Birthdays");

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
      date: req.params.date + "T00:00:00.000Z"
    }).then(birthday => {
      res.json(birthday);
    });
  },
  dateRange: (req, res) => {
    console.log(req.params.dateShort);
    Birthdays.find({
      dateShort: {
        $gte: req.params.dateStart,
        $lte: req.params.dateEnd
      }
    }).then(birthday => {
      res.json(birthday);
    });
  },
  name: (req, res) => {
    Birthdays.find({ name: req.params.name }).then(birthday => {
      res.json(birthday);
    });
  },
  create: (req, res) => {
    Birthdays.create(req.body).then(birthday => {
      res.json(birthday);
    });
  },
  edit: (req, res) => {
    Birthdays.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(birthday => {
      res.json(birthday);
    });
  },
  delete: (req, res) => {
    Birthdays.findOneAndDelete({ _id: req.params.id }).then(birthday => {
      res.json(birthday);
    });
  }
};
