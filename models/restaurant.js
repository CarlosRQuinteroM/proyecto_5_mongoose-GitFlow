const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = require("./booking");

const restSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  bookings: [],
});

const Rest = mongoose.model("Rest", restSchema);
module.exports = Rest;
