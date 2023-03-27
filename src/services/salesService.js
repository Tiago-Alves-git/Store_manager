const salesModel = require('../models/salesModel');

const createSales = async (body) => {
  const saleId = await salesModel.getDate();
  const result = body.map(({ productId, quantity }) =>
    salesModel.createSales(saleId, productId, quantity));
  await Promise.all(result);
  const itemsSold = body.map(({ productId, quantity }) => ({ productId, quantity }));
  return { id: saleId, itemsSold };
};

const findAllSales = async () => {
  const result = await salesModel.findAllSales();
  return result;
};

const findSalesById = async (id) => {
  const result = await salesModel.findSalesById(id);
  return result;
};

module.exports = {
  createSales,
  findAllSales,
  findSalesById,
};
