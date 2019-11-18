const express = require("express");
const router = express.Router();
const holidayController = require("../controllers/HolidayController");

// Main resource that lists the entire holiday collection
router.get("/holiday", holidayController.index);
// Searching by ID
router.get("/holiday/id/:id", holidayController.id);
// Search by date The date format is YYYY-MM-DD.
router.get("/amiibo/date/:date", holidayController.date);
// Search by name
router.get("/amiibo/name/:name", holidayController.name);
// Search by country
router.get("/amiibo/country/:country", holidayController.country);

module.exports = router;