const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    bookings: {
        type: Array,
        require:true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Rest = mongoose.model('Rest', restSchema);
module.exports = Rest;