const { Router } = require("express");

const { usuariosGet } = require("../controllers/usuarios.controller");

const router = new Router();

router.get("/", usuariosGet);

module.exports = router;
