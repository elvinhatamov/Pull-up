const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: {
    type: String,
    required: true,
  },

  postalCode: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  
});

module.exports = mongoose.model("Listings", listingSchema);
