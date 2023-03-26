const model = require('../models/productsModel');

const httpErrGen = (status, message) => ({ status, message });

const findAllProducts = async () => {
  const result = await model.findAllProducts();
  return result;
};

const findProductById = async (id) => {
  const result = await model.findProductById(id);
  if (!result || result.length <= 0) {
    throw httpErrGen(404, 'Product not found');
   }
  return result;
};

const createProducts = async (name) => {
  const result = await model.createProducts(name);
  if (!result || result.length <= 0) {
    throw httpErrGen(404, 'Product not found')
  }
  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
  createProducts,
};
