const Product = require('./model.js');

module.exports = {
  allProducts: (req, res) => {
    Product.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

  oneProduct: (req, res) => {
    console.log("inside one product now: ", req.params.id);
    const id = req.params.id;
    Product.findById(id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  create: (req, res) => {
    Product.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  update: (req, res) => {
    const id = req.params.id;
    Product.findByIdAndUpdate(id, {$set: {title: req.body.title, price: req.body.price, url: req.body.url}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}