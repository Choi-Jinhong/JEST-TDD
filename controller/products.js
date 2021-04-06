const productModel = require('../models/Products');

exports.createProduct = async (req, res, next) => {
    const createdProduct = await productModel.create(req.body);
    console.log('createProduct: ', createdProduct);
    res.status(201).json(createdProduct);
}