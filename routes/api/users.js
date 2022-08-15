const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

router.post("/login", usersCtrl.login);
//MAKE ROUTE FOR SIGNUP LATER
router.post("/signup", usersCtrl.signUp)
module.exports = router;
