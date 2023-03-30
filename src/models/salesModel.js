const camelize = require('camelize');
const connection = require('./connection');
// const snakeize = require('snakeize');
// SELECT ... FROM ... WHERE condition ORDER BY field1, field2 DESC;
// SELECT ... FROM t1 JOIN t2 ON t1.id1 = t2.id2 WHERE condition;

const createSales = async (saleId, productId, quantity) => {
  const [{ affectedRows }] = await connection.execute(`
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);
  `, [saleId, productId, quantity]);
  return affectedRows;
};

const getDate = async () => {
  const [{ insertId }] = await connection.execute(`
  INSERT INTO StoreManager.sales (date) VALUES (NOW()); `);
  return insertId;
};

const findAllSales = async () => {
  const query = `
  SELECT * FROM sales JOIN sales_products ON sales.id = sales_products.sale_id
  ORDER BY sales_products.sale_id, sales_products.product_id`;
  const [result] = await connection.execute(query);
  return camelize(result);
};

const findSalesById = async (id) => {
  const query = `
  SELECT date,product_id,quantity
  FROM sales JOIN sales_products
  ON sales.id = sales_products.sale_id
  WHERE sales_products.sale_id = ?
  ORDER BY sales_products.product_id`;
  const [result] = await connection.execute(query, [id]);
  return camelize(result);
};

module.exports = {
  createSales,
  getDate,
  findAllSales,
  findSalesById,
};
