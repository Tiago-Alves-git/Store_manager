const connection = require('./connection');
// const snakeize = require('snakeize');

const createSales = async (saleId, productId, quantity) => {
  const [{ insertId }] = await connection.execute(`
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);
  `, [saleId, productId, quantity]);
  return insertId;
};

const getDate = async () => {
  const [{ insertId }] = await connection.execute(`
  INSERT INTO StoreManager.sales (date) VALUES (NOW()); `);
  return insertId;
};

module.exports = {
  createSales,
  getDate,
};
