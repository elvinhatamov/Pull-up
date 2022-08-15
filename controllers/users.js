const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//EXPORT CREATE(SIGNUP) LATER
module.exports = {
  login,
  signUp,
};

//CREATE "async function create(req, res) another time"
async function signUp(req, res) {
  console.log(
    `Incoming req body from form: ${req.body.username} and ${req.body.email}`
  );
  try {
    const { username, password, email, firstName, lastName, phone } = req.body;

    let user = await User.findOne({ email: req.body.email });
    console.log("This is what searched User looks like: ", user);
    if (user) throw new Error("User already exists!");

    //const passwordHash = await bcrypt.hash(password, 10);

    // const startingInfo = {

    // }

    const result = await User.create({
      username,
      password,
      email,
      firstName,
      lastName,
      phone,
    });

    console.log(`This is what result looks like: `, result);
    //re-search because result actually isn't the same as user query
    user = await User.findOne({ email: req.body.email });

    const token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json(token);
    // );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

//login function
async function login(req, res) {
  console.log("Made it to the login attempt fetch");
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(user);
    //check if wrong password input, throw errors if wrong
    if (req.body.password !== user.password)
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
