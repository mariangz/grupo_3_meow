const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const multer = require('multer');
const usersController = require('../controllers/usersController');

// localhost:3000/users/registro
router.get('/users/registro', usersController.registrar);

/* Indicamos para subir el archivo nombre y donde guardarlo */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../public/images/users');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/users/registro',

  body('email').isEmail().withMessage('Debe ser un email válido'),
  body('password').isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
  body('name').isString().isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),

  usersController.guardarRegistro);

router.get('/users/login', usersController.ingresar);
router.post('/users/login', usersController.guardarLogin);
router.post('/users/registro', upload.single('image'), usersController.guardarRegistro);

module.exports = router;
