const { body } = require("express-validator");

module.exports = {
    addCart: [
        body("quantity")
        .custom((value) => value > 0)
        .withMessage("Debe agregar almenos un producto a su carrito"),
    ],
};