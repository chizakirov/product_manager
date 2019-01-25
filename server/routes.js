const controller = require('./controller.js');
const path = require("path");

module.exports = function(app){
  app
    .get('/api/products', controller.allProducts)
    .get('/api/products/:id', controller.oneProduct)
    .post('/api/products', controller.create)
    .put('/api/products/:id', controller.update)
    .delete('/api/products/:id', controller.delete)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}