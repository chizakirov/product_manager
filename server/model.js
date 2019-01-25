const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/product_manager', {useNewUrlParser: true });

const ProductSchema = new mongoose.Schema({
  title: {type: String, required: [true, "Title is required"], minlength: [2, "Title must be at least 2 characters"]},
  price: {type: Number, required: [true, "Price is required"]},
  url: {type: String, required: [true, "Image's url is required"]}
}, {timestamps:true});

module.exports = mongoose.model('Product', ProductSchema);