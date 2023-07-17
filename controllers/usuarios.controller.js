const { response } = require("express");
const bcryptjs = require("bcryptjs");
const UsuarioModel = require("../models/usuario.model");

const usuariosGet = async (req, res) => {
  res.json({
    ok: true,
    msg: "Mi primer Get",
  });
};

const usuariosPost = async (req, res) => {
  const usuarioModel = new UsuarioModel(req.body);

  // Verificar si el correo existe
  const salt = bcryptjs.genSaltSync();
  usuarioModel.password = bcryptjs.hashSync(req.body.password, salt);

  usuarioModel.save();
  res.json({
    ok: true,
    usuarioModel,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
};
