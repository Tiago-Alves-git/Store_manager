const { initialDataBase, failedSearch } = require('../../mocks/productsMock');
const productsModel = require('../../../src/models/productsModel');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

describe('Teste de unidade do productsModel', function () {
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista com os produtos', async function () {
      // arrange
      // act
      const resposta = await productsModel.findAllProducts();

      // assert
      expect(resposta).to.be.deep.equal(initialDataBase);
    });
  });

  it('Deve retornar o status 200 e a lista com os produtos por id', async function () {
    //arrange
    //act
    const result = await productsModel.findProductById(1);
    expect(result).to.be.deep.equal(initialDataBase[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});
