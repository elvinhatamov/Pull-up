//model here

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function create(req, res) {
  try {
    //some query to add listing into the database
    console.log("pathing works on api/listings/create!!");
    res.state(200).json("Adding a Listing to MongoDB in the future");
  } catch (err) {
    res.json(err);
  }
}

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function index(req, res) {
  try {
    //some query to grab all  into the database
    console.log("pathing works on api/listings/index!!");
    res.state(200).json("Show all listings from MongoDB in the future");
  } catch (err) {
    res.json(err);
  }
}

module.exports = {
  create,
  index,
};
