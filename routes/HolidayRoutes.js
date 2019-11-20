const express = require("express");
const router = express.Router();
const holidayController = require("../controllers/HolidayController");

// Main resource that lists the entire holiday collection
router.get("/holiday", holidayController.index);
// Searching by ID
router.get("/holiday/id/:id", holidayController.id);
// Search by date The date format is YYYY-MM-DD.
router.get("/holiday/date/:date", holidayController.date);
// Search by a range of dates. The date format is YYYY-MM-DD.
router.get("/holiday/date/:dateStart/:dateEnd", holidayController.dateRange);
// Search by a range of dates. The date format is MM-DD.
router.get("/holiday/date-short/:dateStart/:dateEnd", holidayController.dateShort);
// Search by name
router.get("/holiday/name/:name", holidayController.name);
// Search by country
router.get("/holiday/country/:country", holidayController.country);
// Creates holiday listing
router.post("/holiday", holidayController.create);
// Edits an holiday listing
router.put("/holiday/id/:id", holidayController.edit);
// Deletes a holiday listing
router.delete("/holiday/id/:id", holidayController.delete);

module.exports = router;