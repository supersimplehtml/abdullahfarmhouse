const mongoose = require('mongoose');

const connectDB = require('../db/connectdb');
connectDB()
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image:{
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
