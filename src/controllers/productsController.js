const productsController = {
  atun: (req, res) => res.render('products/atun'),

  carne: (req, res) => res.render('products/carne'),

  pollo: (req, res) => res.render('products/pollo'),

  pescado: (req, res) => res.render('products/pescado'),

  salmon: (req, res) => res.render('products/salmon'),

  vegetariano: (req, res) => res.render('products/vegetariano'),
};

module.exports = productsController;