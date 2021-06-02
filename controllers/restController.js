const User = require('../models/user');
const Rest = require('../models/restaurant');

class Local {

    async findAllRests(){
        return Rest.find();
    }

    async createRest(room){
        return Rest.create(room);
    }

    async joinRest(data){
        const id = data.id;
        const miembro = data.miembro;
        return Rest.findByIdAndUpdate(
            {_id: id},
            {$push: {miembros: miembro}});
    }

    async leaveRest(data){
        const id = data.id;
        const miembro = data.miembro;
        console.log(id,miembro);
        return Rest.findByIdAndUpdate(
            {_id: id},
            {$pull: {miembros: miembro}});
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
            reportado: data.reportado,
            entregado: data.entregado,
            leido: data.leido
        };

        console.log(booking);

        return Rest.findByIdAndUpdate(
            {_id: id},
            {$push: {bookings: booking}});
        
    }

}



let chatController = new Local();
module.exports = chatController;