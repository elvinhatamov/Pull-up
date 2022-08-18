const express = require("express");
const router = express.Router();
const reservationsCtrl = require("../../controllers/reservations");

router.post("/create", reservationsCtrl.create);
router.post("/index", reservationsCtrl.index);

module.exports = router;
