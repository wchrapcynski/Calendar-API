const express = require("express");
const router = express.Router();
const birthdayController = require("../controllers/BirthdayController");

// Main resource that lists the entire holiday collection
router.get("/birthday", birthdayController.index);
// Searching by ID
router.get("/birthday/id/:id", birthdayController.id);
// Search by date The date format is YYYY-MM-DD.
router.get("/birthday/date/:date", birthdayController.date);
// Search by name
router.get("/birthday/name/:name", birthdayController.name);
// Creates birthday listing
router.post("/birthday", birthdayController.create);
// Edits an birthday listing
router.put("/birthday/id/:id", birthdayController.edit);
// Deletes an Ambirthdayiibo listing
router.delete("/birthday/id/:id", birthdayController.delete);

module.exports = router;
