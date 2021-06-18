const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookingSchema = require("./booking");

const restSchema = new Schema({
  name: {
    type: Schema.Types.String,
    ref: "Rest",
    required: true,
    lowercase:true,
  },
  addres:{
    type: String,
    required: true,
    lowercase:true,
  },
  typeFood:{
    type:String,
    required:true,
    lowercase:true,
  },
  city: {
    type: String,
    required: true,
    lowercase:true,
  },
  isActive: {
    type: Boolean,
    default: true,
    lowercase:true,
  },
  imgRest:{
    type:Array,
    lowercase:true,
  },
  telephone:{
    type:String,
    lowercase:true,
  },
  bookings: [],
});

const Rest = mongoose.model("Rest", restSchema);
module.exports = Rest;
