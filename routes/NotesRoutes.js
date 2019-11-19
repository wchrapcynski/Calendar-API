const express = require("express");
const router = express.Router();
const notesController = require("../controllers/NotesController");

// Main resource that lists the entire holiday collection
router.get("/note", notesController.index);
// Searching by ID
router.get("/note/id/:id", notesController.id);
// Search by date The date format is YYYY-MM-DD.
router.get("/note/date/:date", notesController.date);
// Search by title
router.get("/note/title/:title", notesController.title);
// Creates note
router.post("/note", notesController.create);
// Edits an note
router.put("/note/id/:id", notesController.edit);
// Deletes a note
router.delete("/note/id/:id", notesController.delete);

module.exports = router;
