const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");
const { API_URL, createUser } = require("./test_utils");

before(async () => {
  newuser = await createUser();
});

describe("Como administrador quiero hacer login:", function () {
    it("Autentificacion", async () => {
      const usuarios = {
        name: "Nuevo Usuario 11",
        email: "vrodriguez33@gmail.com",
        password: "admin",
        rol: "admin",
        sucursal: "Tecate",
      };
      const response = await axios.post(API_URL + "/register", usuarios);
      expect(response.status).to.be.equal(201);
      expect(response.data).to.be.an("object");
      //console.log(response.data); muestra en consola
    });
})
