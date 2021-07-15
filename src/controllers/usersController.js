const fs = require('fs');
const path = require('path');
const usuariosFilePath = path.join(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

const usersController = {
    /* GET - detalle de un usuario en particular */
    detail: (req, res) => {
        const id = req.params.id
        const detail = usuarios.find((u) => u.id == id)
        const viewData = {
            user: detail
        }
        res.render('users/detailUser', viewData);
    },

    registrar: (req, res) => res.render('registro'),
    ingresar: (req, res) => res.render('login'),

    editar: (req, res) => {
        const id = req.params.id
        const detail = users.find((u) => u.id == id)
        const viewData = {
            user: detail
        }
        res.render('users/editUser', viewData);
    },
};
module.exports = usersController;