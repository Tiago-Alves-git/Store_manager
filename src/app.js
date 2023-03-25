const { json } = require('body-parser');
const express = require('express');
const controller = require('./controllers/productsController');

const app = express();
app.use(json());
const errorHandler = require('./middleware/errorHandler');
const { validationProductName } = require('./middleware/productsMiddleware');

app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/', controller.findAllProducts);

app.get('/products/:id', controller.findProductById);

app.post('/products', validationProductName, controller.createProducts);

app.use(errorHandler);
module.exports = app;
