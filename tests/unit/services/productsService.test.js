const { initialDataBase, newProduct } = require('../../mocks/productsMock');
const productsService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

describe('Teste de unidade do productsService', function () {
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista com os produtos', async function () {
      // arrange
      sinon
        .stub(productsModel, 'findAllProducts')
        .resolves(initialDataBase);

      // act
      const result = await productsService.findAllProducts();

      // assert
      expect(result).to.be.deep.equal(initialDataBase);
    });
  });

  it('Deve retornar o status 200 e a lista com os produtos por id', async function () {
    //arrange
    sinon
      .stub(productsModel, 'findProductById')
      .resolves(initialDataBase[0])

    //act
    const result = await productsService.findProductById(1);
    expect(result).to.be.deep.equal(initialDataBase[0]);
  });

  it('Deve retornar o status 200 e o novo produto criado', async function () {
    //arrange
    sinon
      .stub(productsModel, 'createProducts')
      .resolves(newProduct)

    //act
    const result = await productsService.createProducts(newProduct);
    expect(result).to.be.deep.equal(newProduct);
  });

  afterEach(function () {
    sinon.restore();
  });
});
