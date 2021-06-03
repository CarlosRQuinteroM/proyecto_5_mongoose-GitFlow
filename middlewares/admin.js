const jwt = require("jsonwebtoken");
const secret = "Carlos y Juanfe son la leche";

const admin = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return new Error("No tienes autorizacion");
    }

    let token = req.headers.authorization.split(" ")[1];

    let auth = jwt.verify(token, secret);

    if (auth.userId != req.body.idUser && auth.isAdmin != req.body.isAdmin) {
      //console.log(req.body.idUser);
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
