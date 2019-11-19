const Notes = require("../models/Notes");

module.exports = {
  index: (req, res) => {
    Notes.find({}).then(notes => {
      res.json(notes);
    });
  },
  id: (req, res) => {
    Notes.find({ _id: req.params.id }).then(notes => {
      res.json(notes);
    });
  },
  date: (req, res) => {
    Notes.find({
      date: req.params.date + "T00:00:00.000Z"
    }).then(notes => {
      res.json(notes);
    });
  },
  dateRange: (req, res) => {
    console.log(req.params.date);
    Notes.find({
      date: {
        $gte: req.params.dateStart + "T00:00:00.000Z",
        $lte: req.params.dateEnd + "T00:00:00.000Z"
      }
    }).then(notes => {
      res.json(notes);
    });
  },
  title: (req, res) => {
    Notes.find({ title: req.params.title }).then(notes => {
      res.json(notes);
    });
  },
  create: (req, res) => {
    Notes.create(req.body).then(notes => {
      res.json(notes);
    });
  },
  edit: (req, res) => {
    Notes.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(notes => {
      res.json(notes);
    });
  },
  delete: (req, res) => {
    Notes.findOneAndDelete({ _id: req.params.id }).then(notes => {
      res.json(notes);
    });
  }
};
