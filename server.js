const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// conectar DB
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));

// ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});