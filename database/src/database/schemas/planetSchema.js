const { Schema } = require("mongoose");
const planetSchema = new Schema({
  // _id: String,
  // name: String,
  // rotation_period: String,
  // orbital_period: String,
  // diameter: String,
  // climate: String,
  // gravity: String,
  // terrain: String,
  // surface_water: String,
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rotation_period: {
    type: Number,
    min: 0,
  },
  orbital_period: {
    type: Number,
    min: 0,
  },
  diameter: {
    type: Number,
    min: 0,
  },
  climate: {
    type: String,
    enum: ["arid", "temperate", "tropical", "frozen", "murky"],
  },
  gravity: {
    type: String,
    match: /^(\d+(\.\d+)?)$/,
  },
  terrain: {
    type: String,
  },
  surface_water: {
    type: Number,
    min: 0,
    max: 200,
  },
  res_idents: { type: String, ref: "Character" },
  films: [{ type: String, ref: "Film" }],
});

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("res_idents", ["_id", "name"])
    .populate("films", ["_id", "tittle"]);
};
planetSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("res_idents", ["_id", "name"])
    .populate("films", ["_id", "tittle"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet);
};

module.exports = planetSchema;
