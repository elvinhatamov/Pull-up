const express = require("express");
const router = express.Router();
const listingsCtrl = require("../../controllers/listings");

router.post("/show", listingsCtrl.show);
router.post("/create", listingsCtrl.create);
router.post("/index", listingsCtrl.index);

module.exports = router;
