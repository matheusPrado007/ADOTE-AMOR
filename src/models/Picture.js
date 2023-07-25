const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  name: { type: String, required: true },
  foto: { type: String, required: true },
  idade: { type: Number, required: true }, 
  descricao: {type: String, required: true},
  uf: {type: String, required: true},
  cidade: {type: String, required: true},
  adotado: {type: String, required: true},
});

module.exports = mongoose.model("Picture", PictureSchema);
