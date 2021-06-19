const bookingModule = require("../models/booking");
const Restaurant = require("../models/restaurant");
const Booking = bookingModule.Booking;

class booking {


  async createBooking(booking) {
    const restaurantId = booking.restaurant;
    await Restaurant.findByIdAndUpdate(restaurantId, {
      new: true,
      upsert: true,
    });
    return Booking.create(booking);
  };


  async findAllBookings() {
    return Booking.find();
  };

  async findAllBookings(id) {
    let res = await Booking.find({ idUser : id  })
    .populate("idUser","name , imgUser")
    .populate("restaurant","name , imgRest")
    var prueba = res.length
   if (prueba === 0){
     return (
       "vacio"
     )
   }else {return res}
 }; 


  
  async deleteBooking(id) {
    return Booking.findOneAndRemove({ _id: id });
  };
}

let bookingController = new booking();
module.exports = bookingController;
