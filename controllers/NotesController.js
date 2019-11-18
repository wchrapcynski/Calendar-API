const Notes = require("../models/Holidays");

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
      date: req.params.release + "T00:00:00.000Z"
    }).then(notes => {
      res.json(notes);
    });
  },
  title: (req, res) => {
    Notes.find({ title: req.params.name }).then(notes => {
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
