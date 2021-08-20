const multer = require('multer');

/* Indicamos para subir el archivo nombre y donde guardarlo */
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public/images/users');
    },
    filename(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });


module.exports = upload