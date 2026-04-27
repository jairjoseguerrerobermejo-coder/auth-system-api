const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// ruta solo admin
router.get("/admin", authMiddleware, roleMiddleware("admin"), (req, res) => {
  res.json({ msg: "Bienvenido admin" });
});

// ruta protegida
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    msg: "Acceso permitido",
    user: req.user
  });
});

// ruta de registro
router.post("/register", register);
router.post("/login", login);

module.exports = router;