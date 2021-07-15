const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

// Registro
router.get("/registro", usersController.registrar);

// Logueo
router.get("/login", usersController.ingresar);

//Formulario de edición de usuario
router.get("/:id/editar-usuario", usersController.editar);

// Detalle de usuario en particular
router.get('/:id/', usersController.detail); 

module.exports = router;
