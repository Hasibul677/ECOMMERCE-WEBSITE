const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorHander");

//Create Product ------- Admin
exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  if (product) {
    res.status(201).json({
      success: true,
      product,
    });
  } else {
    res.status(401);
    throw new Error("Failed to Create Product");
  }
};

//Get All Product
exports.getAllProduct = async (req, res, next) => {
  const products = await Product.find();

  if (products) {
    res.status(201).json({
      success: true,
      products,
    });
  } else {
    return next(new ErrorHander("No Product Found", 404));
  }
};

//Update Single Product -----Admin
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product Not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).json({
    success: true,
    product,
  });
};

//Delete Single Product -----Admin
exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product Not Found", 404));
  }

  await product.remove();

  res.status(201).json({
    success: true,
    message: "Product Delete Successfully",
  });
};

//Get Product Details
exports.getProductDetails = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product Not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
};
