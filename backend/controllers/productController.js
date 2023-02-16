const Product = require('../models/productModel');

// create product -- Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    succes: true,
    product,
  });
};

// Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ succes: true, products });
};

// get signle product detail
exports.getProdutcDetails = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ succes: false, message: 'Product not found' });
  }
  res.status(200).json({
    succes: true,
    product,
  });
};

// update product
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ succes: false, message: 'Product not found' });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    // useFindAndModify: false,
  });
  res.status(200).json({
    succes: true,
    product,
  });
};

// Delete product
exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ succes: false, message: 'Product not found' });
  }
  await product.remove();
  res.status(200).json({
    succes: true,
    message: 'Product delete successfully',
  });
};
