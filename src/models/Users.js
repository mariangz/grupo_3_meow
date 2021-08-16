// Editar la información de un usuario PENDIENTE
const fs = require('fs');
const path = require('path');

const User = {
    fileName: path.resolve('src/data/users.json'),

    getData: function() {
        console.log(this.fileName);
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    // Buscar a un usuario por su ID
    findByPk: function() {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    // Buscar al usuario que se quiere loguear por su email
    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    // Guardar al usuario en la DB
    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    // Eliminar a un usuario de la DB
    delete: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ''));
        return true;
    }
};

module.exports = User;