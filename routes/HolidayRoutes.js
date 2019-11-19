const express = require("express");
const router = express.Router();
const holidayController = require("../controllers/HolidayController");

// Main resource that lists the entire holiday collection
router.get("/holiday", holidayController.index);
// Searching by ID
router.get("/holiday/id/:id", holidayController.id);
// Search by date The date format is YYYY-MM-DD.
router.get("/holiday/date/:date", holidayController.date);
// Search by a range of Japanse Release dates. The date format is YYYY-MM-DD.
router.get("/holiday/date/:dateStart/:dateEnd", holidayController.date);
// Search by name
router.get("/holiday/name/:name", holidayController.name);
// Search by country
router.get("/holiday/country/:country", holidayController.country);

module.exports = router;