//este archivo es para saber si hay conexión exitosa o no con mi base de datos.

const mongoose = require("mongoose");
const { MONGO_URI } = require("./src/config/envs");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });
