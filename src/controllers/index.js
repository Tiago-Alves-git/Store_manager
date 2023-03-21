const service = require('../services/index');

const findAllProducts = async (_req, res, next) => {
  try {
    const result = await service.findAllProducts();
    console.log(result);
    return res.status(200).json(result)
  } catch (error) {
    next(error);
  }
};

const findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await service.findProductById(id);
    return res.status(200).json(result)
  } catch (error) {
    next(error);
  }
 };

module.exports = {
  findAllProducts,
  findProductById,
}
