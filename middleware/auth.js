const jwt = require("jsonwebtoken");
const secret = "Carlos y Juanfe son la leche";

const auth = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Tienes que hacer login para realizar esta acción.");
    }
    let token = req.headers.authorization.split(" ")[1];
    let auth = jwt.verify(token, secret);
    if (auth.id != req.body.id) {
      console.log(auth + "entra?");
      throw new Error("No tienes permiso ");
    }
    return next();
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = auth;
