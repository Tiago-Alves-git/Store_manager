const { initialDataBase } = require('../../mocks/productsMock');
const productsService = require('../../../src/services/productsService');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

describe('Teste de unidade do productsService', function () {
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista com os produtos', async function () {
      // arrange
      const dataBase = initialDataBase;
      sinon
        .stub(productsService, 'findAllProducts')
        .resolves(initialDataBase);

      // act
      const result = await productsService.findAllProducts();

      // assert
      expect(result).to.be.deep.equal(dataBase);
    });
  });

  it('Deve retornar o status 200 e a lista com os produtos por id', async function () {
    //arrange
    sinon
      .stub(productsService, 'findProductById')
      .resolves(initialDataBase[0])

    //act
    const result = await productsService.findProductById(1);
    expect(result).to.be.deep.equal(initialDataBase[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});
