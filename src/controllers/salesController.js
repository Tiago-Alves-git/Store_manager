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

module.exports = {
  createSales,
};
