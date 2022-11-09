/* const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createUser } = require("./test_utils");

before(async () => {
  newuser = await createUser();
  });
 */
 /*  describe("Como administrador quiero hacer login:", function () {
    it("Autentificacion", async () => {
      const usuarios = {
        name: "Nuevo Usuario 11",
        email: "vrodriguez38@gmail.com",
      password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      }
      const response = await axios.post(API_URL + "/register", usuarios);
      expect(response.status).to.be.equal(201);
      expect(response.data).to.be.an("object");
      //console.log(response.data); muestra en consola
    });
}); */




// test/auth.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');
const app = require('../app');

const should = chai.shoul();

chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(app);

const User = require('../models/User');

describe('User', function () {
  // TESTS WILL GO HERE.
  it('should not be able to login if they have not registered', function (done) {
    agent.post('/login', { email: 'vrodriguez39@gmail.com', password: 'admin' }).end(function (err, res) {
      res.should.have.status(401);
      done();
    });
  });
  // signup
it('should be able to signup', function (done) {
  User.findOneAndRemove({ username: 'testone' }, function() {
    agent
      .post('/sign-up')
      .send({ username: 'testone', password: 'password' })
      .end(function (err, res) {
        console.log(res.body);
        res.should.have.status(200);
        agent.should.have.cookie('nToken');
        done();
      });
  });
});

after(function () {
  agent.close();
});

});