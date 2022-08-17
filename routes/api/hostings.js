const express = require("express");
const router = express.Router();
const listingsCtrl = require("../../controllers/listings");

router.post("/", listingsCtrl.create);

router.put("/:id", listingsCtrl.update);

router.delete("/:id", listingsCtrl.deleted);

router.get("/list", listingsCtrl.list);

module.exports = router;
