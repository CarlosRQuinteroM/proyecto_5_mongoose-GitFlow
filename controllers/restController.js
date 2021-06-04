const User = require('../models/user');
const Rest = require('../models/restaurant');
const Booking = require('../models/booking')

class Local {

    async findAllRests(){
        return Rest.find();
    }

    async createRest(rest){
        return Rest.create(rest);
    }

    // borrar restaurantes // 



}



let restController = new Local();
module.exports = restController;