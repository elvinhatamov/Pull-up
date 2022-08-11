const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  listing: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  car: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  totalCost: {
    type: Float,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: type,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
