//model here

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function create(req, res) {
  try {
    //some query to add listing into the database
    console.log("pathing works on api/reservations/create!!");
    res.state(200).json("Adding a Reservation to MongoDB in the future");
  } catch (err) {
    res.json(err);
  }
}

//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function index(req, res) {
  try {
    //some query to grab all  into the database
    console.log("pathing works on api/reservations/index!!");
    res
      .state(200)
      .json("Show all Reservations for User from MongoDB in the future");
  } catch (err) {
    res.json(err);
  }
}

module.exports = {
  create,
  index,
};
