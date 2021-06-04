const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    restaurant:{
        type: Schema.Types.ObjectId,
        ref: 'Rest',
        required: true
    },
    idUser:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    usuario:{
        type: String,
        required:true,
    },
    partySize:{
        type: Number,
        required:true,
    },
    fecha:{
        type: Date,
        required:true,
    },
    alergias:{
        type: String,
        required:false,
    },
    comentarios:{
        type: String,
        required:false,
    } 

})
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = {Booking, bookingSchema};
