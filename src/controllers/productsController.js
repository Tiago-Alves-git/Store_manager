const service = require('../services/productsService');

const findAllProducts = async (_req, res, next) => {
  try {
    const result = await service.findAllProducts();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.findProductById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const createProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await service.createProducts(name);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await service.updateById(id, name);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
 };

module.exports = {
  findAllProducts,
  findProductById,
  createProducts,
  updateById,
};
