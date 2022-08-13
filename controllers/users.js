const User = require("../models/user");
const jwt = require("jsonwebtoken");

//EXPORT CREATE(SIGNUP) LATER
module.exports = {
  login,
};

//CREATE "async function create(req, res) another time"

//login function
async function login(req, res) {
  console.log("Made it to the login attempt fetch");
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(user);
    //check if wrong password input, throw errors if wrong
    if (req.body.password != user.password)
      throw new Error("Password Mismatch");

    console.log("Password is good!");

    //here means password is fine, give user a new token
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    //pass the json token over to the fetch
    res.status(200).json(token);
  } catch (err) {
    console.log(`Caught an error: ${err}`);
    res.status(400).json("Bad Credentials");
  }
}
