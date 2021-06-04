const User = require('../models/user');
const Rest = require('../models/restaurant');

class Local {

    async findAllRests(){
        return Rest.find();
    }
    async findAllbookings(idRestaurante){
        return Rest.where(
            {_id : idRestaurante})

    }
    async createRest(rest){
        return Rest.create(rest);
    }

    async addBooking(data){

        const id = data.id;
        const userId = data.userId;
        const usuarioName = await User.findById(userId);
        

        let booking = {
            idUser: data.userId,
            usuario: usuarioName.name,
            comensales: data.comensales,
            fecha: data.fecha,
            hora: data.hora,
            alergias: data.alergias,
            comentarios:data.comentarios,
        };

        return Rest.findByIdAndUpdate(
            {_id: id},
            {$push: {bookings: booking}});
        
    }

    async deleteBooking(id,idRestaurante){
        return Rest.findByIdAndUpdate(
            {_id : idRestaurante},
            {$pull: {bookings: {idUser: id}}});
    }

}



let restController = new Local();
module.exports = restController;