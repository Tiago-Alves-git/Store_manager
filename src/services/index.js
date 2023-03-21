const model = require('../models/index');

const httpErrGen = (status, message) => ({ status, message })

const findAllProducts = async () => {
  const result = await model.findAllProducts();
  return result
};

const findProductById = async (id) => {
  const result = await model.findProductById(id);
  console.log(result);
  if (!result || result.length <= 0) {
    throw httpErrGen(404, 'Product not found')
   }
  return result
};

module.exports = {
  findAllProducts,
  findProductById,
}
