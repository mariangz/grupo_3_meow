const multer = require('multer');
const upload = multer({ storage });
const path = require('path');

/* Indicamos para subir el archivo nombre y donde guardarlo */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/images/users');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});

module.exports = upload;
