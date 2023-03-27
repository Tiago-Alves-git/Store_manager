const salesService = require('../services/salesService');

const createSales = async (req, res, next) => {
  const { body } = req;
  try {
   const result = await salesService.createSales(body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const findAllSales = async (_req, res, next) => {
  try {
    const result = await salesService.findAllSales();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const findSalesById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await salesService.findSalesById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSales,
  findAllSales,
  findSalesById,
};
