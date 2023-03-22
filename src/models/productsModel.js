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

module.exports = {
  findAllProducts,
  findProductById,
};
