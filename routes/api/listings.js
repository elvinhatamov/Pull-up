const express = require("express");
const router = express.Router();
const listingsCtrl = require("../../controllers/listings");

router.post("/create", listingsCtrl.create);
router.get("/index", listingsCtrl.index);

module.exports = router;
