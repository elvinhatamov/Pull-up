const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  address: {
    type: String,
    required: true,
  },

  postalCode: {
    type: String,
  },
  rate: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  photo: {
    type: String,
  },
  lat: {
    type: String,
    required: true,
  },
  lng: {
    type: String,
    required: true,
  },
  lot: {
    type: [String],
  },
  daybooked: [Date],
  nightsbooked: [Date],
});

module.exports = mongoose.model("Listings", listingSchema);
