//model here
const Listings = require('../models/listing')


//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function create(req, res) {
 console.log(req.body)
 let list = new Listings(req.body)
  try {
     await list.save()
    //some query to add listing into the database
    console.log("pathing works on api/listings/create!!");
    res.status(200).json({ text: "Adding a Listing to MongoDB in the future" });
  } catch (err) {
    res.json(err);
  }
}


// async function update(req ,res){
  
//  try {
//   let list = req.body
//  } catch (err) {
//   console.log(err)
  
//  }
// }


// List
async function list(req,res){
  try {
    let list = await Listings.find().select(req.body.address)
    res.json(list)

  } catch (error) {
    return res.status(400).json(error)
      
    
    
  }
}


//MAKE THIS ASYNC LATER WHEN WE ADD ACTUAL QUERIES
async function index(req, res) {
  try {
    //some query to grab all  into the database
    console.log("pathing works on api/listings/index!!");
    res
      .status(200)
      .json({ text: "Show all listings from MongoDB in the future" });
  } catch (err) {
    res.json(err);
  }
}

module.exports = {
  create,
  index,
  // update,
  list
};
