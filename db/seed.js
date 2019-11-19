const HolidaysUS = require("../models/Holidays");
const HolidaysCA = require("../models/Holidays");
const HolidaysMX = require("../models/Holidays");
const dataHolidayUS = require("./holidaysUS.json");
const dataHolidayCA = require("./holidaysCA.json");
const dataHolidayMX = require("./holidaysMX.json");

const Birthdays = require("../models/Birthdays");
const dataBirthdays = require("./birthdaysAvengers.json");

const Notes = require("../models/Notes");
const dataNotes = require("./notes.json");

// Seeds Holidays data from json
const holidaysUSData = dataHolidayUS.map(item => {
  const holidaysUS = {};
  holidaysUS.date = item.date;
  holidaysUS.name = item.name;
  holidaysUS.type = item.type;
  holidaysUS.country = item.country;
  return holidaysUS;
});

const holidaysCAData = dataHolidayCA.map(item => {
  const holidaysCA = {};
  holidaysCA.date = item.date;
  holidaysCA.name = item.name;
  holidaysCA.type = item.type;
  holidaysCA.country = item.country;
  return holidaysCA;
});

const holidaysMXData = dataHolidayMX.map(item => {
  const holidaysMX = {};
  holidaysMX.date = item.date;
  holidaysMX.name = item.name;
  holidaysMX.type = item.type;
  holidaysMX.country = item.country;
  return holidaysMX;
});

HolidaysUS.remove({}).then(() => {
  HolidaysUS.create(holidaysUSData)
    .then(holidaysUS => {
      console.log(holidaysUS);
    })
    .catch(err => {
      console.log(err);
    });
});

HolidaysCA.remove({}).then(() => {
  HolidaysCA.create(holidaysCAData)
    .then(holidaysCA => {
      console.log(holidaysCA);
    })
    .catch(err => {
      console.log(err);
    });
});

HolidaysMX.remove({}).then(() => {
  HolidaysMX.create(holidaysMXData)
    .then(holidaysMX => {
      console.log(holidaysMX);
    })
    .catch(err => {
      console.log(err);
    });
});

// Seeds Birthday data from json
const birthdayData = dataBirthdays.map(item => {
  const birthday = {};
  birthday.date = item.date;
  birthday.dateShort = item.date.substring(5);
  birthday.name = item.name;
  return birthday;
});

Birthdays.remove({}).then(() => {
  Birthdays.create(birthdayData)
    .then(birthdays => {
      console.log(birthdays);
    })
    .catch(err => {
      console.log(err);
    });
});

// Seeds Notes data from json
const notesData = dataNotes.map(item => {
  const notes = {};
  notes.date = item.date;
  notes.title = item.title;
  notes.note = item.note;
  return notes;
});

Notes.remove({}).then(() => {
  Notes.create(notesData)
    .then(notes => {
      console.log(notes);
    })
    .catch(err => {
      console.log(err);
    });
});