const productsModel = require('../models/productsModel');

const validateInputs = async (req, res, next) => {
  const array = req.body;

  const productsId = array.some(({ productId }) => productId === undefined);
  const validQuantity = array.some(({ quantity }) => quantity === undefined);
  const quantityValue = array.some(({ quantity }) => Number(quantity) <= 0);
  if (productsId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (validQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (quantityValue) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
   }
  next();
};

const validateId = async (req, res, next) => {
  const array = req.body;
  const findIds = array.map(({ productId }) => productsModel.findProductById(productId));
  const products = await Promise.all(findIds);
  const isValid = products.some((prod) => prod === undefined);
  if (isValid) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};
module.exports = {
  validateInputs,
  validateId,
};
