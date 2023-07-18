const { Schema } = require("mongoose");
const characterSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  hair_color: {
    type: String,
    required: true,
  },
  skin_color: {
    type: String,
    required: true,
  },
  eye_color: {
    type: String,
    required: true,
  },
  birth_year: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "tittle"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "tittle"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

module.exports = characterSchema;
