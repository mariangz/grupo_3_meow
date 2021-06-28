const productsController = {
  atun: (req, res) => res.render('products/atun'),

  carne: (req, res) => res.render('carne'),

  pollo: (req, res) => res.render('pollo'),

  pescado: (req, res) => res.render('pescado'),

  salmon: (req, res) => res.render('salmon'),

  vegetariano: (req, res) => res.render('vegetariano'),
};

module.exports = productsController;
