const express = require('express');

const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');


/* Páginas de usuarios */
router.post("/:id", apiUsersController.profile);
router.post("/", apiUsersController.list);

module.exports = router;