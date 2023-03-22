const connection = require('./connection');

const findAllProducts = async () => {
  const query = 'SELECT * FROM products';
  const [Result] = await connection.execute(query);
  return Result
};

const findProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[Result]] = await connection.execute(query, [id])
  return Result
};

const createProducts = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [Insert] = await connection.execute(query, [name]);
  const query2 = 'SELECT * FROM products WHERE id = ?'
  const [[Result]] = await connection.execute(query2, [Insert.insertId]);
  return Result
 };

module.exports = {
  findAllProducts,
  findProductById,
  createProducts,
};
