//model here
const Listings = require("../models/listing");

async function deleted(req, res) {
  try {
    console.log("Id successfull passed by params", req.params.id)

    await Listings.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
}

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function create(req, res) {
  console.log("pathing works on api/listings/create!!");
  console.log(req.body);
  let list = new Listings(req.body);
  try {
    await list.save();
    //some query to add listing into the database

    res.status(200).json({ text: "Successfully added listing!" });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

async function update(req, res) {
  try {
    let updateLot = await Listings.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateLot);
  } catch (error) {
    return res.status(500).json(error);
  }
}

//FOR POPULATING MY HOSTINGS PAGE
async function list(req, res) {
  //fetch hostings owned by the user
  try {
    let list = await Listings.find({ user: req.body.user._id });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
}

//FOR POPULATING MAP, SHOW ALL LISTINGS EXCLUDING USER
async function index(req, res) {
  try {
    console.log("Map pathing works on api/listings/index!!", req.body);
    //grab all listings where user is NOT ($ne) equal to user id
    let listings = await Listings.find({ user: { $ne: req.body.user._id } });
    console.log(listings);

    res.status(200).json(listings);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

//Show listings individual detail page
async function show(req, res) {
  console.log("For show params id is : ", req.body.id);
  try {
    let listing = await Listings.findById(req.body.id);
    console.log("This listing found is", listing);
    if (!listing) {
      console.log(listing);
    }
    console.log("Found the listing: ", listing);
    res.status(200).json(listing);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  create,
  index,
  update,
  deleted,
  list,
  show,
};
