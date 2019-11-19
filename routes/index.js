const express = require("express");
const router = express.Router();

router.use(require("./BirthdayRoutes"));
router.use(require("./HolidayRoutes"));
router.use(require("./NotesRoutes"));

module.exports = router;