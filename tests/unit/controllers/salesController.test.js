const { initialDataBase, failedSearch, newProduct, updateById } = require('../../mocks/productsMock');
const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/productsController');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
// const errorHandler = require('../../../src/middleware/errorHandler');

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
    try {
      await productsController.findProductById(req, res);
    } catch (error) {
      expect(error.message).to.be.deep.equal('Product not found');
    }

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(initialDataBase[0]);
  });

  it('Deve retornar o produto cadastrado', async function () {
    //assert
    const res = {};
    const req = {
      body: { name: 'ProdutoDeTestes' }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);
    sinon
      .stub(productsService, 'createProducts')
      .resolves(newProduct);

    //act
    try {
      await productsController.createProducts(req, res);
    } catch (error) {
      expect(error.message).to.be.deep.equal('Product not found');
    }

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it('Deve retornar o produto atualizado por ID', async function () {
    //assert
    const res = {};
    const req = {
      body: {
        "name": "Martelo do Ussop"
      },
      params: { id: 1, }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(req);
    sinon
      .stub(productsService, 'updateById')
      .resolves(updateById);

    //act
    try {
      await productsController.updateById(req, res);
    } catch (error) {
      expect(error.message).to.be.deep.equal('Product not found');
    }

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(updateById);
  });

  it('Deve deletar um produto com sucesso', async function () {
    //assert
    const res = {};
    const req = {
      params: { id: 1, }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'deleteProducts')
      .resolves();

    //act
    try {
      await productsController.deleteProducts(req, res);
    } catch (error) {
      expect(error.message).to.be.deep.equal('Product not found');
    }

    expect(res.status).to.have.been.calledWith(204);
  });

  afterEach(function () {
    sinon.restore();
  });
});
