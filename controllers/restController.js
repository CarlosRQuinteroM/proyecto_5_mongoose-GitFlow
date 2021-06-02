const User = require('../models/user');
const Rest = require('../models/restaurant');

class Local {

    async findAllRests(){
        return Rest.find();
    }

    async createRest(rest){
        return Rest.create(rest);
    }

    async addReserva(data){

        const id = data.id;
        const userId = data.userId;

        const usuarioName = await User.findById(userId);

        let booking = {
            idUser: data.userId,
            usuario: usuarioName.name,
            text: data.texto,
            fecha: data.fecha,
            
        };

        console.log(booking);

        return Rest.findByIdAndUpdate(
            {_id: id},
            {$push: {bookings: booking}});
        
    }

    async deleteBooking(id){
        
        return Room.findByIdAndRemove(id);
    }

}



let restController = new Local();
module.exports = restController;