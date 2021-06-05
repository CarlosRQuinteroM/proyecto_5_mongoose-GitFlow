const User = require("../models/user");
const Rest = require("../models/restaurant");
const Booking = require("../models/booking");

class Local {

  async createRest(rest) {
    return Rest.create(rest);
  };

  async findAllRests() {
    return Rest.find();
  };

  async findAllbookings(idRestaurante) {
    return Rest.where({ _id: idRestaurante });
  };

  async modifyRest(data) {
    return Rest.findByIdAndUpdate(
      //Where
      { _id: data.id },
       //Data Changes
      {isActive: data.isActive,},

    );
  };
  // borrar restaurantes //
  async deleteRest(id) {
    return Rest.findByIdAndRemove({ _id: id });
  };
}

let restController = new Local();
module.exports = restController;
