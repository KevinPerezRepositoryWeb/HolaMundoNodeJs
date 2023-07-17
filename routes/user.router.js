const { Router } = require("express");
const { usuariosGet,usuariosPost } = require("../controllers/usuarios.controller");

const router = new Router();

router.get("/", usuariosGet);
router.post("/", usuariosPost);


// Sintaxis para exportar 
module.exports = router;
