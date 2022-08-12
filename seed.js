// To populate the database, run this file with the terminal command:
//    node seed.js

require("dotenv").config();
require("./config/database");

const UserModel = require("./models/user");

// Cool trick: if you put a function in brackets like this:
// (function meow(){})(),
// it executes immediately without needing to be called. It's called an "immediately invoked" function (IIFE).
(async function populateDB() {
  await UserModel.deleteMany({});
  const users = await UserModel.create([
    {
      username: "paul",
      password: "password",
      email: "paul.r.yeung@gmail.com",
      firstName: "paul",
      lastName: "yeung",
      phone: "1234567890",
    },
    {
      username: "paul2",
      password: "password",
      email: "paul.r.yeung2@gmail.com",
      firstName: "paul2",
      lastName: "yeung2",
      phone: "0123456789",
    },
    {
      username: "paul3",
      password: "password",
      email: "paul.r.yeung3@gmail.com",
      firstName: "paul3",
      lastName: "yeung3",
      phone: "9012345678",
    },
  ]);

  //   await ItemModel.deleteMany({});
  //   const items = await ItemModel.create([
  //     {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 5.95},
  //     {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
  //     {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 3.95},
  //     {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 14.95},
  //     {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 13.95},
  //   ]);

  console.log(users);

  process.exit();
})();
