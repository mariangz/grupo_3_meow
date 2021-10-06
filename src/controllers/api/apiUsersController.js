const db = require('../../database/models');
const { detail } = require('../productsController');

module.exports = {
    list: (req, res) => {
        db.User
            .findAll()
            .then(users => {
                return res.json({
                    total: users.length,
                    data: users,
                    status: 200,
                });
            }).catch(error => res.json(error));
    },

    profile: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {

                const response = {
                    meta: {
                        status: 200,
                        statusMsg: "OK"
                    },
                    data: {
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        rights: user.rights,
                        user_id: user.user_id,
                        Url_image: `http://localhost:3000/images/users/${user.image}`
                    }
                }

                res.status(200).json(response)
            })
            .catch(error => {
                res.status(500).json({
                    meta: {
                        status: 500,
                        statusMsg: "Internal server error"
                    },
                    data: []
                });
            });

    },

}