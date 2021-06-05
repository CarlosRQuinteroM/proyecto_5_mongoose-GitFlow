const jwt = require("jsonwebtoken");
const secret = "Carlos y Juanfe son la leche";

const admin = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return new Error("Tienes que hacer login para realizar esta acción.");
    }
    let token = req.headers.authorization.split(" ")[1];
    let auth = jwt.verify(token, secret);
    if (auth.isAdmin == false) {
      console.log(jwt);

      throw new Error("No tienes permiso para realizar esta accion");
    }
    return next();
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = admin;
