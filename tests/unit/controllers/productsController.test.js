const { initialDataBase, failedSearch } = require('../../mocks/productsMock');
const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

describe('Teste de unidade do productsController', function () {
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista com os produtos', async function () {
      // arrange
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findAllProducts')
        .resolves(initialDataBase);

      // act
      await productsController.findAllProducts(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(initialDataBase);
    });
  });

  it('Deve retornar o status 200 e a lista com os produtos por id', async function () {
    //arrange
    const res = {};
    const req = {
      params: { id: 1, }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findProductById')
      .resolves(initialDataBase[0])

    //act
    await productsController.findProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(initialDataBase[0]);
  });

  it('Deve retornar o produto cadastrado', async function () {

  });
  afterEach(function () {
    sinon.restore();
  });
});
