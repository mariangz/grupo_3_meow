const mainController = {
  index: (req, res) => res.render('home'),

  login: (req, res) => res.render('login'),

  registro: (req, res) => res.render('registro'),

  carrito: (req, res) => res.render('carrito'),
};

module.exports = mainController;
