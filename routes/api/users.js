const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

router.post("/login", usersCtrl.login);
//MAKE ROUTE FOR SIGNUP LATER

module.exports = router;
