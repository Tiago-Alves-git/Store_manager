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
    throw httpErrGen(404, 'Product not found');
  }
  return result;
};

const updateById = async (id, name) => {
  const teste = await model.findProductById(id);
  if (!teste || teste.length <= 0) {
    throw httpErrGen(404, 'Product not found');
  }
  const result = await model.updateById(id, name);
  if (Number(result) === 1) {
    const updatedProduct = await findProductById(id);
    return updatedProduct;
  }
  throw httpErrGen(404, 'Product not changed');
};

const deleteProducts = async (id) => {
  const validateId = await model.findProductById(id);
  console.log(validateId);
  if (!validateId || validateId.length <= 0) {
    throw httpErrGen(404, 'Product not found');
  }
  await model.deleteProducts(id);
};

module.exports = {
  findAllProducts,
  findProductById,
  createProducts,
  deleteProducts,
  updateById,
};
