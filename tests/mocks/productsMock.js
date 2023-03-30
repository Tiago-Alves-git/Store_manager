const initialDataBase = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const failedSearch = {
  statusCode: 404,
  message: 'Product not found'
}

const newProduct = {
  "id": 6,
  "name": "ProdutoDeTestes"
};

const updateById = {
  "id": 1,
  "name": "Martelo do Ussop"
};


module.exports = {
  initialDataBase,
  failedSearch,
  newProduct,
  updateById,
};
