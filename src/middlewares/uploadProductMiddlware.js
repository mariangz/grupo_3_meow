const path = require('path');
const multer = require('multer');

/* Indicamos para subir el archivo nombre y donde guardarlo */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/images/food');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

module.exports = upload;