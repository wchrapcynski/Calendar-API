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
      date: req.params.date + "T00:00:00.000Z"
    }).then(holiday => {
      res.json(holiday);
    });
  },
  dateRange: (req, res) => {
    console.log(req.params.date);
    Holidays.find({
      date: {
        $gte: req.params.dateStart + "T00:00:00.000Z",
        $lte: req.params.dateEnd + "T00:00:00.000Z"
      }
    }).then(holiday => {
      res.json(holiday);
    });
  },
  dateShort: (req, res) => {
    console.log(req.params.date);
    Holidays.find({
      dateShort: {
        $gte: req.params.dateStart,
        $lte: req.params.dateEnd
      }
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
    Holidays.find({ country: req.params.country }).then(holiday => {
      res.json(holiday);
    });
  },
  create: (req, res) => {
    Holidays.create(req.body).then(holiday => {
      res.json(holiday);
    });
  },
  edit: (req, res) => {
    Holidays.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(holiday => {
      res.json(holiday);
    });
  },
  delete: (req, res) => {
    Holidays.findOneAndDelete({ _id: req.params.id }).then(holiday => {
      res.json(amiholidayibo);
    });
  }
};
