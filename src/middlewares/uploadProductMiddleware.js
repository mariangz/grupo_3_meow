const multer = require('multer');

/* Indicamos para subir el archivo nombre y donde guardarlo */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const folder = './public/images/food';
    cb(null, folder);
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
