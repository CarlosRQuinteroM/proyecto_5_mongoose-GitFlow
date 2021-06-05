const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "Carlos y Juanfe son la leche";

class Client {
  constructor() {}

  async createUser(user) {
    user.password = await bcrypt.hash(user.password, 10);
    return User.create(user);
  }
  async logMe(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email does not exist");
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Password incorrect");
    }

    const payload = {
      userId: user.id,
      role: user.role,
      tokenCreationDate: new Date(),
    };
    const token = jwt.sign(payload, secret);
    return { token, user };
  };


    async getByEmail(email) {
        return await User.find({email});
    }

  async findAllUsers() {
    return User.find();
  };

  async modifyUser(body) {
    return User.findByIdAndUpdate(
      //Data Changes
      {
        country: body.country,
        city: body.city,
      },
      //Were
      { _id: body.id }
    );
  };

  async deleteUser(id) {
    return User.findByIdAndRemove({ _id: id });
  };
};

let userController = new Client();
module.exports = userController;
