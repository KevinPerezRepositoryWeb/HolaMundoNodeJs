const { Router } = require("express");
const { loginPost } = require("../controllers/auth.controller");

const router = new Router();

router.get("/login", loginPost);


// Sintaxis para exportar 
module.exports = router;