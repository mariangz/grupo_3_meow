const db = require('../../database/models');

module.exports = {
    productsAll: (req, res) => {
        db.Product
            .findAll()
            .then(result => {
                return res.json(result);
            }).catch(error => res.json(error));
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {

                const response = {
                    meta: {
                        status: 200,
                        statusMsg: "OK"
                    },
                    data: {
                        id: product.product_id,
                        name: product.productName,
                        description: product.shortDescription,
                        nutritional: product.nutritionalDetail,
                        price: product.productPrice,
                        category: [product.productCategory],
                        image: product.productImage,
                        detail: `http://localhost:3000/images/food/${product.productImage}`
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