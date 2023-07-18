const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model("Character", require("./schemas/characterSchema"));

// const Planet = conn.model("Planet", require("./schemas/planetSchema"));

//   .populate("films", ["_id", "title"])

// Film.find()
//   .populate("planets")
//   .then((res) => console.log(res));
// Planet.find()
//   .populate("characters")
//   .then((res) => console.log(res));
module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
};
