const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // obtener token del header
  const token = req.header("x-auth-token");

  // verificar si no hay token
  if (!token) {
    return res.status(401).json({ msg: "Acceso denegado, no hay token" });
  }

  try {
    // verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // guardar usuario en request
    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Token no válido" });
  }
};