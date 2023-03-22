const express = require('express');
const controller = require('./controllers/productsController');

const app = express();
const errorHandler = require('./middleware/errorHandler');



app.get('/', (_request, response) => {
  response.send();
});

app.get('/products/', controller.findAllProducts);

app.get('/products/:id', controller.findProductById);


app.use(errorHandler);
module.exports = app;
