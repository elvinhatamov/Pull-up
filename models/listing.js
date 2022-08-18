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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true,
  },

  image: {
    data: Buffer,
    contentType: String,
  },
})

module.exports = mongoose.model("Listings", listingSchema);
