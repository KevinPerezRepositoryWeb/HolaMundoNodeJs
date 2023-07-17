const { Schema, model } = require("mongoose");

const UsuarioModel = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },

  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
    unique: true,
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, "El rol es obligatorio"],
    emun: ["ADMIN", "USER"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("UsuarioModel", UsuarioModel);
