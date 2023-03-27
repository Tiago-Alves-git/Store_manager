const { json } = require('body-parser');
const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();
app.use(json());
const errorHandler = require('./middleware/errorHandler');
const { validationProductName } = require('./middleware/productsMiddleware');
const { validateInputs, validateId, validateSales } = require('./middleware/salesMiddleware');

app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/', productsController.findAllProducts);

app.get('/products/:id', productsController.findProductById);

app.put('/products/:id', validationProductName, productsController.updateById);

app.post('/products', validationProductName, productsController.createProducts);

app.post('/sales', validateInputs, validateId, salesController.createSales);

app.get('/sales', salesController.findAllSales);

app.get('/sales/:id', validateSales, salesController.findSalesById);

app.use(errorHandler);
module.exports = app;
