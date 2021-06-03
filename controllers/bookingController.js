const bookingModule = require('../models/booking');
const Restaurant = require('../models/restaurant');

const Booking = bookingModule.Booking


class booking {

    async findAllBookings(){
        return Booking.find();
    }

    async createBooking(booking){
        const restaurantId = booking.restaurant
        await Restaurant.findByIdAndUpdate(restaurantId, 
            {"$push": {"bookings": booking}},
            { "new": true, "upsert": true})
        return Booking.create(booking)
        
    }

    async deleteBooking(id){
        const booking = await Booking.findById(id)
        await Restaurant.findByIdAndUpdate(
            { _id : booking.restaurant }, 
            { $pull: { bookings: 
                { _id: id} } }, 
                    { new: true })
        return Booking.findByIdAndRemove({_id: id});
    }

    async findAllBookings(){
        return Booking.find();
    }


}




let bookingController = new booking();
module.exports = bookingController